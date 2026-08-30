# design-sync notes — agento-code

- **This is a public repository** (`shaharia-lab/design-system`, directory `agento-code`).
  Anything synced into the repo is published. Keep credentials, private URLs and
  internal-only ledgers out of the synced surface.
- **Shape is `prebuilt`, not a converter target.** This directory *is* the Claude
  Design upload layout — `_ds_manifest.json` carries `"source": "spa"`, and the
  bundle namespace `AgentoDesignSystem_36a6ee` encodes the project id prefix. There
  is no build step, no Storybook, and no preview authoring: the repo is an export of
  project `36a6ee5b-d98f-43da-acd3-514a823b1859`. Do not run the converter over it.
- **The project can be ahead of the repo.** The project side has its own
  `github.md` ledger recording repo→project syncs. Always diff before pushing:
  a blind push can delete project-side work.
- `bin/design-sync.mjs` is stored project-side as `bin/design-sync.mjs.txt`; the
  `.txt` suffix stops the in-browser bundler parsing a Node script. Rename on copy
  in either direction.
- `_ds_manifest.json` is compiled by the app's self-check; treat the project copy as
  authoritative rather than overwriting it from the repo.

## Sync 2026-08-29 — direction: repo → project

- Ran on the user's explicit instruction after being shown that the project was
  AHEAD of the repo. Discarded, deliberately: the project-side `design-sync`
  vendoring CLI, the `bin` entry in `package.json`, and the `design-sync` section
  of `INSTALL.md`. A copy of the deleted CLI was saved outside the repo before
  deletion (session scratchpad, `project-side-backup/bin/design-sync.mjs`).
- `github.md` was PRESERVED project-side (not deleted, not committed to the repo)
  per the user's decision that the ledger stays out of the public package surface.
  It is stale as of this sync: its "Last sync" block still describes the
  2026-08-29T21:35Z repo→project run and the design-sync work that no longer exists.
- **No `_ds_needs_recompile` sentinel was written, on purpose.** The app stamps
  `_ds_manifest.json`'s `source` field from the sentinel's `by` value; writing one
  would have flipped this SPA-authored project from `"source": "spa"` to
  `"design-sync-cli"`. No component, card or token changed in this sync, so no
  manifest recompile was needed.
- **No `_ds_sync.json` anchor was written**, and none should be. The hash recipe in
  the skill's `lib/sync-hashes.mjs` describes converter output; this project is not
  converter output. A hand-rolled anchor would make a future re-sync trust a diff it
  cannot actually compute. Absence is the correct, documented state: the next sync
  re-diffs from scratch, which is cheap here because the repo IS the layout.

## Sync 2026-08-30 — direction: project → repo (PULL)

- First pull in this direction. The project was AHEAD: six new components plus the
  regenerated artifacts that follow from them. Nothing was pushed.
- **Pulled:** `components/{core/ArrowLink,core/ThemeToggle,content/KeyList,
  patterns/CardGrid,patterns/Hero,patterns/MetaRule}.{jsx,d.ts,prompt.md}` (18 new
  files); the `core`/`content`/`patterns` card previews (new demos + taller
  viewports); `readme.md`'s component index; `_adherence.oxlintrc.json` (10 new
  prop/enum rules + 6 `x-omelette` entries); `_ds_manifest.json`; `_ds_bundle.js`.
- **Deliberately NOT pulled:** `package.json` — the REPO is ahead of the project
  here (repo 0.1.1 vs project 0.1.0, and the repo dropped `publishConfig.provenance`
  when publishing moved to npm trusted publishing). Pulling it would have reverted
  both. Also skipped, as before: `github.md` (ledger stays out of the public package)
  and `uploads/` (SPA paste artifacts).
- `github.md` project-side is still stale — it describes the 2026-08-29 repo→project
  run, not this one.
- **`_ds_bundle.js` was regenerated locally, not transcribed.** The bundle format is
  reproducible: Babel `@babel/preset-react` (classic runtime), imports stripped,
  imported bindings rewritten to `__ds_scope.X`, one `try/(()=>{})()` section per
  source in dependency order (alphabetical, each file deferred until its imports are
  emitted), no `Object.assign` for files with no named exports, and a header whose
  `sourceHashes` are `sha256(file bytes)[:12]`. The generator was proven by
  regenerating the committed bundle from HEAD's sources byte-for-byte, then the
  regenerated new bundle was confirmed byte-identical (sha256) to the project's.
  Generator kept at `.design-sync/gen-bundle.cjs` — it makes the next pull cheap.
- **Verification scope.** Every text file in the project was diffed against the repo
  except 18 of the 22 `guidelines/*.html` (4 sampled, all identical). Guidelines are
  pure static token specimens — they load no bundle and use no React — and every
  CSS/token file is byte-identical, so they cannot have moved with this change.
  Binary files (`assets/og.png`, the three `.thumbnail` captures) were not compared.
- Still no `_ds_sync.json` and no `_ds_needs_recompile`, for the reasons above.

### Pre-existing inconsistency, NOT introduced here (worth fixing project-side)

- `tokens/borders.css` defines `--offset-accent: 8px 8px 0 var(--blue)`, but `--blue`
  is not defined anywhere in the system (the palette moved off the upstream blue).
  The shadow therefore resolves to nothing wherever it is used — the "recommended"
  install card. `guidelines/brand-shadows.html` documents it as
  `8px 8px 0 var(--accent)`, which is what it should almost certainly be. Both sides
  agree today, so this pull did not change it.
