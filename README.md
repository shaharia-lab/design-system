# Design Systems

Open-source design systems published by **[Shaharia Lab](https://shaharialab.com)**.

Each top-level directory is one self-contained design system: tokens, CSS
foundations, React primitives, guideline pages, UI kits and a `SKILL.md` so an
AI coding agent can design with the brand correctly.

## Systems

| System | npm | Brand |
| --- | --- | --- |
| [`agento-code/`](agento-code/) | `@shaharia-lab/agento-code` | [Agento](https://myagento.app) — neo-brutalist editorial: bone paper, hard ink borders, solid offset shadows |

More systems will be added as separate directories alongside it.

## What is in a system

Every system follows the same layout, so anything you learn about one carries
over to the next:

```
<system>/
  readme.md        # the design system itself — voice, foundations, rules
  SKILL.md         # agent entry point (Claude Code / Claude skill)
  INSTALL.md       # how to consume it in a project
  package.json     # npm package metadata
  tokens/          # CSS custom properties (colors, type, space, borders, motion)
  base.css         # resets and element defaults
  styles.css       # the full stylesheet (tokens + base + components)
  components/      # React primitives (.jsx + .d.ts + .prompt.md per component)
  ui_kits/         # assembled reference screens (website, docs)
  templates/       # editable page templates
  guidelines/      # rendered guideline pages (open in a browser)
  explorations/    # design explorations kept for provenance
  assets/          # brand mark, share card
```

## Using a system

**In a project** — see the system's own `INSTALL.md`. The short version:

```sh
npm install @shaharia-lab/agento-code
```

```js
import '@shaharia-lab/agento-code/styles.css';
```

**With an AI agent** — point it at the system directory. `SKILL.md` is a Claude
skill: drop the directory into `.claude/skills/` (or a plugin) and invoke it,
and the agent reads `readme.md` plus the component prompts to design on-brand.

**By hand** — open the files in `guidelines/` in a browser to see the tokens
rendered, and `ui_kits/*/index.html` for full assembled screens.

## Publishing

Every system is its own npm package, published independently from its own
directory. The repository root is an npm workspace so all of them can be
inspected at once:

```sh
npm install            # links every system as a workspace
npm run pack:dry       # shows exactly what each package would ship
```

A release is always an explicit tag — `<directory>@<version>`:

```sh
# 1. bump the version in the system's package.json
npm version 0.2.0 --workspace @shaharia-lab/agento-code --no-git-tag-version

# 2. commit it, then tag and push
git commit -am "agento-code 0.2.0"
git tag agento-code@0.2.0
git push origin main --tags
```

[`.github/workflows/publish.yml`](.github/workflows/publish.yml) picks the tag
up, checks that the tag version matches that directory's `package.json`, prints
the tarball contents, and publishes with
[npm provenance](https://docs.npmjs.com/generating-provenance-statements) — so
each release carries a signed attestation linking it back to the exact commit
and workflow run that built it. Nothing publishes on a push to `main`.

Adding a system: create the directory with its own `package.json` (name it
`@shaharia-lab/<system>`, set `repository.directory`, and set
`publishConfig.access` to `public`), add it to `workspaces` in the root
`package.json`, and add a row to the table above. The workflow needs no change.

## Contributing

Issues and pull requests are welcome. When changing a system, keep `readme.md`
the source of truth: it states the rule *and* the reason, and the tokens,
components and guideline pages must agree with it.

## License

[MIT](LICENSE) © Shaharia Lab. Brand marks and product names remain the property
of their respective projects.
