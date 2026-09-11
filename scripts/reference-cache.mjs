import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import {brands} from '../packages/brands/src/index.mjs';
export async function referenceDigest(){
 const h=createHash('sha256');
 for(const file of ['packages/brands/src/slide-scene.mjs','packages/brands/src/atlas-slide-content.mjs','packages/brands/src/presentation.mjs','packages/brands/src/deck-foundation.json','packages/brands/src/deck-presets.json','packages/presentation/src/render.mjs','packages/presentation/src/chart-labels.mjs','scripts/build-decks.mjs'])h.update(await readFile(new URL('../'+file,import.meta.url)));
 h.update(JSON.stringify(brands));
 for(const b of brands)if(b.assets?.logo)h.update(await readFile(new URL('../apps/docs/public/'+b.assets.logo.path,import.meta.url)));
 for(const pkg of ['pptxgenjs','jszip','@fontsource/inter'])h.update(JSON.parse(await readFile(new URL('../node_modules/'+pkg+'/package.json',import.meta.url),'utf8')).version);
 return h.digest('hex');
}
export async function verifyReferenceCache(){
 const manifest=JSON.parse(await readFile(new URL('../apps/docs/public/presentation-reference.json',import.meta.url),'utf8'));
 if(manifest.sourceHash!==await referenceDigest())throw new Error('PPTX previews are stale. Run npm run deck:reference and commit the rendered assets.');
 for(const entry of manifest.files){const data=await readFile(new URL('../apps/docs/public/'+entry.path,import.meta.url));if(createHash('sha256').update(data).digest('hex')!==entry.sha256)throw new Error(`Reference asset mismatch: ${entry.path}`);}
 return manifest;
}
