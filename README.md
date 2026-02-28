# PrintForge Atlas

Production-ready bilingual (RU/EN) web catalog of 3D-printing resources, built from the curated upstream list [`ad-si/awesome-3d-printing`](https://github.com/ad-si/awesome-3d-printing).

## Overview
PrintForge Atlas is a static web application optimized for public hosting on GitHub Pages.
It provides structured discovery of tools, brands, firmware, materials, services, and marketplaces for the 3D-printing ecosystem.

Key goals:
- Deliver a clean and fast resource directory with strong filtering/search UX
- Support Russian and English content workflows
- Work reliably in static hosting environments without backend dependencies
- Be simple to maintain and update from the upstream source list

## Core Features
- Bilingual UI and content display modes (`RU`, `EN`, `BOTH`)
- Full-text search with match highlighting
- Filters by section, tags, level, and printer type
- Sorting by relevance/name/popularity/update score
- Favorites, history, and comparison mode (up to 4 items)
- Stack builder (Printer + CAD + Slicer + Firmware)
- Cost and time calculators
- Export tools (Markdown, JSON, PDF/print)
- Import/export favorites JSON
- Runtime error banner for easier debugging
- Upstream sync from GitHub README with change delta (added/removed)
- PWA baseline (manifest + service worker)

## Tech Stack
- HTML5 + CSS3 + Vanilla JavaScript
- Static JSON/inline dataset
- GitHub Actions for deployment
- GitHub Pages for hosting

No framework or server runtime is required.

## Project Structure
```text
.
├─ .github/workflows/
│  └─ deploy-pages.yml        # GitHub Pages deployment pipeline
├─ data/
│  ├─ resources.json          # Structured dataset
│  └─ resources-inline.js     # Inline dataset fallback for static/file contexts
├─ app.js                     # Main application logic
├─ styles.css                 # UI styling and responsive behavior
├─ index.html                 # Entry page
├─ 404.html                   # GitHub Pages fallback
├─ service-worker.js          # Offline/cache support
├─ manifest.webmanifest       # PWA metadata
├─ icon.svg                   # App icon
└─ README.md
```

## Local Development
Run a local static server (recommended instead of `file://`):

```powershell
cd C:\Users\mrjek\Desktop\NewSite
python -m http.server 4173
```

Open:
- `http://127.0.0.1:4173/`

## Deployment (GitHub Pages)
This repository is configured for automatic deployment via GitHub Actions.

### 1) Push to `main`
```powershell
git add .
git commit -m "docs: update professional README"
git push
```

### 2) Enable Pages source
In GitHub repository settings:
- `Settings` -> `Pages`
- Source: `GitHub Actions`

### 3) Verify deployment
- `Actions` tab: workflow `Deploy Static Site to GitHub Pages` must pass
- Site URL format:
  `https://<username>.github.io/<repository>/`

For this repository:
- `https://eugeneofficial.github.io/PrintForge-Atlas/`

## Data Source and Update Policy
Primary source:
- [`ad-si/awesome-3d-printing`](https://github.com/ad-si/awesome-3d-printing)

Recommended update flow:
1. Sync upstream data in app UI (Sync button)
2. Validate filters/search/cards
3. Commit and push to `main`
4. Confirm successful Pages deployment

## Quality Checklist Before Release
- No runtime error banner in browser
- RU/EN switching works
- Search, filters, and sorting work
- External links open correctly
- Service worker updates are applied (hard refresh after deploy)
- GitHub Actions deployment is green

## Troubleshooting
### Repository push returns "Repository not found"
- Ensure remote URL matches exact repository name and case
- Ensure repository exists under the expected owner

### Git commit fails due to identity
Configure git user:
```powershell
git config user.name "Eugeneofficial"
git config user.email "abramovplay@gmail.com"
```

### Page looks outdated after deploy
- Hard refresh (`Ctrl+F5`)
- If needed, unregister service worker in browser devtools and reload

## Security and Privacy
- No backend, no server-side data processing
- User preferences are stored locally in browser storage
- No personal data collection pipeline is included by default

## License
This project is distributed under the CC0 1.0 Universal license (see [`LICENSE`](./LICENSE)).
Official text: <https://creativecommons.org/publicdomain/zero/1.0/>

Upstream dataset attribution:
- `awesome-3d-printing` by `ad-si` (CC0-1.0)
