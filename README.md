# PrintForge Atlas

[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey)](https://creativecommons.org/publicdomain/zero/1.0/)

PrintForge Atlas is a production-ready static web application that organizes the 3D printing ecosystem into a searchable, filterable, multilingual knowledge atlas.

## Overview

The project is built from the curated upstream list [`ad-si/awesome-3d-printing`](https://github.com/ad-si/awesome-3d-printing) and adds a complete user interface layer:

- structured browsing by section
- language-aware descriptions
- practical filtering and comparison workflows
- local-first personalization (favorites, history, presets)
- static deployment to GitHub Pages with CI checks

No backend, database, or framework runtime is required.

## Core Features

- UI languages: `EN`, `RU`, `DE`
- Rich filtering: section, tags, level, printer type
- Sorting modes: relevance, A-Z, popularity, updated
- Full-text search with highlighting
- Favorites, history, compare mode (up to 4 tools)
- Stack builder (`Printer + CAD + Slicer + Firmware`)
- Advanced print calculators:
  - cost breakdown (material, energy, amortization, margin)
  - time estimation with presets and overhead
  - multi-currency output (`USD`, `EUR`, `RUB`)
- Import/export:
  - favorites JSON
  - visible data JSON
  - Markdown
  - PDF/print view
- Sync from upstream GitHub README with delta stats (added/removed)
- Link health badges (`OK`, `FAIL`, `UNKNOWN`) for checked resources
- Light/Dark themes with cinematic eye-style transition animation
- PWA baseline: `manifest.webmanifest` + `service-worker.js`

## Architecture

- `index.html` - document structure and UI containers
- `styles.css` - themes, layout, animation system
- `app.js` - state, rendering, sync/parser logic, calculators
- `config.js` - externalized i18n labels
- `data/resources.json` - canonical generated dataset
- `data/resources-inline.js` - inline fallback dataset
- `scripts/validate_resources.js` - dataset consistency checks
- `scripts/build_release.py` - `dist/` release bundle generator
- `tests/smoke.test.js` - parser and content smoke checks

## Quality Gates

Run before release:

```powershell
node scripts/validate_resources.js
node tests/smoke.test.js
python scripts/build_release.py
```

Expected output:

- `resources validation passed`
- `smoke tests passed`
- `dist build complete`

## Deployment

This repository deploys via GitHub Actions workflow:

- file: `.github/workflows/deploy-pages.yml`
- artifact source: `./dist`
- target: GitHub Pages

Required repository settings:

1. `Settings -> Pages -> Source: GitHub Actions`
2. `Settings -> Actions -> Workflow permissions: Read and write`

## Data Source and Attribution

Primary upstream data source:

- Project: [`ad-si/awesome-3d-printing`](https://github.com/ad-si/awesome-3d-printing)
- Author: `ad-si`
- License: `CC0 1.0 Universal`
- License URL: <https://creativecommons.org/publicdomain/zero/1.0/>

Reference ecosystem standard:

- Sindre Sorhus Awesome List: <https://github.com/sindresorhus/awesome>

PrintForge Atlas is an independent presentation layer and is not an official mirror of the upstream project.

## Compliance

- Upstream links are preserved and referenced as external resources.
- Attribution is documented in this README and in [`LICENSE`](./LICENSE).
- No ownership claims are made over upstream entries.

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md) for release history.

## License

This project is licensed under **CC0 1.0 Universal**.

See [`LICENSE`](./LICENSE).
