'use client';
import {useEffect,useRef,useState} from 'react';
import {Button,Lightbox} from '@rapold/framework-core';
import {Copy,Download} from 'lucide-react';
import {mermaidTheme,mermaidThemeCSS,MERMAID_WRAPPING_WIDTH,MERMAID_NODE_PADDING} from '../../../../packages/brands/src/mermaid-theme.mjs';
import {useActiveBrand} from './framework-shell';

// Mermaid owns global configuration. Serialize initialize + render as one task,
// including across mounted charts and rapid brand changes.
let renderQueue: Promise<void> = Promise.resolve();
let nextId = 0;

function download(content: string, name: string, type: string) {
  const url=URL.createObjectURL(new Blob([content],{type}));
  const link=document.createElement('a');link.href=url;link.download=name;link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

export default function MermaidDiagram({code,label,filename,onEdit}:{code:string;label:string;filename:string;onEdit?:()=>void}) {
  const {brand,mode}=useActiveBrand();
  const host=useRef<HTMLDivElement>(null);
  const [svg,setSvg]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(true),[copied,setCopied]=useState('');
  useEffect(()=>{
    let cancelled=false;
    setBusy(true);setError('');setCopied('');
    const task=async()=>{
      if(cancelled||!host.current)return;
      const container=host.current;
      try {
        if(code.length>30000)throw new Error('Die Definition darf höchstens 30 000 Zeichen enthalten.');
        const {default:mermaid}=await import('mermaid');
        await document.fonts.ready;
        if(cancelled)return;
        const fontFamily=getComputedStyle(container).fontFamily;
        mermaid.initialize({startOnLoad:false,securityLevel:'strict',suppressErrorRendering:true,maxTextSize:30000,maxEdges:500,theme:'base',look:'classic',fontFamily,
          themeVariables:mermaidTheme(brand,mode,fontFamily),themeCSS:mermaidThemeCSS(brand,mode),flowchart:{wrappingWidth:MERMAID_WRAPPING_WIDTH,padding:MERMAID_NODE_PADDING},
        });
        const result=await mermaid.render(`framework-mermaid-${++nextId}`,code,container);
        if(!cancelled)setSvg(result.svg);
      } catch(e) {
        if(!cancelled){setSvg('');setError(e instanceof Error?e.message:'Diagramm konnte nicht gerendert werden.');}
      } finally {
        container.replaceChildren();
        if(!cancelled)setBusy(false);
      }
    };
    renderQueue=renderQueue.then(task,task);
    return()=>{cancelled=true;};
  },[code,brand,mode]);
  const viewBox=svg.match(/viewBox="[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+([\d.]+)"/);
  const ratio=viewBox&&Number(viewBox[2])>0?Number(viewBox[1])/Number(viewBox[2]):undefined;
  const copy=async()=>{try{await navigator.clipboard.writeText(code);setCopied('Code kopiert.');}catch{setCopied('Bitte den Code unter «Quelltext» markieren und kopieren.');}};
  return <div className="mermaid-example">
    <div ref={host} aria-hidden="true" className="mermaid-measure"/>
    <div className="mermaid-surface" aria-busy={busy}>
      {svg&&<Lightbox label={label} aspectRatio={ratio} surface="readable"><div className="mermaid-svg" dangerouslySetInnerHTML={{__html:svg}}/></Lightbox>}
      {busy&&<p className="mermaid-loading" role="status">Diagramm wird gerendert …</p>}
      {error&&<div className="mermaid-error" role="alert"><strong>Die Definition konnte nicht gerendert werden.</strong><p>Korrigiere die Syntax und rendere erneut.</p><pre>{error}</pre></div>}
    </div>
    <div className="mermaid-actions">
      {onEdit&&<Button variant="outline" size="sm" onClick={onEdit}>Im Editor öffnen</Button>}
      <Button variant="outline" size="sm" disabled={!svg||busy} onClick={()=>download(svg,`${filename}-${brand.id}.svg`,'image/svg+xml;charset=utf-8')}><Download size={14}/>SVG</Button>
      <Button variant="outline" size="sm" onClick={()=>download(code,`${filename}.mmd`,'text/plain;charset=utf-8')}>Mermaid-Datei</Button>
      <Button variant="ghost" size="sm" onClick={copy}><Copy size={14}/>Code kopieren</Button>
      <span role="status">{copied}</span>
    </div>
    <details className="mermaid-source"><summary>Quelltext · {label}</summary><pre><code>{code}</code></pre></details>
  </div>;
}
