# PrintForge Atlas
[![Deploy](https://github.com/Eugeneofficial/PrintForge-Atlas/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/Eugeneofficial/PrintForge-Atlas/actions/workflows/deploy-pages.yml)
[![Pages](https://img.shields.io/badge/pages-online-black)](https://eugeneofficial.github.io/PrintForge-Atlas/)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey)](https://creativecommons.org/publicdomain/zero/1.0/)

Professional bilingual/trilingual static catalog for 3D-printing resources, built from the curated upstream list:
[`ad-si/awesome-3d-printing`](https://github.com/ad-si/awesome-3d-printing).

Live repository:
- <https://github.com/Eugeneofficial/PrintForge-Atlas>

## Product Summary
PrintForge Atlas is a frontend-only web application designed for GitHub Pages hosting.
It organizes 3D-printing ecosystem resources (brands, CAD tools, firmware, slicers, services, materials) into a searchable and filterable atlas.

## Key Capabilities
- Interface languages: `EN`, `RU`, `DE`
- Content display modes: `RU`, `EN`, `BOTH`
- Full-text search with highlighting
- Filters: section, tag, level, printer type
- Sorting: relevance, A-Z, popularity, updated
- Favorites, history, and compare mode (up to 4 cards)
- Stack builder (Printer + CAD + Slicer + Firmware)
- Calculators (print cost and estimated print time)
- Export: Markdown, JSON, PDF/print
- Import/Export favorites (JSON)
- Upstream sync from GitHub README + delta (added/removed)
- PWA baseline (manifest + service worker)
- Two eye-friendly themes: `Light` and `Dark`

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Actions (deploy)
- GitHub Pages (hosting)

No backend, framework runtime, or database required.

## Repository Structure
```text
.
├─ .github/workflows/
│  └─ deploy-pages.yml        # GitHub Pages deployment workflow
├─ data/
│  ├─ resources.json          # Parsed dataset
│  └─ resources-inline.js     # Inline fallback dataset
├─ index.html                 # Entry page
├─ styles.css                 # UI and themes
├─ app.js                     # Application logic
├─ service-worker.js          # Caching/offline behavior
├─ manifest.webmanifest       # PWA metadata
├─ 404.html                   # GitHub Pages fallback
├─ icon.svg                   # App icon
├─ LICENSE
└─ README.md
```

## Attribution and Source Credits
Primary source dataset and structure inspiration:
- **Project:** `awesome-3d-printing`
- **Author:** `ad-si`
- **Repository:** <https://github.com/ad-si/awesome-3d-printing>
- **License:** CC0 1.0 Universal
- **License URL:** <https://creativecommons.org/publicdomain/zero/1.0/>

Additional reference:
- Awesome list standard by Sindre Sorhus: <https://github.com/sindresorhus/awesome>

Important note:
- PrintForge Atlas is an independent presentation layer and is **not an official mirror** of the upstream project.

## Compliance Notes
- Upstream links are preserved as external references.
- Upstream license attribution is explicitly documented in this README and in `LICENSE`.
- This project does not claim ownership over upstream resource entries.

## Project Docs
- Changelog: [`CHANGELOG.md`](./CHANGELOG.md)

## License
This project uses **CC0 1.0 Universal**.
See [`LICENSE`](./LICENSE).
