import PptxGenJS from 'pptxgenjs';
import {readFile,realpath} from 'node:fs/promises';
import path from 'node:path';
import {presentationTheme} from '../../brands/src/presentation.mjs';
import {localizeChartLabels} from './chart-labels.mjs';
export async function assetPath(root,relative){
 const base=await realpath(root),file=await realpath(path.resolve(base,relative));
 if(!file.startsWith(base+path.sep))throw new Error(`Asset must stay within its input directory: ${relative}`);
 return file;
}
export async function renderScenes(brand,scenes,{title=brand.name,notes=[],assetRoot,imageRoot=assetRoot}={}){
 const theme=presentationTheme(brand),pptx=new PptxGenJS();
 pptx.layout='LAYOUT_WIDE';pptx.author='Design Framework';pptx.title=title;pptx.lang='de-CH';pptx.theme={headFontFace:brand.typography.headingFamily??theme.typography.family,bodyFontFace:brand.typography.bodyFamily??theme.typography.family,lang:'de-CH'};
 let logo;
 if(brand.assets?.logo){const spec=brand.assets.logo,file=await assetPath(assetRoot,spec.path);logo={...spec,file};}
 for(const [index,scene] of scenes.entries()){
  const slide=pptx.addSlide();
  for(const n of scene.nodes){
   const pos={x:n.x/2.54,y:n.y/2.54,w:n.w/2.54,h:n.h/2.54};
   if(!Object.values(pos).every(Number.isFinite)||pos.w<0||pos.h<0)throw new Error(`Invalid geometry on slide ${index+1}`);
   if(n.kind==='chart'||n.kind==='linechart'){
    slide.addChart(n.kind==='chart'?pptx.ChartType.bar:pptx.ChartType.line,n.series.map(s=>({name:s.name,labels:n.labels??s.values.map((_,i)=>String(i+1)),values:s.values})),{...pos,barDir:'col',catAxisLabelFontFace:theme.typography.family,catAxisLabelFontSize:9,valAxisLabelFontSize:9,showLegend:true,showValue:n.kind==='chart',showCatName:false,showTitle:false,showBorder:false,legendPos:'b',legendFontSize:9,chartColors:n.series.map(s=>s.color.slice(1)),valAxisHidden:true,showShadow:false,catAxisLineColor:theme.colors.border.slice(1),valGridLine:{style:'none'},dataLabelFormatCode:'0.00'});
   }else if(n.kind==='rect')slide.addShape(pptx.ShapeType[n.shape??'rect'],{...pos,line:{transparency:100},fill:{color:n.fill.slice(1)}});
   else if(n.kind==='brand'&&logo){
    slide.addShape(pptx.ShapeType.rect,{...pos,line:{transparency:100},fill:{color:logo.background.slice(1)}});
    const w=Math.min(pos.w*(1-2*logo.padding),pos.h*(1-2*logo.padding)*logo.aspectRatio),h=w/logo.aspectRatio;
    slide.addImage({path:logo.file,x:pos.x+(pos.w-w)/2,y:pos.y+(pos.h-h)/2,w,h,altText:brand.name});
   }else if(n.kind==='image'){
    const file=await assetPath(imageRoot,n.path);
    slide.addImage({path:file,...pos,sizing:{type:n.fit==='cover'?'cover':'contain',w:pos.w,h:pos.h},altText:n.alt});
   }else slide.addText(n.kind==='brand'?brand.name:n.text??'',{...pos,fontFace:(n.bold?brand.typography.headingFamily:brand.typography.bodyFamily)??theme.typography.family,fontSize:n.pt??11,bold:Boolean(n.bold && brand.typography.headingWeight>=600),color:n.color?.slice(1)??theme.colors.text.slice(1),margin:0,align:n.align??'left',valign:'top',paraSpaceAfterPt:0,lang:'de-CH'});
  }
  if(notes[index])slide.addNotes(notes[index]);
 }
 return localizeChartLabels(await pptx.write({outputType:'nodebuffer'}));
}
