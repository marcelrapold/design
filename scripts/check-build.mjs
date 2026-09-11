import { readFile, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
const out=new URL('../apps/docs/out/',import.meta.url);
let css='';
async function collect(dir) {for(const e of await readdir(dir,{withFileTypes:true})) {const p=new URL(e.name+(e.isDirectory()?'/':''),dir); if(e.isDirectory()) await collect(p); else if(e.name.endsWith('.css')) css+=await readFile(p,'utf8');}}
await collect(new URL('_next/static/',out));
for (const selector of ['.bg-primary','.text-primary-foreground','.bg-card','.border-input',String.raw`.hover\:bg-primary-hover`]) assert.ok(css.includes(selector),`Core utility missing in production CSS: ${selector}`);
for(const path of ['index.html','llms.txt','contracts/repo-to-management.md','brands/goldbach/brand.json','brands/goldbach/presentation.json','brands/goldbach/logo.svg']) assert.ok((await readFile(new URL(path,out))).length,`Missing export: ${path}`);
console.log('Production CSS and agent entrypoints verified.');
