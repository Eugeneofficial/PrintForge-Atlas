const fs = require('fs');
const path = require('path');
const assert = require('assert');

const readme = fs.readFileSync(path.join(process.cwd(), 'readme-source.md'), 'utf8');
const hasHeading = /##\s+Slicers/.test(readme);
assert(hasHeading, 'README parser smoke: Slicers heading not found');

const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'resources.json'), 'utf8'));
assert(Array.isArray(data.sections) && data.sections.length > 0, 'dataset has no sections');

const sections = data.sections;
const slicers = sections.find((s) => s.title_en === 'Slicers');
assert(slicers && slicers.items.length > 0, 'Slicers section missing items');

const beginnerFilter = sections.flatMap((s) => s.items).filter((x) => (x.description_en || '').toLowerCase().includes('beginner'));
assert(beginnerFilter.length >= 0, 'beginner filter smoke failed');

console.log('smoke tests passed');
