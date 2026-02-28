# PrintForge Atlas

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

## Local Run
```powershell
cd C:\Users\mrjek\Desktop\NewSite
python -m http.server 4173
```

Open:
- <http://127.0.0.1:4173/>

## Deployment (GitHub Pages)
This repo is configured for deployment via GitHub Actions.

1. Push to `main`
```powershell
git add .
git commit -m "chore: release update"
git push
```

2. In GitHub:
- `Settings` -> `Pages` -> `Source: GitHub Actions`
- `Settings` -> `Actions` -> `Workflow permissions: Read and write`

3. Verify workflow success:
- `Actions` tab -> `Deploy Static Site to GitHub Pages`

Expected site URL:
- <https://eugeneofficial.github.io/PrintForge-Atlas/>

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

## Operations Checklist
Before publishing updates:
- Confirm no runtime error banner
- Validate EN/RU/DE switching
- Validate Light/Dark theme toggle
- Validate search/filter/sort behavior
- Validate upstream sync and external links
- Confirm GitHub Actions deploy is green

## Troubleshooting
### Pages workflow fails on "Setup Pages"
- Ensure `Settings -> Pages -> Source: GitHub Actions`
- Ensure `Settings -> Actions -> Workflow permissions: Read and write`

### Browser shows old UI after deploy
- Hard refresh (`Ctrl+F5`)
- If needed, unregister service worker and reload

### Git identity errors on commit
```powershell
git config user.name "Eugeneofficial"
git config user.email "abramovplay@gmail.com"
```

## Security and Privacy
- No backend data processing
- No analytics pipeline by default
- User preferences are stored locally in browser storage

## License
This project uses **CC0 1.0 Universal**.
See [`LICENSE`](./LICENSE).
