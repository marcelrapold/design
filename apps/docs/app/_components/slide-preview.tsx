'use client';
import type {CSSProperties} from 'react';
import { slideScene } from '../../../../packages/brands/src/slide-scene.mjs';
export function SlidePreview({id,deck}:{id:string;deck:Record<string,any>}) {
 const scene=slideScene(id,deck);
 return <div className="slide-frame"><div className="slide-canvas" role="img" aria-label={`${deck.slides.find((s:any)=>s.id===id)?.titel??id}, illustrative Beispieldaten`} style={{aspectRatio:`${scene.width}/${scene.height}`,fontFamily:deck.typography.family}}>{scene.nodes.map((n,i)=>{
 const style:CSSProperties={position:'absolute',left:`${n.x/scene.width*100}%`,top:`${n.y/scene.height*100}%`,width:`${n.w/scene.width*100}%`,height:`${n.h/scene.height*100}%`,background:n.fill,color:n.color,fontSize:`${(n.pt??11)/960*100}cqw`,fontWeight:n.bold?deck.typography.headingWeight:deck.typography.bodyWeight,lineHeight:1.2,whiteSpace:'pre-line',overflow:'hidden'};
 if(n.kind==='brand'&&deck.brand.id==='goldbach')return <div key={i} style={style} className="slide-logo"><img src="/brands/goldbach/logo.svg" alt="" style={{background:'#fff',padding:'8%'}}/></div>;
 return <div key={i} style={style}>{n.text}</div>;
 })}</div></div>;
}
