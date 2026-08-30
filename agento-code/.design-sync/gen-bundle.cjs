// Regenerates _ds_bundle.js from this directory's .jsx sources, byte-identically
// to what claude.ai/design compiles. Proven by regenerating a known-good bundle
// and comparing sha256. Use it when pulling project -> repo so the 100KB+ bundle
// never has to be copied by hand.
//
//   npm i --no-save @babel/core @babel/preset-react
//   DS=$PWD/ OUT=$PWD/_ds_bundle.js node .design-sync/gen-bundle.cjs
//
// See NOTES.md ("Sync 2026-08-30") for the format rules this encodes.
const babel = require("@babel/core"); // needs @babel/core + @babel/preset-react
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const DS = process.env.DS;
const NS = 'AgentoDesignSystem_36a6ee';

function listSources() {
  const out = [];
  for (const g of ['components/content','components/core','components/navigation','components/patterns'])
    for (const f of fs.readdirSync(DS+g).filter(f=>f.endsWith('.jsx')).sort()) out.push(g+'/'+f);
  for (const g of ['ui_kits/docs','ui_kits/website'])
    for (const f of fs.readdirSync(DS+g).filter(f=>f.endsWith('.jsx')).sort()) out.push(g+'/'+f);
  return out;
}

// compile one file: strip imports, rewrite imported bindings to __ds_scope.X, drop `export`
function compile(rel) {
  const src = fs.readFileSync(DS+rel, 'utf8');
  const imported = new Map();   // local name -> true (non-react)
  const exported = [];
  const plugin = ({types:t}) => ({
    visitor: {
      ImportDeclaration(p) {
        const from = p.node.source.value;
        if (from !== 'react') for (const s of p.node.specifiers) imported.set(s.local.name, true);
        p.remove();
      },
      ExportNamedDeclaration(p) {
        const d = p.node.declaration;
        if (d) {
          if (d.type === 'FunctionDeclaration') exported.push(d.id.name);
          else if (d.type === 'VariableDeclaration') for (const v of d.declarations) exported.push(v.id.name);
          p.replaceWith(d);
        } else { for (const s of p.node.specifiers) exported.push(s.local.name); p.remove(); }
      },
      JSXIdentifier(p) {
        // only element-name positions, and only bare <Name>, not <a.b> or attributes
        const par = p.parent;
        const isName = (par.type === 'JSXOpeningElement' || par.type === 'JSXClosingElement') && par.name === p.node;
        if (!isName) return;
        if (!imported.has(p.node.name)) return;
        p.replaceWith(t.jsxMemberExpression(t.jsxIdentifier('__ds_scope'), t.jsxIdentifier(p.node.name)));
      },
      ReferencedIdentifier(p) {
        if (p.parentPath.isJSXOpeningElement() || p.parentPath.isJSXClosingElement()) return;
        if (imported.has(p.node.name) && !p.scope.hasOwnBinding(p.node.name))
          p.replaceWith(t.memberExpression(t.identifier('__ds_scope'), t.identifier(p.node.name)));
      },
    },
  });
  const code = babel.transformSync(src, {
    filename: path.basename(rel),
    presets: [["@babel/preset-react", {runtime:"classic"}]],
    plugins: [plugin], configFile:false, babelrc:false, sourceType:'module',
  }).code;
  return { code, exported };
}

function deps(rel) {
  const src = fs.readFileSync(DS+rel,'utf8');
  const out = [];
  for (const m of src.matchAll(/^import\s+.*?from\s+'([^']+)'/gm)) {
    if (m[1] === 'react') continue;
    out.push(path.normalize(path.join(path.dirname(rel), m[1])));
  }
  return out;
}

const files = listSources();
const info = new Map(files.map(f => [f, compile(f)]));
const depmap = new Map(files.map(f => [f, deps(f)]));

// emit alphabetically, deferring a file until its deps are emitted, then retrying
const emitted = [], done = new Set();
function ready(f){ return depmap.get(f).every(d => done.has(d)); }
let pending = files.slice();
let progress = true;
while (pending.length && progress) {
  progress = false;
  const next = [];
  for (const f of pending) {
    if (ready(f)) { emitted.push(f); done.add(f); progress = true;
      // retry deferred ones immediately, in original order
      let again = true;
      while (again) { again = false;
        for (let i=0;i<next.length;i++) if (ready(next[i])) { const g=next.splice(i,1)[0]; emitted.push(g); done.add(g); again=true; break; }
      }
    } else next.push(f);
  }
  pending = next;
}
if (pending.length) throw new Error('unresolved: '+pending);

// header
const components = [];
for (const f of files) if (f.startsWith('components/')) for (const n of info.get(f).exported) components.push({name:n, sourcePath:f});
const sourceHashes = {};
for (const f of files) sourceHashes[f] = crypto.createHash('sha256').update(fs.readFileSync(DS+f)).digest('hex').slice(0,12);
const header = {format:4, namespace:NS, components, sourceHashes, inlinedExternals:[], unexposedExports:[]};

let out = '/* @ds-bundle: ' + JSON.stringify(header) + ' */\n\n(() => {\n\n';
out += 'const __ds_ns = (window.'+NS+' = window.'+NS+' || {});\n\n';
out += 'const __ds_scope = {};\n\n';
out += '(__ds_ns.__errors = __ds_ns.__errors || []);\n\n';
for (const f of emitted) {
  const {code, exported} = info.get(f);
  out += '// ' + f + '\ntry { (() => {\n' + code + '\n';
  if (exported.length) out += 'Object.assign(__ds_scope, { ' + exported.join(', ') + ' });\n';
  out += '})(); } catch (e) { __ds_ns.__errors.push({ path: "'+f+'", error: String((e && e.message) || e) }); }\n\n';
}
for (const c of components) out += '__ds_ns.'+c.name+' = __ds_scope.'+c.name+';\n\n';
out += '})();\n';
fs.writeFileSync(process.env.OUT, out);
console.log('emitted order:', emitted.join(' '));
