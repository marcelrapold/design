import { mkdir, writeFile, copyFile, readFile } from 'node:fs/promises';
import { brands } from '../packages/brands/src/index.mjs';
import { presentationTheme } from '../packages/brands/src/presentation.mjs';
const {version}=JSON.parse(await readFile(new URL('../package.json',import.meta.url),'utf8'));
const root = new URL('../apps/docs/public/',import.meta.url);
await mkdir(new URL('contracts/',root),{recursive:true});
await copyFile(new URL('../docs/repo-to-management.md',import.meta.url),new URL('contracts/repo-to-management.md',root));
await copyFile(new URL('../docs/brand-contract.md',import.meta.url),new URL('contracts/brand-contract.md',root));
await copyFile(new URL('../docs/atlas-reference.md',import.meta.url),new URL('contracts/atlas-reference.md',root));
await copyFile(new URL('../llms.txt',import.meta.url),new URL('llms.txt',root));
await mkdir(new URL('brands/',root),{recursive:true});
await writeFile(new URL('brands/index.json',root),JSON.stringify({schemaVersion:1,brands:brands.map(b=>({id:b.id,name:b.name,status:b.status,version:b.version,brand:`/brands/${b.id}/brand.json`,presentation:`/brands/${b.id}/presentation.json`}))},null,2)+'\n');
for (const brand of brands) {
  const directory = new URL(`brands/${brand.id}/`,root);
  await mkdir(directory,{recursive:true});
  await writeFile(new URL('brand.json',directory),JSON.stringify(brand,null,2)+'\n');
  await writeFile(new URL('presentation.json',directory),JSON.stringify(presentationTheme(brand),null,2)+'\n');
}
console.log(`Generated contracts for ${brands.length} brands.`);

await copyFile(new URL('../brands/goldbach/README.md',import.meta.url),new URL('brands/goldbach/rules.md',root));
await copyFile(new URL('../brands/goldbach/sources/DESIGN.md',import.meta.url),new URL('brands/goldbach/DESIGN.md',root));
await copyFile(new URL('../brands/goldbach/sources/IMAGERY.md',import.meta.url),new URL('brands/goldbach/IMAGERY.md',root));

const {tokenDocument,dtcgTokens,toCssVariables}=await import('../packages/brands/src/index.mjs');
for(const brand of brands)for(const mode of Object.keys(brand.modes)) {
 const directory=new URL(`brands/${brand.id}/`,root);
 await writeFile(new URL(`tokens.${mode}.json`,directory),JSON.stringify(tokenDocument(brand,mode),null,2)+'\n');
 await writeFile(new URL(`tokens.${mode}.dtcg.json`,directory),JSON.stringify(dtcgTokens(brand,mode),null,2)+'\n');
 await writeFile(new URL(`tokens.${mode}.css`,directory),`[data-brand="${brand.id}"][data-mode="${mode}"] {\n${Object.entries(toCssVariables(brand,mode)).map(([k,v])=>`  ${k}: ${v};`).join('\n')}\n}\n`);
}
await mkdir(new URL('praesentation/',root),{recursive:true});
await copyFile(new URL('../docs/repo-to-management.md',import.meta.url),new URL('praesentation/llms.txt',root));
await copyFile(new URL('../docs/presentation-logic.md',import.meta.url),new URL('contracts/presentation-logic.md',root));
const validator=await readFile(new URL('../packages/brands/src/deck-validation.mjs',import.meta.url),'utf8');
const {slides}=await import('../packages/brands/src/presentation.mjs');
await writeFile(new URL('praesentation/deck-validation.mjs',root),validator.replace("import {slides as catalog} from './presentation.mjs';",'const catalog='+JSON.stringify(slides)+';'));
await import('./build-icons.mjs');
await import('./build-decks.mjs');
await copyFile(new URL('../packages/brands/src/deck-input.schema.json',import.meta.url),new URL('praesentation/deck-input.schema.json',root));
await writeFile(new URL('build-info.json',root),JSON.stringify({version,builtAt:new Date().toISOString(),commit:process.env.VERCEL_GIT_COMMIT_SHA??process.env.GITHUB_SHA??'local-build',atlasReference:'1c75c95417cc371040e1e24a0986213314b53c13',uiModules:19,slideTypes:18,deckPresets:5},null,2)+'\n');
await copyFile(new URL('../packages/presentation/src/project-input.schema.json',import.meta.url),new URL('praesentation/project-input.schema.json',root));
await copyFile(new URL('../examples/framework-review.json',import.meta.url),new URL('praesentation/framework-review.json',root));
const projectValidator=await readFile(new URL('../packages/presentation/src/validate-project.mjs',import.meta.url),'utf8');
await writeFile(new URL('praesentation/project-validation.mjs',root),projectValidator.replace('../../brands/src/deck-validation.mjs','./deck-validation.mjs'));
await copyFile(new URL('../docs/project-decks.md',import.meta.url),new URL('contracts/project-decks.md',root));

await copyFile(new URL('../docs/engineering.md',import.meta.url),new URL('contracts/engineering.md',root));
