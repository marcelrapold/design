import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import { brands } from '../packages/brands/src/index.mjs';
import { presentationTheme } from '../packages/brands/src/presentation.mjs';
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
