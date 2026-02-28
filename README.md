# 3D Printing Atlas

Bilingual (RU/EN) static website based on [ad-si/awesome-3d-printing](https://github.com/ad-si/awesome-3d-printing).

## Features
- RU/EN interface and content modes (`RU`, `EN`, `BOTH`)
- Search, filtering, sorting, tags, levels, printer types
- Favorites, history, compare mode
- Stack builder, calculators, beginner mode
- Export/import tools
- GitHub sync from upstream README
- PWA support (`manifest` + `service-worker`)

## Local run

```powershell
cd NewSite
python -m http.server 4173
```

Open: `http://127.0.0.1:4173/`

## GitHub Pages deployment

This repo is ready for GitHub Actions Pages deploy via:
`/.github/workflows/deploy-pages.yml`

### 1) Create a new GitHub repo
Example: `3d-printing-atlas`

### 2) Push code

```powershell
cd C:\Users\mrjek\Desktop\NewSite
git init
git add .
git commit -m "release: initial public version"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/3d-printing-atlas.git
git push -u origin main
```

### 3) Enable Pages
- GitHub repo -> `Settings` -> `Pages`
- `Source`: `GitHub Actions`

After first workflow run, site URL will be:
`https://<YOUR_USERNAME>.github.io/3d-printing-atlas/`

## Release checklist
- [ ] Run local preview
- [ ] Verify RU/EN switching
- [ ] Verify Sync button
- [ ] Verify no runtime error banner
- [ ] Push to `main`
- [ ] Confirm `Deploy Static Site to GitHub Pages` workflow success

## Attribution
Data source: `awesome-3d-printing` by ad-si (CC0-1.0 in upstream repository).

## Notes
- If you open `index.html` directly (`file://`), some browser APIs can be restricted.
- Recommended: always run via local server or GitHub Pages URL.
