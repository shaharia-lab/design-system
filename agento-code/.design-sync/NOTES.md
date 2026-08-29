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
