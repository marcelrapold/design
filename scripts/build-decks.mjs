import PptxGenJS from 'pptxgenjs';
import {mkdir,readFile} from 'node:fs/promises';
import {brands} from '../packages/brands/src/index.mjs';
import {presentationTheme} from '../packages/brands/src/presentation.mjs';
import {slideScene} from '../packages/brands/src/slide-scene.mjs';
// Framework renderer, not a hosted repository-analysis service.
for(const brand of brands){
 const deck=presentationTheme(brand), directory=new URL(`../apps/docs/public/brands/${brand.id}/decks/`,import.meta.url);
 await mkdir(directory,{recursive:true});
 const sets=[{id:'muster-deck',types:deck.slides.map(s=>s.id)},...deck.presets.map(p=>({id:p.id,types:p.folgen.map(f=>f.typ)}))];
 for(const set of sets){
  const pptx=new PptxGenJS();pptx.layout='LAYOUT_WIDE';pptx.author='Design Framework';pptx.subject='Illustrative framework reference';pptx.title=`${brand.name} · ${set.id}`;pptx.lang='de-CH';pptx.theme={headFontFace:deck.typography.family,bodyFontFace:deck.typography.family,lang:'de-CH'};
  for(const [slideIndex,id] of set.types.entries()){
   const slide=pptx.addSlide();
   for(const n of slideScene(id,deck).nodes){
    const pos={x:n.x/2.54,y:n.y/2.54,w:n.w/2.54,h:n.h/2.54};
    if(n.kind==='rect')slide.addShape(pptx.ShapeType.rect,{...pos,line:{color:n.fill.slice(1),transparency:100},fill:{color:n.fill.slice(1)}});
    else if(n.kind==='brand'&&brand.id==='goldbach'){
     const svg=await readFile(new URL('../apps/docs/public/brands/goldbach/logo.svg',import.meta.url),'utf8');
     slide.addShape(pptx.ShapeType.rect,{...pos,line:{transparency:100},fill:{color:'FFFFFF'}});
     slide.addImage({data:'image/svg+xml;base64,'+Buffer.from(svg).toString('base64'),...pptxgenImageContain(pptx,svg,pos)});
    } else slide.addText(n.text==='01'&&n.y>17?String(slideIndex+1).padStart(2,'0'):n.text??'',{...pos,fontFace:deck.typography.family,fontSize:n.pt??11,bold:n.bold??false,color:n.color?.slice(1)??'000000',margin:0,breakLine:false,valign:'top',paraSpaceAfterPt:0});
   }
   slide.addNotes(`Illustrative Beispieldaten, keine Projektfakten. Brand: ${brand.id}. Typ: ${id}. Layout: Atlas 1c75c95417cc371040e1e24a0986213314b53c13. Quelle: packages/brands/src/slide-scene.mjs. Originalfotos vor Verwendung ergänzen.`);
  }
  await pptx.writeFile({fileName:new URL(`${set.id}.pptx`,directory).pathname});
 }
}
function pptxgenImageContain(pptx,svg,pos){
 const match=svg.match(/viewBox="[^"]*?([\d.]+)\s+([\d.]+)"/);let ratio=5.76;if(match)ratio=Number(match[1])/Number(match[2]);const w=Math.min(pos.w*.9,pos.h*.8*ratio),h=w/ratio;return {x:pos.x+(pos.w-w)/2,y:pos.y+(pos.h-h)/2,w,h};
}
console.log('Generated editable decks for every brand and preset.');
