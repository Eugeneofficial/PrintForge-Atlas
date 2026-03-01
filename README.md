# PrintForge Atlas

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

Deployment is configured via GitHub Actions workflow:

- `.github/workflows/deploy-pages.yml`
- publish source: `./dist`
- target: GitHub Pages

Required repository settings:

1. `Settings -> Pages -> Source: GitHub Actions`
2. `Settings -> Actions -> Workflow permissions: Read and write`
