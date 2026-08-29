# Design Systems

Open-source design systems published by **[Shaharia Lab](https://shaharialab.com)**.

Each top-level directory is one self-contained design system: tokens, CSS
foundations, React primitives, guideline pages, UI kits and a `SKILL.md` so an
AI coding agent can design with the brand correctly.

## Systems

| System | Brand | Status |
| --- | --- | --- |
| [`agento-code/`](agento-code/) | [Agento](https://myagento.app) — neo-brutalist editorial: bone paper, hard ink borders, solid offset shadows | v0.1.0 |

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
npm install agento-code   # once published
```

```js
import 'agento-code/styles.css';
```

**With an AI agent** — point it at the system directory. `SKILL.md` is a Claude
skill: drop the directory into `.claude/skills/` (or a plugin) and invoke it,
and the agent reads `readme.md` plus the component prompts to design on-brand.

**By hand** — open the files in `guidelines/` in a browser to see the tokens
rendered, and `ui_kits/*/index.html` for full assembled screens.

## Contributing

Issues and pull requests are welcome. When changing a system, keep `readme.md`
the source of truth: it states the rule *and* the reason, and the tokens,
components and guideline pages must agree with it.

## License

[MIT](LICENSE) © Shaharia Lab. Brand marks and product names remain the property
of their respective projects.
