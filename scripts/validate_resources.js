const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'data', 'resources.json');
const raw = fs.readFileSync(file, 'utf8');
const data = JSON.parse(raw);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(typeof data.source === 'string', 'source must be string');
assert(typeof data.generated_at === 'string', 'generated_at must be string');
assert(data.stats && Number.isInteger(data.stats.sections), 'stats.sections must be integer');
assert(data.stats && Number.isInteger(data.stats.items), 'stats.items must be integer');
assert(Array.isArray(data.sections), 'sections must be array');

let itemCount = 0;
for (const section of data.sections) {
  assert(typeof section.title_en === 'string', 'section.title_en missing');
  assert(typeof section.title_ru === 'string', 'section.title_ru missing');
  assert(typeof section.title_de === 'string', 'section.title_de missing');
  assert(Array.isArray(section.items), 'section.items must be array');
  for (const item of section.items) {
    itemCount += 1;
    assert(typeof item.name === 'string', 'item.name missing');
    assert(typeof item.url === 'string', 'item.url missing');
    assert(typeof item.description_en === 'string', 'item.description_en missing');
    assert(typeof item.description_ru === 'string', 'item.description_ru missing');
    assert(typeof item.description_de === 'string', 'item.description_de missing');
  }
}

assert(itemCount === data.stats.items, `stats.items mismatch: ${itemCount} != ${data.stats.items}`);
assert(data.sections.length === data.stats.sections, `stats.sections mismatch: ${data.sections.length} != ${data.stats.sections}`);

console.log('resources validation passed');
