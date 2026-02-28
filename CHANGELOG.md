# Changelog

## [Unreleased]
### Added
- Language selector dropdown (EN/RU/DE)
- Quick filter presets (Beginner, Open Source, Firmware, Marketplaces)
- Section deep links with copy support
- Link health check badge (`OK/FAIL/UNKNOWN`) for visible cards
- Suggest resource shortcut to upstream issues
- Config extraction in `config.js`
- Resource JSON schema and CI validation script
- Smoke tests for dataset and parser assumptions
- Release build script generating minified `dist/`

### Changed
- Search now uses debounce for smoother UX
- Toolbar and card action labels improved and localized
- Added last data update indicator in header
- Improved accessibility focus visibility

### Removed
- Legacy admin editing controls from UI flow
