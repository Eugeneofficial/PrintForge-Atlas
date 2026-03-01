# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses semantic release snapshots.

## [Unreleased]

### Planned
- Additional visual themes and motion presets
- Extended calculator presets by printer/material profile
- Optional contributor flow for upstream sync review

## [1.0.0] - 2026-03-01

### Added
- Production-ready multilingual UI (`EN`, `RU`, `DE`)
- Sync workflow from upstream `awesome-3d-printing` README
- Delta reporting for sync changes (added/removed)
- Link health checks for visible resources with card badges
- Quick section presets (Beginner, Open Source, Firmware, Marketplaces)
- Section deep-link buttons with copy support
- Compare mode with multi-card feature table
- Stack builder (`Printer + CAD + Slicer + Firmware`)
- Calculator suite v3:
  - cost breakdown (material, energy, amortization, margin)
  - time estimation with overhead and profiles
  - cross-tool integration (`Use for Cost`)
  - multi-currency formatting (`USD`, `EUR`, `RUB`)
  - saved calculator presets in local storage
- Export options: Markdown, JSON, PDF/print
- Favorites import/export via JSON
- PWA baseline (manifest + service worker)
- Cinematic theme transition system with eye animation layer
- Mode-specific humorous quote generator for theme transitions
- Accessibility improvements for animated status text (`aria-live`)

### Changed
- Reworked section navigation layout to remove horizontal overflow issues
- Improved mobile behavior of key UI panels and calculator cards
- Refined focus-visible styles and interaction feedback
- Hardened theme transition timing model and anti-spam behavior
- Debounced calculator preset writes for reduced storage churn
- Improved numeric parsing to support comma and dot decimal formats
- Consolidated i18n labels and toolbar localization behavior
- Added data freshness indicator in header area

### Fixed
- Intro action buttons reliability across browsers
- Intro visibility state handling (`hidden` behavior)
- Intro video playback loop consistency
- Intro audio behavior under browser autoplay restrictions
- `file://` manifest loading CORS issue
- GitHub Pages artifact upload failure caused by hardcoded build path
- Calculator panel overflow in constrained layouts
- Theme transition state recovery when tab visibility changes mid-animation

### CI/CD
- Added dataset schema validation step (`scripts/validate_resources.js`)
- Added smoke tests (`tests/smoke.test.js`)
- Added release bundle builder (`scripts/build_release.py`)
- Configured deployment workflow to publish `dist/` to GitHub Pages

### Documentation
- Rewritten project README with architecture, runbook, deployment, and compliance sections
- Updated attribution and licensing references for upstream source
- Standardized changelog structure for ongoing releases
