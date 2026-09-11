import { readFile, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import JSZip from 'jszip';
import {brands} from '../packages/brands/src/index.mjs';
import {presets} from '../packages/brands/src/presentation.mjs';
const out=new URL('../apps/docs/out/',import.meta.url);
let css='';
async function collect(dir) {for(const e of await readdir(dir,{withFileTypes:true})) {const p=new URL(e.name+(e.isDirectory()?'/':''),dir); if(e.isDirectory()) await collect(p); else if(e.name.endsWith('.css')) css+=await readFile(p,'utf8');}}
await collect(new URL('_next/static/',out));
for (const selector of ['.bg-primary','.text-primary-foreground','.bg-card','.border-input',String.raw`.hover\:bg-primary-hover`]) assert.ok(css.includes(selector),`Core utility missing in production CSS: ${selector}`);
for(const path of ['index.html','llms.txt','contracts/repo-to-management.md','brands/goldbach/brand.json','brands/goldbach/presentation.json','brands/goldbach/logo.svg']) assert.ok((await readFile(new URL(path,out))).length,`Missing export: ${path}`);
for(const page of ['praesentation','praesentationslogik','coverage','mermaid','charts','tables','organigramm','prompt-compiler','login-pattern','mail-templates'])assert.ok((await readFile(new URL(`${page}.html`,out))).length,`Missing reference page: ${page}`);
const validator=await import(new URL('praesentation/deck-validation.mjs',out));
assert.equal(validator.validateDeck({sections:[],slides:[]}).valid,false,'Served standalone validator must run and reject an empty deck');
assert.equal(JSON.parse(await readFile(new URL('praesentation/deck-input.schema.json',out),'utf8')).type,'object');
for(const brand of brands)for(const set of [{id:'muster-deck',count:18},...presets.map(p=>({id:p.id,count:p.folgen.length}))]){
 const zip=await JSZip.loadAsync(await readFile(new URL(`brands/${brand.id}/decks/${set.id}.pptx`,out)));
 assert.equal(Object.keys(zip.files).filter(p=>/^ppt\/slides\/slide\d+\.xml$/.test(p)).length,set.count,`${brand.id}/${set.id}: slide count`);
 for(const name of Object.keys(zip.files).filter(p=>/^ppt\/charts\/chart\d+\.xml$/.test(p))){
  const xml=await zip.file(name).async('string');
  if(!xml.includes('<c:lineChart>'))assert.match(xml,/<a:t>−?\d+,\d{2}<\/a:t>/,'Native chart labels must preserve decimal commas');
  assert.match(xml,/<c:numCache>/,'Native editable chart data must be retained');
 }
}
console.log('Production CSS, reference routes, standalone validator and 12 editable decks verified.');
const {verifyReferenceCache}=await import('./reference-cache.mjs');
const reference=await verifyReferenceCache();
assert.equal(reference.files.filter(x=>x.path.endsWith('.png')).length,36);
assert.equal(reference.files.filter(x=>x.path.endsWith('.pdf')).length,12);
for(const item of reference.files)assert.ok((await readFile(new URL(item.path,out))).length,`Missing exported reference: ${item.path}`);
assert.ok((await readFile(new URL('praesentation/project-input.schema.json',out))).length);
const projectValidator=await import(new URL('praesentation/project-validation.mjs',out));
assert.equal(projectValidator.validateProject(JSON.parse(await readFile(new URL('praesentation/framework-review.json',out),'utf8'))).valid,true);
console.log('All 36 genuine PPTX previews, 12 PDFs and project-deck contracts verified.');
