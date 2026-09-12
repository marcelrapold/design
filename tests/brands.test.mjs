import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { brands, neutral, goldbach, defineBrand, contrast, toCssVariables, colorKeys, requiredBrandKeys, optionalBrandKeys } from '../packages/brands/src/index.mjs';
import brandSchema from '../packages/brands/src/brand.schema.json' with { type: 'json' };
import { presentationTheme } from '../packages/brands/src/presentation.mjs';

test('all supported modes meet the text and input contrast contract', () => {
  const pairs = [['foreground','background'],['card-foreground','card'],['muted-foreground','background'],['muted-foreground','muted'],['primary-foreground','primary'],['primary-hover-foreground','primary-hover'],['secondary-foreground','secondary'],['destructive-foreground','destructive'],['success-foreground','success'],['warning-foreground','warning']];
  for (const brand of brands) for(const [mode,c] of Object.entries(brand.modes)) {
    for (const [fg,bg] of pairs) assert.ok(contrast(c[fg],c[bg]) >= 4.5,`${brand.id}/${mode}/${fg}: ${contrast(c[fg],c[bg])}`);
    for(const role of ['ring','input']) for (const surface of ['background','card']) assert.ok(contrast(c[role],c[surface]) >= 3,`${brand.id}/${mode}/${role}/${surface}`);
  }
});
test('brand schema rejects missing colors, unknown roles and CSS injection', () => {
  const missing = structuredClone(neutral);delete missing.modes.light.primary;
  assert.throws(() => defineBrand(missing));
  const extra = structuredClone(neutral);extra.modes.light.secret='#123456';assert.throws(() => defineBrand(extra));
  const injected = structuredClone(neutral);injected.typography.family='Arial; background:url(https://example.com)';assert.throws(() => defineBrand(injected));
});
test('new brands require no core changes and unsupported dark mode falls back', () => {
  const custom = defineBrand({...structuredClone(neutral),id:'next-company',name:'Next Company'});
  assert.equal(toCssVariables(custom)['--primary'],neutral.modes.light.primary);
  assert.equal(toCssVariables(goldbach,'dark')['--background'],goldbach.modes.light.background);
  assert.equal(Object.isFrozen(custom.modes.light),true);
});
test('presentation and UI derive their identity from the same source', () => {
  for(const brand of brands) {
    const deck = presentationTheme(brand);
    assert.equal(deck.colors.accent,brand.modes.light.primary);
    assert.equal(deck.typography.bodyWeight,brand.typography.bodyWeight);
    assert.equal(deck.evidence.required,true);
  }
});
test('core contains no organisation bindings, fonts or application infrastructure', async () => {
  const root = new URL('../packages/core/src/',import.meta.url);
  const walk = async dir => { for (const entry of await readdir(dir,{withFileTypes:true})) { const path=new URL(entry.name+(entry.isDirectory()?'/':''),dir); if(entry.isDirectory()) await walk(path); else { const text=await readFile(path,'utf8'); assert.doesNotMatch(text,/zvv|goldbach|sygnum|Brown Narrow|x-atlas-pin|supabase|next\/|framer-motion/i,entry.name); } } };
  await walk(root);
});
test('source-defined Goldbach pink hover requires a documented refinement', () => {
  assert.ok(contrast('#ef1957','#ffffff') < 4.5);
  assert.equal(goldbach.modes.light['primary-hover'],'#8d1926');
});
test('the published brand schema cannot drift from the validator it documents', () => {
  assert.deepEqual(brandSchema.required,[...requiredBrandKeys],'schema required keys');
  assert.deepEqual(Object.keys(brandSchema.properties).sort(),[...requiredBrandKeys,...optionalBrandKeys].sort(),'schema property list');
  assert.deepEqual(brandSchema.$defs.mode.required,[...colorKeys],'schema colour roles');
  assert.equal(brandSchema.additionalProperties,false,'unknown brand keys must stay rejected');
  for (const brand of brands) {
    for (const key of Object.keys(brand)) assert.ok(key in brandSchema.properties,`${brand.id}: ${key} missing from the schema`);
    for (const key of requiredBrandKeys) assert.ok(key in brand,`${brand.id}: ${key} missing from the brand`);
    for (const colors of Object.values(brand.modes)) assert.deepEqual(Object.keys(colors).sort(),[...colorKeys].sort(),`${brand.id}: colour roles`);
  }
  // A key the validator accepts but the schema omits is exactly the failure that
  // shipped with the Sygnum 0.2 adapter: valid at runtime, undocumented publicly.
  assert.throws(()=>defineBrand({...structuredClone(neutral),unknownBlock:{}}),/invalid keys/);
});
