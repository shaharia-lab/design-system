/* @ds-bundle: {"format":4,"namespace":"AgentoDesignSystem_36a6ee","components":[{"name":"Byline","sourcePath":"components/content/Byline.jsx"},{"name":"DataTable","sourcePath":"components/content/DataTable.jsx"},{"name":"KeyList","sourcePath":"components/content/KeyList.jsx"},{"name":"Note","sourcePath":"components/content/Note.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"Row","sourcePath":"components/content/Row.jsx"},{"name":"RowList","sourcePath":"components/content/Row.jsx"},{"name":"Shot","sourcePath":"components/content/Shot.jsx"},{"name":"StatGrid","sourcePath":"components/content/StatGrid.jsx"},{"name":"Steps","sourcePath":"components/content/Steps.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CodeBlock","sourcePath":"components/core/CodeBlock.jsx"},{"name":"CodeKey","sourcePath":"components/core/CodeBlock.jsx"},{"name":"CodeStr","sourcePath":"components/core/CodeBlock.jsx"},{"name":"CodeComment","sourcePath":"components/core/CodeBlock.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"NavButton","sourcePath":"components/core/NavButton.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Sheet","sourcePath":"components/core/Sheet.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"Crumbs","sourcePath":"components/navigation/Crumbs.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Masthead","sourcePath":"components/navigation/Masthead.jsx"},{"name":"Pager","sourcePath":"components/navigation/Pager.jsx"},{"name":"SearchBox","sourcePath":"components/navigation/SearchBox.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Toc","sourcePath":"components/navigation/Toc.jsx"},{"name":"Wordmark","sourcePath":"components/navigation/Wordmark.jsx"},{"name":"CardGrid","sourcePath":"components/patterns/CardGrid.jsx"},{"name":"Split","sourcePath":"components/patterns/CardGrid.jsx"},{"name":"Closer","sourcePath":"components/patterns/Closer.jsx"},{"name":"Disclosure","sourcePath":"components/patterns/Disclosure.jsx"},{"name":"Hero","sourcePath":"components/patterns/Hero.jsx"},{"name":"MetaRule","sourcePath":"components/patterns/MetaRule.jsx"},{"name":"Panel","sourcePath":"components/patterns/Panel.jsx"},{"name":"PostRow","sourcePath":"components/patterns/PostRow.jsx"},{"name":"SectionHead","sourcePath":"components/patterns/SectionHead.jsx"},{"name":"StarBand","sourcePath":"components/patterns/StarBand.jsx"}],"sourceHashes":{"components/content/Byline.jsx":"e6ae42a8c927","components/content/DataTable.jsx":"b72e578238ac","components/content/KeyList.jsx":"804596d521f8","components/content/Note.jsx":"8182e6b947a3","components/content/PullQuote.jsx":"15538db41e84","components/content/Row.jsx":"ff418e18799a","components/content/Shot.jsx":"18eca44ff13a","components/content/StatGrid.jsx":"04054f7156c7","components/content/Steps.jsx":"64707ffe726a","components/core/ArrowLink.jsx":"e770fbf6fa1d","components/core/Badge.jsx":"0f08db413a9d","components/core/Button.jsx":"dd52a5528aa2","components/core/CodeBlock.jsx":"95139e3b9a79","components/core/Eyebrow.jsx":"338e5310d356","components/core/NavButton.jsx":"9572d24da427","components/core/Pill.jsx":"2b1fc21495ee","components/core/Sheet.jsx":"cf4e9cfe7e4b","components/core/ThemeToggle.jsx":"00c7dff40983","components/navigation/Crumbs.jsx":"942bf5a58348","components/navigation/Footer.jsx":"952023e4a31c","components/navigation/Masthead.jsx":"39566762e996","components/navigation/Pager.jsx":"69a739e4c351","components/navigation/SearchBox.jsx":"2f0035ffab57","components/navigation/SidebarNav.jsx":"93ec7e62af27","components/navigation/Toc.jsx":"a91b28f93c8a","components/navigation/Wordmark.jsx":"0539fedd83e0","components/patterns/CardGrid.jsx":"28f94fe912c0","components/patterns/Closer.jsx":"f097b5a3ac24","components/patterns/Disclosure.jsx":"df2b2d354cb2","components/patterns/Hero.jsx":"fe7e25e59efa","components/patterns/MetaRule.jsx":"ee04e27767be","components/patterns/Panel.jsx":"650cc06716b5","components/patterns/PostRow.jsx":"7f1f580e0566","components/patterns/SectionHead.jsx":"5a3e790a19dd","components/patterns/StarBand.jsx":"f70a49a6443f","ui_kits/docs/DocsPage.jsx":"5ce56a9dfd85","ui_kits/website/Blog.jsx":"6b5bd2f4d437","ui_kits/website/Landing.jsx":"f708429e96f0","ui_kits/website/StaticPage.jsx":"48ffe700bc7a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AgentoDesignSystem_36a6ee = window.AgentoDesignSystem_36a6ee || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Byline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Author line under a post. The avatar is initials in mono on a blue-tint disc
   — there are no photographs anywhere in this brand. */
function Byline({
  initials,
  name,
  role,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 34,
      paddingTop: 22,
      borderTop: 'var(--bw) solid var(--ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      border: 'var(--bw) solid var(--ink)',
      background: 'var(--accent-tint)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14
    }
  }, initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-soft)'
    }
  }, role)));
}
Object.assign(__ds_scope, { Byline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Byline.jsx", error: String((e && e.message) || e) }); }

// components/content/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Ink-bordered wrapper, mono uppercase headers on a sunken ground, hairline
   faint cell rules, last row unruled. */
function DataTable({
  head = [],
  rows = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflowX: 'auto',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--radius)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%',
      background: 'var(--raised)',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, head.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: 'left',
      padding: '9px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-button)',
      textTransform: 'uppercase',
      background: 'var(--sunken)',
      borderBottom: 'var(--bw) solid var(--ink)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      textAlign: 'left',
      padding: '9px 12px',
      borderBottom: ri === rows.length - 1 ? 0 : 'var(--bw-hair) solid var(--ink-faint)'
    }
  }, c)))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/content/KeyList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The bulleted list inside a landing panel, where each item opens with a bold
   term and then explains it: "Cost per session, priced at the rate in effect
   when each message ran." The marker is a small square, not a disc — the design
   has no round bullets. */
function KeyList({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it.term || i,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 5,
      height: 5,
      marginTop: 8,
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("span", null, it.term ? /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)',
      fontWeight: 700
    }
  }, it.term) : null, it.term && it.children ? ' — ' : null, it.children))));
}
Object.assign(__ds_scope, { KeyList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/KeyList.jsx", error: String((e && e.message) || e) }); }

// components/content/Note.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A dashed-border aside inside prose. The keyword sits in its own mono column.
   The warn variant switches the border to solid amber. */
function Note({
  kind = 'note',
  label,
  style,
  children,
  ...rest
}) {
  const warn = kind === 'warn';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 12,
      padding: '14px 16px',
      margin: '0 0 20px',
      border: 'var(--bw) ' + (warn ? 'solid var(--warn)' : 'dashed var(--ink)'),
      borderRadius: 'var(--radius)',
      background: 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: warn ? 'var(--warn)' : 'var(--ink)',
      whiteSpace: 'nowrap',
      paddingTop: 2
    }
  }, label || (warn ? 'Careful' : 'Note')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--ink-soft)'
    }
  }, children));
}
Object.assign(__ds_scope, { Note });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Note.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A pull quote inside a post: ink border with a 6px blue left edge, raised
   ground, and the quote itself set in the display serif at 25px. */
function PullQuote({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: '26px 0',
      padding: '20px 24px',
      border: 'var(--bw) solid var(--ink)',
      borderLeft: '6px solid var(--accent)',
      borderRadius: 'var(--radius)',
      background: 'var(--raised)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink)',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 25,
      lineHeight: 1.3
    }
  }, children));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/Shot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The only frame product screenshots ever appear in: 2px ink border, 8px solid
   offset, a sunken title bar with three ink-outlined dots and a mono app label,
   and an optional mono caption below a hairline rule. */
function Shot({
  name,
  src,
  alt,
  caption,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      border: 'var(--bw-strong) solid var(--ink)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--offset)',
      background: 'var(--raised)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      borderBottom: 'var(--bw) solid var(--ink)',
      background: 'var(--sunken)'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      border: '1.2px solid var(--ink)',
      background: 'var(--paper)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginLeft: 4
    }
  }, name)), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || ''
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--paper)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, alt || 'Screenshot'), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: '10px 14px',
      borderTop: 'var(--bw) solid var(--ink)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { Shot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Shot.jsx", error: String((e && e.message) || e) }); }

// components/content/StatGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* One bordered, shadowed strip divided by ink rules — never separate floating
   cards. Numbers are mono, tabular, 21px. */
function StatGrid({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + items.length + ', 1fr)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--radius)',
      background: 'var(--raised)',
      boxShadow: 'var(--offset)',
      overflow: 'hidden',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '16px 18px',
      borderRight: i === items.length - 1 ? 0 : 'var(--bw) solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 21,
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1.2
    }
  }, it.n), /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      marginTop: 3
    }
  }, it.k))));
}
Object.assign(__ds_scope, { StatGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/Steps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Three numbered cells in one bordered, shadowed strip. The numeral is a 26px
   ink-bordered blue-tint disc — the only round element besides pills. */
function Steps({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + items.length + ', 1fr)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--radius)',
      background: 'var(--raised)',
      boxShadow: 'var(--offset)',
      overflow: 'hidden',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 24,
      borderRight: i === items.length - 1 ? 0 : 'var(--bw) solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--ink)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--radius-pill)',
      width: 26,
      height: 26,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--accent-tint)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 20,
      margin: '14px 0 8px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 14.5,
      color: 'var(--ink-soft)'
    }
  }, it.body), it.footer)));
}
Object.assign(__ds_scope, { Steps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Steps.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The small mono link that ends a panel or a section: "Requirements ↗",
   "All documentation ↗", "Full installation guide". Never a button — it is the
   quiet way out of a block. The arrow is a character, not an icon: ↗ leaves the
   page or opens a doc, → continues within it. */
function ArrowLink({
  href,
  arrow = 'out',
  tone = 'muted',
  size = 11,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const accent = tone === 'accent';
  const glyph = arrow === 'in' ? '→' : arrow === 'none' ? null : '↗';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-mono)',
      fontSize: size,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: accent ? 'var(--accent-deep)' : 'var(--ink-soft)',
      borderBottom: '1.5px solid ' + (hover ? accent ? 'var(--accent)' : 'var(--ink)' : 'transparent'),
      paddingBottom: 1,
      cursor: 'pointer',
      ...style
    }
  }, rest), children, glyph ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? 'translate(1px, ' + (arrow === 'in' ? '0' : '-1px') + ')' : 'none',
      transition: 'transform var(--dur-press) var(--ease)'
    }
  }, glyph) : null);
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A squared 10px mono tag on a sunken ground with a faint border. Used inside
   hairline rows to name a file kind or a destination. */
function Badge({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 'var(--tracking-button)',
      textTransform: 'uppercase',
      padding: '3px 7px',
      borderRadius: 'var(--radius)',
      background: 'var(--sunken)',
      border: 'var(--bw-hair) solid var(--ink-faint)',
      color: 'var(--ink-soft)',
      flex: 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Row.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* One hairline row in a stacked list. The list has an 8px gap and no shadow of
   its own; the panel around it carries the shadow. Hover promotes the faint
   border to full ink and darkens the ground to sunken. */
function Row({
  href,
  badge,
  title,
  mono,
  right,
  go = '→',
  recommended,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 'var(--pad-row)',
      border: 'var(--bw-hair) solid ' + (hover || recommended ? 'var(--ink)' : 'var(--ink-faint)'),
      borderRadius: 'var(--radius)',
      background: recommended ? 'var(--accent-tint)' : hover ? 'var(--sunken)' : 'var(--raised)',
      textDecoration: 'none',
      color: 'var(--ink)',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge) : null, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 16.5
    }
  }, title) : null, mono ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5
    }
  }, mono) : null, children, right ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 14,
      color: 'var(--ink-soft)',
      textAlign: 'right'
    }
  }, right) : null, go ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: right ? 0 : 'auto',
      fontFamily: 'var(--font-mono)',
      color: hover ? 'var(--accent-deep)' : 'var(--ink-faint)'
    }
  }, go) : null);
}
function RowList({
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-rows)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Row, RowList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Row.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The site's primary control. A 2px ink border, a solid 5px offset shadow, and
   a press that translates the button onto its own shadow. Mono, uppercase,
   0.08em tracking. */
const VARIANTS = {
  default: {
    background: 'var(--raised)',
    color: 'var(--ink)'
  },
  primary: {
    background: 'var(--accent)',
    color: 'var(--on-accent)'
  },
  ink: {
    background: 'var(--ink)',
    color: 'var(--paper)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--paper)'
  }
};
function Button({
  variant = 'default',
  href,
  onClick,
  disabled,
  onInvert,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const shadowColor = onInvert ? 'var(--paper)' : 'var(--ink)';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: 'var(--pad-btn)',
    border: 'var(--bw-strong) solid ' + (onInvert ? 'var(--paper)' : 'var(--ink)'),
    borderRadius: 'var(--radius)',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 'var(--tracking-button)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    boxShadow: press ? '0 0 0 ' + shadowColor : hover ? '2px 2px 0 ' + shadowColor : '5px 5px 0 ' + shadowColor,
    transform: press ? 'translate(4px, 4px)' : hover ? 'translate(2px, 2px)' : 'none',
    transition: 'transform var(--dur-press) var(--ease), box-shadow var(--dur-press) var(--ease)',
    ...(VARIANTS[variant] || VARIANTS.default),
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: base
  }, handlers, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: base,
    disabled: disabled
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* One solid inverted rectangle. Never a window bar, never a title strip — the
   site strips those off Expressive Code's frames to match this. Token classes
   inside: .k keyword, .s string, .c comment. */
function CodeBlock({
  code,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("pre", _extends({
    style: {
      background: 'var(--code-bg)',
      color: 'var(--code-fg)',
      border: 'var(--bw) solid var(--code-border)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      lineHeight: 1.7,
      padding: '14px 16px',
      overflowX: 'auto',
      margin: 0,
      ...style
    }
  }, rest), children != null ? children : code);
}
function CodeKey({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-key)',
      fontWeight: 700
    }
  }, children);
}
function CodeStr({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-accent)'
    }
  }, children);
}
function CodeComment({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--code-comment)'
    }
  }, children);
}
Object.assign(__ds_scope, { CodeBlock, CodeKey, CodeStr, CodeComment });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The signature device: a 16px em-rule, then an 11px mono uppercase label set
   into the top-left of the panel it names. An optional `end` slot sits
   right-aligned, usually a blue-underlined link. */
function Eyebrow({
  end,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 18,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1.5,
      background: 'var(--ink-soft)',
      flex: 'none'
    }
  }), children, end ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      letterSpacing: '0.04em',
      textTransform: 'none'
    }
  }, end) : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/NavButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The 26px-tall masthead control: star count, theme toggle. Smaller and
   flatter than Button — 1.5px border, no shadow. */
function NavButton({
  href,
  onClick,
  hoverTint = 'sunken',
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    height: 26,
    padding: '0 10px',
    border: 'var(--bw) solid var(--ink)',
    borderRadius: 'var(--radius)',
    background: hover ? hoverTint === 'accent' ? 'var(--accent-tint)' : 'var(--sunken)' : 'var(--raised)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 'var(--tracking-nav)',
    textTransform: 'uppercase',
    lineHeight: 1,
    textDecoration: 'none',
    cursor: 'pointer',
    ...style
  };
  const h = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: base
  }, h, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: base
  }, h, rest), children);
}
Object.assign(__ds_scope, { NavButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A fully-round mono capsule. Tinted by default (blue-tint ground, ink border);
   `plain` drops the fill and is what metadata rows use. */
function Pill({
  plain,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--radius-pill)',
      background: plain ? 'transparent' : 'var(--accent-tint)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Sheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A sheet is the design's card: raised ground, 1.5px ink border, 2px radius,
   and a solid 8px ink offset shadow. `dashed` is the provisional/secondary
   surface — transparent ground, dashed border, no shadow. */
function Sheet({
  variant = 'default',
  as: Tag = 'div',
  style,
  children,
  ...rest
}) {
  const v = {
    default: {
      background: 'var(--raised)',
      boxShadow: 'var(--offset)',
      borderStyle: 'solid'
    },
    flat: {
      background: 'var(--raised)',
      boxShadow: 'none',
      borderStyle: 'solid'
    },
    dashed: {
      background: 'transparent',
      boxShadow: 'none',
      borderStyle: 'dashed'
    },
    accent: {
      background: 'var(--raised)',
      boxShadow: 'var(--offset-accent)',
      borderStyle: 'solid'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--radius)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The masthead theme switch. The label names the theme you will GET, not the
   one you are in — the site reads "Dark" while in light. Writes data-theme on
   <html> and remembers the choice; the upstream site uses the Starlight key so
   its docs and marketing halves share one memory. Pair with the pre-paint
   script in INSTALL.md, or the first render will flash. */
function ThemeToggle({
  storageKey = 'starlight-theme',
  defaultTheme,
  onChange,
  style,
  ...rest
}) {
  const [theme, setTheme] = React.useState(defaultTheme || 'light');
  React.useEffect(() => {
    if (defaultTheme) return;
    let saved = null;
    try {
      saved = window.localStorage.getItem(storageKey);
    } catch (e) {/* private mode */}
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
      return;
    }
    const root = document.documentElement.getAttribute('data-theme');
    if (root === 'dark' || root === 'light') {
      setTheme(root);
      return;
    }
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, [storageKey, defaultTheme]);
  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem(storageKey, next);
    } catch (e) {/* private mode */}
    if (onChange) onChange(next);
  };
  const target = theme === 'dark' ? 'Light' : 'Dark';
  return /*#__PURE__*/React.createElement(__ds_scope.NavButton, _extends({
    onClick: flip,
    "aria-label": 'Switch to ' + target.toLowerCase() + ' theme',
    style: {
      minWidth: 66,
      ...style
    }
  }, rest), target);
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Crumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Mono uppercase breadcrumb trail above a docs h1. Faint, separated by '/'. */
function Crumbs({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginBottom: 14,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-faint)'
    }
  }, "/") : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, it))));
}
Object.assign(__ds_scope, { Crumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Crumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Site footer: a dashed hairline above, a mono copyright left, mono uppercase
   links, and a closing aside pinned right — the site's is
   "runs entirely on your machine —", trailing em dash included. */
function Footer({
  copyright,
  links = [],
  aside,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      marginTop: 60,
      borderTop: '1.5px dashed var(--ink-faint)',
      padding: '22px 0 46px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 18,
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      marginRight: 'auto',
      letterSpacing: 'var(--tracking-nav)'
    }
  }, copyright), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: l.onClick,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: 'var(--ink)',
      borderBottom: 'var(--bw) solid var(--ink)'
    }
  }, l.label)), aside ? /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      marginLeft: 'auto',
      letterSpacing: 'var(--tracking-nav)'
    }
  }, aside) : null);
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pager.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Previous/next at the foot of a docs page. Two sheets; the right one is
   right-aligned, and titles are set in the display serif at 22px. */
function Pager({
  prev,
  next,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 48,
      ...style
    }
  }, rest), [prev, next].map((p, i) => p ? /*#__PURE__*/React.createElement(__ds_scope.Sheet, {
    key: i,
    variant: "flat",
    as: "a",
    href: p.href,
    style: {
      padding: '16px 18px',
      display: 'block',
      textDecoration: 'none',
      color: 'var(--ink)',
      textAlign: i ? 'right' : 'left',
      gridColumn: i && !prev ? 2 : 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      display: 'block',
      marginBottom: 6
    }
  }, i ? 'Next' : 'Previous'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22
    }
  }, p.label)) : null));
}
Object.assign(__ds_scope, { Pager });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pager.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SearchBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A button that opens search, not an input. Mono uppercase placeholder with the
   shortcut in a hairline kbd on the right. */
function SearchBox({
  label = 'Search docs',
  shortcut = '⌘K',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      padding: '8px 10px',
      marginBottom: 22,
      background: hover ? 'var(--sunken)' : 'var(--raised)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      cursor: 'pointer',
      ...style
    }
  }, rest), label, /*#__PURE__*/React.createElement("kbd", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      border: '1.2px solid var(--ink-faint)',
      borderRadius: 2,
      padding: '1px 5px',
      color: 'var(--ink-soft)'
    }
  }, shortcut));
}
Object.assign(__ds_scope, { SearchBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SearchBox.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Docs sidebar. Group headings take the em-rule eyebrow with an ink underline;
   the current page is blue-tint with a full ink border. */
function SidebarNav({
  groups = [],
  current,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      ...style
    }
  }, rest), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      display: 'block',
      paddingBottom: 8,
      borderBottom: 'var(--bw) solid var(--ink)',
      marginBottom: 8,
      letterSpacing: 'var(--tracking-eyebrow)'
    }
  }, g.label), g.items.map(it => /*#__PURE__*/React.createElement(SidebarLink, _extends({
    key: it.href
  }, it, {
    active: it.href === current
  }))))));
}
function SidebarLink({
  label,
  href,
  active
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-current": active ? 'page' : undefined,
    style: {
      display: 'block',
      padding: '5px 9px',
      textDecoration: 'none',
      color: 'var(--ink)',
      fontSize: 14.5,
      borderRadius: 2,
      border: '1.5px solid ' + (active ? 'var(--ink)' : 'transparent'),
      background: active ? 'var(--accent-tint)' : hover ? 'var(--sunken)' : 'transparent',
      fontWeight: active ? 600 : 400
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, label);
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Toc.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* On-page contents, right column. The active item gets a 3px blue left edge;
   everything else a 2px faint one. */
function Toc({
  items = [],
  current,
  label = 'On this page',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      display: 'block',
      paddingBottom: 8,
      borderBottom: 'var(--bw) solid var(--ink)',
      marginBottom: 10
    }
  }, label), items.map(it => {
    const active = it.href === current;
    return /*#__PURE__*/React.createElement("a", {
      key: it.href,
      href: it.href,
      style: {
        display: 'block',
        fontSize: 13.5,
        padding: '4px 0 4px 10px',
        textDecoration: 'none',
        color: active ? 'var(--ink)' : 'var(--ink-soft)',
        borderLeft: active ? '3px solid var(--accent)' : '2px solid var(--ink-faint)',
        fontWeight: active ? 600 : 400
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Toc });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Toc.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The wordmark is type, not an image: "Agento" in Instrument Serif at 26px,
   preceded by a 9px ink-bordered blue dot — the app mark's circle, extracted. */
function Wordmark({
  href = '/',
  label = 'Agento',
  size = 26,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size,
      lineHeight: 1,
      textDecoration: 'none',
      color: 'var(--ink)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: Math.round(size * 0.35),
      height: Math.round(size * 0.35),
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent)',
      border: '1.5px solid var(--ink)',
      display: 'inline-block'
    }
  }), label);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Masthead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The site header: paper ground, a 2px ink rule beneath, wordmark left, mono
   uppercase nav right. It scrolls away — nothing on this site is sticky except
   the docs sidebar and TOC. */
function Masthead({
  label = 'Agento',
  links = [],
  current,
  star,
  theme = 'Dark',
  onTheme,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      borderBottom: 'var(--bw-strong) solid var(--ink)',
      background: 'var(--paper)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '16px var(--gutter)',
      maxWidth: 'var(--shell)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    label: label
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 20,
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, _extends({
    key: l.label
  }, l, {
    active: l.label === current
  }))), star ? /*#__PURE__*/React.createElement(__ds_scope.NavButton, {
    href: star.href,
    hoverTint: "accent"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2605"), " Star", star.count ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, star.count) : null) : null, onTheme ? /*#__PURE__*/React.createElement(__ds_scope.NavButton, {
    onClick: onTheme,
    style: {
      minWidth: 66
    }
  }, theme) : null)));
}
function NavLink({
  label,
  href,
  active,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, rest, {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: 'var(--ink)',
      paddingBottom: 2,
      borderBottom: '2px solid ' + (active ? 'var(--ink)' : hover ? 'var(--accent)' : 'transparent')
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }), label);
}
Object.assign(__ds_scope, { Masthead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Masthead.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CardGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The two layout wrappers the landing page repeats: an even card grid (three up,
   two at 1000px, one at 760px) and the two-column split (one at 760px).

   Both name a class from base.css rather than inlining grid-template-columns.
   That is deliberate and load-bearing: an inline style outranks a stylesheet and
   a media query cannot reach it, so an inlined grid stays three columns on a
   phone. Anything the browser owns — breakpoints, hover, reduced motion — has to
   live in CSS. */
function CardGrid({
  cols = 3,
  gap,
  className = '',
  style,
  children,
  ...rest
}) {
  const cls = ['grid' + cols, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: gap ? {
      gap,
      ...style
    } : style
  }, rest), children);
}

/* The 1:1 split ("Two halves, one window."). `media` is the lopsided variant the
   design section uses, where the screenshot is wider than its note. */
function Split({
  media,
  gap,
  className = '',
  style,
  children,
  ...rest
}) {
  const cls = ['split', media && 'split--media', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: gap ? {
      gap,
      ...style
    } : style
  }, rest), children);
}
Object.assign(__ds_scope, { CardGrid, Split });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CardGrid.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Closer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The one full-bleed dark moment on the site: solid ink ground, paper text,
   display-serif heading, and buttons whose borders and shadows flip to paper. */
function Closer({
  title,
  children,
  actions,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      margin: '76px 0 0',
      padding: '46px 34px',
      background: 'var(--ink)',
      color: 'var(--paper)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--offset-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 40,
      margin: '0 0 12px',
      lineHeight: 1.05
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 24px',
      color: 'var(--on-ink-soft)',
      maxWidth: '52ch'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center'
    }
  }, actions));
}
Object.assign(__ds_scope, { Closer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Closer.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Disclosure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The two <details> shapes in the source, behind one component.
   variant="faq"   — hairline sheet, 16.5px Newsreader summary, no shadow.
   variant="panel" — full sheet with shadow, 20px summary, right-hand meta slot
                     and an optional "Recommended for you" flag.

   Native <details>/<summary>, not a div with role="button": the element carries
   its own open state, keyboard behaviour, find-in-page and screen-reader
   announcement. The marker is suppressed in base.css and drawn as a chevron that
   rotates off the [open] attribute — CSS, so it survives with no JavaScript. */
function Disclosure({
  variant = 'faq',
  summary,
  meta,
  recommended,
  open,
  defaultOpen,
  onToggle,
  className = '',
  style,
  children,
  ...rest
}) {
  const isPanel = variant === 'panel';
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (open !== undefined && ref.current) ref.current.open = open;
  }, [open]);
  const cls = ['disclosure', isPanel ? 'disclosure--panel' : 'disclosure--faq', recommended && 'disclosure--rec', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("details", _extends({
    ref: ref,
    className: cls,
    open: open === undefined ? defaultOpen : undefined,
    style: style,
    onToggle: e => {
      if (onToggle) onToggle(e.currentTarget.open);
    }
  }, rest), /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("span", {
    className: "disclosure__chev",
    "aria-hidden": "true"
  }, "\u25B8"), /*#__PURE__*/React.createElement("span", {
    className: "disclosure__title"
  }, summary), recommended ? /*#__PURE__*/React.createElement("span", {
    className: "disclosure__flag"
  }, "Recommended for you") : null, meta ? /*#__PURE__*/React.createElement("span", {
    className: "disclosure__meta"
  }, meta) : null), /*#__PURE__*/React.createElement("div", {
    className: "disclosure__body"
  }, children));
}
Object.assign(__ds_scope, { Disclosure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Disclosure.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The top of a project landing page: a row of status pills, the display-serif
   claim, the lede, and the action row. The claim carries exactly one italic
   accent word — pass it as markup: title={<>See what it <em>really</em> costs
   you.</>}. Italic <em> inside inherits the accent colour from the rule below. */
function Hero({
  pills = [],
  title,
  lede,
  actions,
  note,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: '44px 0 34px',
      ...style
    }
  }, rest), pills.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 18
    }
  }, pills.map(p => typeof p === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    key: p
  }, p) : /*#__PURE__*/React.createElement(__ds_scope.Pill, _extends({
    key: p.label
  }, p), p.label))) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-hero)',
      lineHeight: 1.02,
      letterSpacing: 'var(--tracking-display)',
      margin: '0 0 18px',
      maxWidth: '20ch'
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ink-soft)',
      margin: '0 0 26px',
      maxWidth: '46ch'
    }
  }, lede) : null, actions || note ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 14
    }
  }, actions, note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, note) : null) : null, children);
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Hero.jsx", error: String((e && e.message) || e) }); }

// components/patterns/MetaRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The mono line that closes a section under a hairline rule: an aside on the
   left, links on the right, all in 11px uppercase mono. It is the footnote of
   the page — never put anything essential here. */
function MetaRule({
  note,
  children,
  align = 'between',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 16,
      justifyContent: align === 'between' ? 'space-between' : align,
      borderTop: 'var(--bw-hair) solid var(--ink-faint)',
      padding: '12px 0 0',
      marginTop: 18,
      ...style
    }
  }, rest), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)'
    }
  }, note) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 16
    }
  }, children) : null);
}
Object.assign(__ds_scope, { MetaRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/MetaRule.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The padded, headed sheet — the workhorse of the landing page. `size="card"`
   is the 20px-padded, smaller-headed form used in 3-up grids. */
function Panel({
  variant = 'default',
  size = 'panel',
  eyebrow,
  eyebrowEnd,
  title,
  style,
  children,
  ...rest
}) {
  const card = size === 'card';
  return /*#__PURE__*/React.createElement(__ds_scope.Sheet, _extends({
    variant: variant,
    style: {
      padding: card ? 'var(--pad-card)' : 'var(--pad-panel)',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    end: eyebrowEnd
  }, eyebrow) : null, title ? card ? /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 19.5,
      margin: '12px 0 8px',
      lineHeight: 1.25,
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title) : /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 25,
      margin: '0 0 10px',
      lineHeight: 1.2,
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: card ? 14.5 : 15
    }
  }, children));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Panel.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PostRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Blog index entry. The list form is a three-column grid divided by ink rules;
   the `feature` form is a full sheet with a 40px title. */
function PostRow({
  href,
  date,
  title,
  description,
  tags = [],
  feature,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const common = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (feature) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: {
        display: 'block',
        padding: 30,
        marginBottom: 26,
        textDecoration: 'none',
        color: 'var(--ink)',
        background: 'var(--raised)',
        border: 'var(--bw-strong) solid var(--ink)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--offset)',
        ...style
      }
    }, common, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Pill, null, "Latest"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-nav)',
        textTransform: 'uppercase',
        color: 'var(--ink-soft)'
      }
    }, date)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-sub)',
        fontWeight: 600,
        fontSize: 40,
        lineHeight: 1.18,
        margin: '0 0 10px',
        maxWidth: '20ch',
        letterSpacing: 'var(--tracking-heading)'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 10px',
        color: 'var(--ink-soft)',
        fontSize: 15,
        maxWidth: '62ch'
      }
    }, description), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 7,
        flexWrap: 'wrap'
      }
    }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Pill, {
      key: t,
      plain: true
    }, t))));
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'grid',
      gridTemplateColumns: '130px 1fr auto',
      gap: 24,
      alignItems: 'start',
      padding: '24px 4px',
      borderBottom: 'var(--bw) solid var(--ink)',
      textDecoration: 'none',
      color: 'var(--ink)',
      background: hover ? 'var(--sunken)' : 'transparent',
      ...style
    }
  }, common, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      paddingTop: 7
    }
  }, date), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.18,
      margin: '0 0 7px',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      color: 'var(--ink-soft)',
      fontSize: 15,
      maxWidth: '62ch'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    key: t,
    plain: true
  }, t)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      paddingTop: 6,
      color: hover ? 'var(--accent-deep)' : 'var(--ink-faint)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { PostRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PostRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A section head: display-serif sentence on the left, mono label pinned right.
   Every heading on this site is a complete sentence with a full stop. */
function SectionHead({
  title,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      marginBottom: 26,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 38,
      lineHeight: 1.05,
      letterSpacing: 'var(--tracking-heading)',
      margin: 0
    }
  }, title), label ? /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      marginLeft: 'auto'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StarBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The star ask: a wide sheet with the copy left and one primary button right.
   The count is only rendered above a threshold — below it, a number is weaker
   than no number. */
function StarBand({
  eyebrow = 'One click, and it helps more than you would think',
  title = 'Star the repo',
  count,
  action,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Sheet, _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      alignItems: 'center',
      marginTop: 70,
      padding: '30px 32px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 380px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sub)',
      fontWeight: 600,
      fontSize: 27,
      margin: '0 0 8px',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 15,
      maxWidth: '58ch'
    }
  }, children)), action, count ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      paddingLeft: 9,
      marginLeft: 3,
      borderLeft: '1.5px solid currentColor'
    }
  }, count) : null);
}
Object.assign(__ds_scope, { StarBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StarBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/DocsPage.jsx
try { (() => {
const DSD = window.AgentoDesignSystem_36a6ee;
function DocsPage({
  page,
  setPage
}) {
  const {
    SidebarNav,
    SearchBox,
    Toc,
    Pager,
    Crumbs,
    Note,
    DataTable,
    CodeBlock,
    CodeKey,
    CodeComment,
    Row,
    RowList
  } = DSD;
  const groups = [{
    label: 'Start here',
    items: [{
      label: 'Overview',
      href: '/docs/'
    }, {
      label: 'Installation',
      href: '/docs/installation/'
    }, {
      label: 'User guide',
      href: '/docs/user-guide/'
    }]
  }, {
    label: 'Reference',
    items: [{
      label: 'Architecture',
      href: '/docs/architecture/'
    }, {
      label: 'LLM Gateway',
      href: '/docs/gateway/'
    }, {
      label: 'Integrations',
      href: '/docs/integrations/'
    }]
  }, {
    label: 'Help',
    items: [{
      label: 'Troubleshooting',
      href: '/docs/troubleshooting/'
    }, {
      label: 'Release notes',
      href: '/docs/releases/'
    }]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '232px minmax(0,1fr) 190px',
      gap: 34,
      padding: '34px 0 60px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 20
    }
  }, /*#__PURE__*/React.createElement(SearchBox, {
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(SidebarNav, {
    groups: groups,
    current: page
  })), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--measure)'
    }
  }, /*#__PURE__*/React.createElement(Crumbs, {
    items: ['Docs', 'Installation']
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 52,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      margin: '0 0 10px'
    }
  }, "Installation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--ink-soft)',
      margin: '0 0 26px',
      maxWidth: '56ch'
    }
  }, "Agento runs on macOS, Windows and Linux. It needs the Claude Code CLI on the same machine, signed in."), /*#__PURE__*/React.createElement("h2", {
    id: "requirements",
    className: "doc-h2"
  }, "Requirements"), /*#__PURE__*/React.createElement("p", {
    className: "doc-p"
  }, "Agento spawns the Claude Code CLI and reuses its sign-in, so there is no Anthropic API key to enter. If this prints a version, you are ready:"), /*#__PURE__*/React.createElement(CodeBlock, {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(CodeKey, null, "claude"), " --version"), /*#__PURE__*/React.createElement(DataTable, {
    style: {
      marginBottom: 20
    },
    head: ['Requirement', 'Minimum', 'Notes'],
    rows: [[/*#__PURE__*/React.createElement("code", null, "claude"), '2.0', 'Signed in. Agento never stores the credential itself.'], ['macOS', '13 Ventura', 'Universal builds for arm64 and x64.'], ['Windows', '10 22H2', 'MSI installer, x64 only.'], ['Linux', 'glibc 2.31', 'AppImage, .deb and .rpm.']]
  }), /*#__PURE__*/React.createElement("h2", {
    id: "download",
    className: "doc-h2"
  }, "Download"), /*#__PURE__*/React.createElement(RowList, {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Row, {
    href: "#",
    badge: "dmg",
    mono: "Agento_1.2.0_aarch64.dmg",
    right: "arm64 \xB7 12.4 MB",
    go: "\u2193",
    recommended: true
  }), /*#__PURE__*/React.createElement(Row, {
    href: "#",
    badge: "msi",
    mono: "Agento_1.2.0_x64_en-US.msi",
    right: "x64 \xB7 11.8 MB",
    go: "\u2193"
  }), /*#__PURE__*/React.createElement(Row, {
    href: "#",
    badge: "appimage",
    mono: "agento_1.2.0_amd64.AppImage",
    right: "x64 \xB7 96.2 MB",
    go: "\u2193"
  })), /*#__PURE__*/React.createElement("h2", {
    id: "data",
    className: "doc-h2"
  }, "Where your data lives"), /*#__PURE__*/React.createElement("p", {
    className: "doc-p"
  }, "Everything Agento owns lives in ", /*#__PURE__*/React.createElement("code", null, "~/.agento"), " \u2014 one SQLite file, plus the logs. Your Claude Code transcripts in ", /*#__PURE__*/React.createElement("code", null, "~/.claude"), " are read but never modified."), /*#__PURE__*/React.createElement(Note, {
    label: "Privacy"
  }, "There is no account, no telemetry and no analytics. Deleting ", /*#__PURE__*/React.createElement("code", null, "~/.agento"), " resets the app completely."), /*#__PURE__*/React.createElement(Note, {
    kind: "warn"
  }, "Integration credentials are stored in plain text in the local database. Their protection is your user account and your disk permissions, so treat ", /*#__PURE__*/React.createElement("code", null, "~/.agento"), " as sensitive."), /*#__PURE__*/React.createElement("h2", {
    id: "quarantine",
    className: "doc-h2"
  }, "If macOS refuses to open it"), /*#__PURE__*/React.createElement("p", {
    className: "doc-p"
  }, "These builds are signed with our own key rather than an EV certificate. Clear the quarantine flag:"), /*#__PURE__*/React.createElement(CodeBlock, {
    style: {
      marginBottom: 18
    }
  }, "xattr -dr com.apple.quarantine /Applications/Agento.app", '\n', /*#__PURE__*/React.createElement(CodeComment, null, "# then open it from Applications as usual")), /*#__PURE__*/React.createElement(Pager, {
    prev: {
      label: 'Overview',
      href: '/docs/'
    },
    next: {
      label: 'User guide',
      href: '/docs/user-guide/'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 20
    }
  }, /*#__PURE__*/React.createElement(Toc, {
    current: "#requirements",
    items: [{
      label: 'Requirements',
      href: '#requirements'
    }, {
      label: 'Download',
      href: '#download'
    }, {
      label: 'Where your data lives',
      href: '#data'
    }, {
      label: 'If macOS refuses',
      href: '#quarantine'
    }]
  }))));
}
Object.assign(window, {
  DocsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/DocsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
const DS2 = window.AgentoDesignSystem_36a6ee;
function BlogIndex({
  go
}) {
  const {
    PostRow
  } = DS2;
  return /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      padding: '46px 0 60px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 62,
      lineHeight: 1,
      margin: '0 0 10px',
      letterSpacing: '-0.02em'
    }
  }, "Notes from the build."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--ink-soft)',
      margin: '0 0 38px',
      maxWidth: '50ch'
    }
  }, "Release notes, ported subsystems, and the decisions that were harder than they looked."), /*#__PURE__*/React.createElement(PostRow, {
    feature: true,
    date: "25 August 2026",
    title: "Finding the Claude CLI where it actually is",
    description: "A user ran claude --version, got 2.1.231, and Agento told them Claude Code was not installed. They were both right.",
    tags: ['Engineering', 'Release 1.2.0'],
    onClick: e => {
      e.preventDefault();
      go('Post');
    },
    href: "#"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: 'var(--bw-strong) solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(PostRow, {
    href: "#",
    date: "12 Aug 2026",
    title: "Pricing a message at the rate in effect",
    description: "Session cost is computed per message, at the rate that applied the moment it ran \u2014 not at today's price list.",
    tags: ['Engineering']
  }), /*#__PURE__*/React.createElement(PostRow, {
    href: "#",
    date: "29 Jul 2026",
    title: "One SQLite file, and what it costs to keep it honest",
    description: "Migrations, WAL mode, and why the whole database is a single file you can delete.",
    tags: ['Architecture', 'Release 1.1.0']
  }), /*#__PURE__*/React.createElement(PostRow, {
    href: "#",
    date: "04 Jul 2026",
    title: "Six integrations, in-process",
    description: "GitHub, Slack, Jira, Confluence, Telegram and Google run as MCP servers inside the app rather than as subprocesses.",
    tags: ['Release 1.1.0']
  })));
}
function BlogPost() {
  const {
    Pill,
    PullQuote,
    Byline,
    CodeBlock
  } = DS2;
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--measure)',
      margin: '0 auto',
      padding: '46px 0 70px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    plain: true
  }, "Engineering"), /*#__PURE__*/React.createElement(Pill, {
    plain: true
  }, "Release 1.2.0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "25 Aug 2026")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 58,
      lineHeight: 1,
      letterSpacing: '-0.025em',
      margin: '0 0 16px',
      textWrap: 'balance'
    }
  }, "Finding the Claude CLI where it actually is"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      margin: '0 0 30px',
      paddingBottom: 26,
      borderBottom: 'var(--bw-strong) solid var(--ink)'
    }
  }, "A user ran ", /*#__PURE__*/React.createElement("code", null, "claude --version"), ", got 2.1.231, and Agento told them Claude Code was not installed. They were both right."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.68,
      margin: '0 0 17px'
    }
  }, "Agento does not ship the Claude Code CLI. It spawns it \u2014 every agent run is a subprocess, and the CLI's own sign-in is the credential. So the first thing the app does on launch is work out where ", /*#__PURE__*/React.createElement("code", null, "claude"), " lives, and the first thing it did wrong was assume the answer was on ", /*#__PURE__*/React.createElement("code", null, "PATH"), "."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 32,
      margin: '38px 0 12px',
      lineHeight: 1.12
    }
  }, "A GUI app has a different PATH than your terminal"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.68,
      margin: '0 0 17px'
    }
  }, "When you launch an application from Finder, the Dock or Spotlight, it inherits launchd's environment rather than your shell's. That is ", /*#__PURE__*/React.createElement("code", null, "/usr/bin:/bin:/usr/sbin:/sbin"), " and nothing else. Every line your ", /*#__PURE__*/React.createElement("code", null, ".zshrc"), " exported is invisible."), /*#__PURE__*/React.createElement(PullQuote, null, "The launch that matters \u2014 from the Dock, by someone who has not opened a terminal that day \u2014 is exactly the launch where scanning PATH finds nothing."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 32,
      margin: '38px 0 12px',
      lineHeight: 1.12
    }
  }, "Five rules, in order"), /*#__PURE__*/React.createElement(CodeBlock, {
    style: {
      marginBottom: 20
    },
    code: '1. AGENTO_CLAUDE_EXECUTABLE        explicit override, trusted\n2. claude_executable_path setting  stored, trusted\n3. $SHELL -lic \'command -v claude\' login shell — finds aliases\n4. the process PATH                works when launched from a terminal\n5. known install locations         last resort, verified'
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.68,
      margin: '0 0 17px'
    }
  }, "Rules three through five verify what they find: the path must be an executable file", /*#__PURE__*/React.createElement("b", null, " and"), " answer ", /*#__PURE__*/React.createElement("code", null, "--version"), " with Claude Code's banner, so an unrelated", /*#__PURE__*/React.createElement("code", null, " claude"), " on the ", /*#__PURE__*/React.createElement("code", null, "PATH"), " is skipped rather than spawned on every turn."), /*#__PURE__*/React.createElement(Byline, {
    initials: "SA",
    name: "Shaharia Azam",
    role: "Shaharia Lab"
  })));
}
function NotFound({
  go
}) {
  const {
    Row,
    RowList
  } = DS2;
  return /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      padding: '80px 24px 90px',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Error 404"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(40px, 6vw, 62px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      margin: '14px 0 12px'
    }
  }, "That page is not here."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-soft)',
      fontSize: 18,
      margin: '0 0 28px'
    }
  }, "The address you followed does not match anything on this site."), /*#__PURE__*/React.createElement(RowList, null, /*#__PURE__*/React.createElement(Row, {
    href: "#",
    badge: "docs",
    title: "Documentation",
    right: "Installation, the user guide, troubleshooting",
    onClick: e => {
      e.preventDefault();
      go('Docs');
    }
  }), /*#__PURE__*/React.createElement(Row, {
    href: "#",
    badge: "blog",
    title: "Notes from the build",
    right: "Release notes and engineering write-ups",
    onClick: e => {
      e.preventDefault();
      go('Blog');
    }
  }), /*#__PURE__*/React.createElement(Row, {
    href: "#",
    badge: "dl",
    title: "Releases",
    right: "Every build, for every platform",
    go: "\u2197"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 26,
      fontSize: 14.5,
      color: 'var(--ink-soft)'
    }
  }, "If a link on this site sent you here, that is a bug \u2014 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--accent-deep)',
      borderBottom: '1.5px solid var(--accent)'
    }
  }, "tell us"), "."));
}
Object.assign(window, {
  BlogIndex,
  BlogPost,
  NotFound
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Landing.jsx
try { (() => {
const DS = window.AgentoDesignSystem_36a6ee;
const REPO = 'https://github.com/shaharia-lab/agento';
const VERSION = '1.2.0';
function Landing({
  go
}) {
  const {
    Pill,
    Button,
    StatGrid,
    Shot,
    SectionHead,
    Panel,
    Disclosure,
    StarBand,
    Closer,
    Eyebrow,
    CodeBlock,
    CodeKey,
    Row,
    RowList,
    Sheet
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Pill, null, "v", VERSION), /*#__PURE__*/React.createElement(Pill, {
    plain: true
  }, "macOS \xB7 Windows \xB7 Linux"), /*#__PURE__*/React.createElement(Pill, {
    plain: true
  }, "MIT licensed")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(44px, 8vw, 92px)',
      lineHeight: 0.97,
      letterSpacing: '-0.02em',
      margin: '0 0 20px',
      textWrap: 'balance',
      maxWidth: '19ch',
      fontWeight: 400
    }
  }, "See what Claude Code ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-deep)'
    }
  }, "really"), " costs you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: '54ch',
      color: 'var(--ink-soft)',
      margin: '0 0 30px'
    }
  }, "Agento reads the session files Claude Code already writes to your disk and turns them into cost analytics, productivity insights and a searchable, replayable history of every run. Then it lets you build agents, schedule them, and connect them to your tools."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#install"
  }, "Download ", VERSION, " \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    onClick: () => go('Docs')
  }, "Read the docs"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-faint)',
      letterSpacing: '0.04em'
    }
  }, "No API key. No account. No telemetry.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(StatGrid, {
    items: [{
      n: '0',
      k: 'Bytes sent anywhere'
    }, {
      n: '1',
      k: 'SQLite file, on your disk'
    }, {
      n: '6',
      k: 'Integrations built in'
    }, {
      n: '~60s',
      k: 'Install to first session'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    name: "Agento \u2014 Insights",
    alt: "Insights: cost, autonomy, cache-hit and tool-error cards",
    caption: "Every tool call attributed to a skill, MCP server or sub-agent."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Two halves, one window.",
    label: "What you get"
  }), /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Looks backward",
    title: "Your history, made legible"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "Agento never asks you to change how you work. It reads what Claude Code already wrote."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "Cost per session"), ", priced at the rate in effect when each message ran."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "Full-text search"), " across every transcript, ranked, with snippets."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "Session journey"), " \u2014 turn by turn, sub-agents nested under the task that spawned them."))), /*#__PURE__*/React.createElement(Panel, {
    variant: "dashed",
    eyebrow: "Looks forward",
    title: "Agents that do the work"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "Build one, give it tools, hand it a schedule, and read the job history in the morning."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "Agent builder"), " with system prompts, tool allowlists and permission modes."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "Scheduled tasks"), " \u2014 cron, intervals, or a one-off at a fixed instant."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink)'
    }
  }, "GitHub, Slack, Jira, Confluence, Telegram, Google"), " as in-process MCP servers."))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Every section, one keystroke away.",
    label: "\u2318K"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid3"
  }, [['01 · Chats', 'Talk to your agents', 'Streaming turns, tool calls rendered inline, and a permission prompt you can actually answer.'], ['02 · Agents', 'Build and version them', 'Prompt templates with variables, tool allowlists, and a Claude settings profile per agent.'], ['03 · Tasks', 'Put them on a clock', 'Cron expressions validated at save time, so a schedule that can never fire is refused.'], ['04 · Sessions', 'Replay any run', 'Ranked search over 1,000+ transcripts, then continue any one of them as a live chat.'], ['05 · Analytics', 'Where the money went', 'Cost by model and project, cache-hit rate, and an activity heatmap in your own timezone.'], ['06 · Gateway', 'Route your other tools', 'One OpenAI- and Anthropic-compatible endpoint on loopback, with usage and cost per request.']].map(([k, t, b]) => /*#__PURE__*/React.createElement(Panel, {
    key: k,
    size: "card",
    eyebrow: k,
    title: t
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: 1.55
    }
  }, b))))), /*#__PURE__*/React.createElement(Install, null), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Built for the desk, not the tab.",
    label: "Design"
  }), /*#__PURE__*/React.createElement("div", {
    className: "split split--media"
  }, /*#__PURE__*/React.createElement(Shot, {
    name: "Agento \u2014 Agent builder",
    alt: "Agent builder: prompt, model, tools, permission mode"
  }), /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Design",
    eyebrowEnd: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        borderBottom: '1.5px solid var(--accent)'
      }
    }, "Architecture \u2197"),
    title: "A native app that behaves like one"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "Three resizable panes per section, hairline borders, focus-aware selection, a status bar, and a command palette. No browser affordances, because it is not a browser."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "One process, one SQLite file, and the Claude Code CLI spawned per run. The whole backend is Rust; the window is Tauri."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center'
    }
  }, ['Tauri 2', 'Rust', 'React', 'SQLite'].map(t => /*#__PURE__*/React.createElement(Pill, {
    key: t,
    plain: true
  }, t)))))), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(StarBand, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      href: REPO
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\u2605"), " Star on GitHub")
  }, "Stars are how the next Claude Code user finds Agento. It is the whole of our distribution \u2014 there is no ad budget and nothing tracks you here."), /*#__PURE__*/React.createElement(Closer, {
    title: "Your sessions are already on disk.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onInvert: true,
      href: REPO + '/releases'
    }, "Download ", VERSION, " \u2192"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onInvert: true,
      href: REPO
    }, "Star on GitHub"))
  }, "Agento just reads them. Install it, and the last six months of your Claude Code usage become a dashboard you can search."));
}
function Install() {
  const {
    SectionHead,
    Panel,
    Disclosure,
    Row,
    RowList,
    CodeBlock,
    CodeKey
  } = DS;
  const [open, setOpen] = React.useState('macos');
  const OSES = [{
    id: 'macos',
    label: 'macOS',
    files: [{
      badge: 'dmg',
      file: 'Agento_' + VERSION + '_aarch64.dmg',
      right: 'arm64 · 12.4 MB',
      rec: true
    }, {
      badge: 'dmg',
      file: 'Agento_' + VERSION + '_x64.dmg',
      right: 'x64 · 13.1 MB'
    }],
    steps: ['Open the .dmg and drag Agento to Applications.', 'If macOS says the app cannot be verified, right-click it and choose Open.'],
    code: 'xattr -dr com.apple.quarantine /Applications/Agento.app',
    hint: 'Apple menu → About This Mac tells you which chip you have.'
  }, {
    id: 'windows',
    label: 'Windows',
    files: [{
      badge: 'msi',
      file: 'Agento_' + VERSION + '_x64_en-US.msi',
      right: 'x64 · 11.8 MB'
    }],
    steps: ['Run the installer.', 'SmartScreen may warn that the publisher is unknown — choose More info, then Run anyway.'],
    hint: 'Updates arrive in the app after the first install.'
  }, {
    id: 'linux',
    label: 'Linux',
    files: [{
      badge: 'appimage',
      file: 'agento_' + VERSION + '_amd64.AppImage',
      right: 'x64 · 96.2 MB'
    }, {
      badge: 'deb',
      file: 'agento_' + VERSION + '_amd64.deb',
      right: 'x64 · 10.4 MB'
    }, {
      badge: 'rpm',
      file: 'agento-' + VERSION + '-1.x86_64.rpm',
      right: 'x64 · 10.6 MB'
    }],
    steps: ['AppImage — works on any distribution, and updates in-app:'],
    code: 'chmod +x agento_' + VERSION + '_amd64.AppImage\n./agento_' + VERSION + '_amd64.AppImage',
    hint: 'The AppImage updates itself; .deb and .rpm are notify-only, because dpkg and rpm own their files.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "install"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Installed in about a minute.",
    label: "Install"
  }), /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Before anything",
    eyebrowEnd: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        borderBottom: '1.5px solid var(--accent)'
      }
    }, "Requirements \u2197"),
    title: "Have the Claude Code CLI, signed in",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "Agento runs every agent through the CLI you already have and reuses its sign-in. There is no Anthropic API key to enter. If this prints a version, you are ready:"), /*#__PURE__*/React.createElement(CodeBlock, null, /*#__PURE__*/React.createElement(CodeKey, null, "claude"), " --version")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, OSES.map(os => /*#__PURE__*/React.createElement(Disclosure, {
    key: os.id,
    variant: "panel",
    summary: os.label,
    meta: os.files.length + (os.files.length === 1 ? ' file' : ' files'),
    recommended: os.id === 'macos',
    open: open === os.id,
    onToggle: o => setOpen(o ? os.id : null)
  }, /*#__PURE__*/React.createElement(RowList, {
    style: {
      marginBottom: 16
    }
  }, os.files.map(f => /*#__PURE__*/React.createElement(Row, {
    key: f.file,
    href: "#",
    badge: f.badge,
    mono: f.file,
    right: f.right,
    go: "\u2193",
    recommended: f.rec
  }))), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '0 0 14px',
      paddingLeft: 18,
      fontSize: 14.5,
      color: 'var(--ink-soft)'
    }
  }, os.steps.map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      marginBottom: 12
    }
  }, s))), os.code ? /*#__PURE__*/React.createElement(CodeBlock, {
    code: os.code,
    style: {
      fontSize: 11.5,
      marginBottom: 16
    }
  }) : null, /*#__PURE__*/React.createElement("p", {
    className: "label",
    style: {
      textTransform: 'none',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
      margin: 0
    }
  }, os.hint)))), /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      alignItems: 'center',
      margin: '22px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Not your platform?"), /*#__PURE__*/React.createElement("a", {
    href: REPO + '/releases',
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderBottom: '1.5px solid var(--accent)'
    }
  }, "Every file in v", VERSION, " \u2197")));
}
function Faq() {
  const {
    Panel,
    Disclosure
  } = DS;
  const [open, setOpen] = React.useState(0);
  const FAQ = [['Does Agento send my transcripts anywhere?', 'No. Everything is stored locally in ~/.agento, and your Claude Code transcripts in ~/.claude are read but never modified. There is no account, no telemetry and no analytics. The only outbound calls are the ones you asked for: agent runs, the integrations you connected, the update check — which you can switch off — and, if you turn it on, the providers the LLM Gateway forwards to.', 'Privacy'], ['Do I need an Anthropic API key?', 'No. Agento runs every agent by launching the Claude Code CLI on your machine and reuses its sign-in. If claude works in your terminal, Agento works. The app tells you on launch if it cannot find the CLI, and where it looked.', 'Requirements'], ['Will it change anything in ~/.claude?', 'Your session transcripts are read only. Agento does write Claude Code\u2019s own settings.json and the settings profiles beside it — but only when you edit them from the Settings section yourself. Everything Agento owns lives in ~/.agento, and deleting that directory resets it completely.', 'Where your data lives'], ['Can I point my other tools at it?', 'Yes. The LLM Gateway is an OpenAI- and Anthropic-compatible endpoint on loopback that routes to whichever providers you configure, and records usage and cost per request. It is off by default and costs one database read at startup when it is.', 'LLM Gateway'], ['How are my integration credentials stored?', 'In plain text, in the local database. Their protection is your user account and your disk permissions, so treat ~/.agento as sensitive. The API scrubs secrets from every response and the app never displays one back to you, but the bytes at rest are not encrypted.', 'Privacy']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(Panel, {
    eyebrow: "Frequently asked",
    eyebrowEnd: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        borderBottom: '1.5px solid var(--accent)'
      }
    }, "All documentation \u2197")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, FAQ.map(([q, a, more], i) => /*#__PURE__*/React.createElement(Disclosure, {
    key: q,
    summary: q,
    open: open === i,
    onToggle: o => setOpen(o ? i : null)
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 15,
      color: 'var(--ink-soft)',
      maxWidth: '72ch'
    }
  }, a), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderBottom: '1.5px solid var(--accent)',
      color: 'var(--accent-deep)'
    }
  }, more, " \u2197"))))));
}
Object.assign(window, {
  Landing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StaticPage.jsx
try { (() => {
const DS3 = window.AgentoDesignSystem_36a6ee;

/* The static-page shell: a single prose column with no sidebar and no TOC —
   Security, Privacy, Licence, About. Built on the same measure and heading
   rules as the docs article, without the docs grid around it. The source site
   has no page of this kind yet; the shell follows `.article` in site.css. */
function StaticPage({
  title,
  lede,
  children
}) {
  const {
    Crumbs,
    Note
  } = DS3;
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--measure)',
      padding: '46px 0 70px'
    }
  }, /*#__PURE__*/React.createElement(Crumbs, {
    items: ['Agento', title]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 52,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      margin: '0 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--ink-soft)',
      margin: '0 0 26px',
      maxWidth: '56ch'
    }
  }, lede), children));
}
function SecurityPage() {
  const {
    Note,
    DataTable
  } = DS3;
  return /*#__PURE__*/React.createElement(StaticPage, {
    title: "Security",
    lede: "How to report something, what we will do about it, and what the app does with your credentials."
  }, /*#__PURE__*/React.createElement("h2", {
    className: "doc-h2"
  }, "Reporting a vulnerability"), /*#__PURE__*/React.createElement("p", {
    className: "doc-p"
  }, "Open a private security advisory on the repository rather than a public issue. We reply within three working days, and we will tell you when a fix ships even if the answer is that we are not going to fix it."), /*#__PURE__*/React.createElement("h2", {
    className: "doc-h2"
  }, "What is stored, and where"), /*#__PURE__*/React.createElement(DataTable, {
    style: {
      marginBottom: 20
    },
    head: ['Data', 'Location', 'At rest'],
    rows: [['Sessions and analytics', /*#__PURE__*/React.createElement("code", null, "~/.agento"), 'One SQLite file, unencrypted'], ['Claude Code transcripts', /*#__PURE__*/React.createElement("code", null, "~/.claude"), 'Read only, never modified'], ['Integration credentials', /*#__PURE__*/React.createElement("code", null, "~/.agento"), 'Plain text']]
  }), /*#__PURE__*/React.createElement(Note, {
    kind: "warn"
  }, "Integration credentials are stored in plain text in the local database. Their protection is your user account and your disk permissions, so treat ", /*#__PURE__*/React.createElement("code", null, "~/.agento"), " as sensitive."), /*#__PURE__*/React.createElement(Note, {
    label: "Scope"
  }, "There is no server, no account and no telemetry, so there is no hosted surface to report against \u2014 only the desktop app and this site."));
}
Object.assign(window, {
  StaticPage,
  SecurityPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StaticPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Byline = __ds_scope.Byline;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KeyList = __ds_scope.KeyList;

__ds_ns.Note = __ds_scope.Note;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Row = __ds_scope.Row;

__ds_ns.RowList = __ds_scope.RowList;

__ds_ns.Shot = __ds_scope.Shot;

__ds_ns.StatGrid = __ds_scope.StatGrid;

__ds_ns.Steps = __ds_scope.Steps;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.CodeKey = __ds_scope.CodeKey;

__ds_ns.CodeStr = __ds_scope.CodeStr;

__ds_ns.CodeComment = __ds_scope.CodeComment;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.NavButton = __ds_scope.NavButton;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Crumbs = __ds_scope.Crumbs;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Masthead = __ds_scope.Masthead;

__ds_ns.Pager = __ds_scope.Pager;

__ds_ns.SearchBox = __ds_scope.SearchBox;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Toc = __ds_scope.Toc;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.CardGrid = __ds_scope.CardGrid;

__ds_ns.Split = __ds_scope.Split;

__ds_ns.Closer = __ds_scope.Closer;

__ds_ns.Disclosure = __ds_scope.Disclosure;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.MetaRule = __ds_scope.MetaRule;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.PostRow = __ds_scope.PostRow;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.StarBand = __ds_scope.StarBand;

})();
