import foundation from './foundation.json' with { type: 'json' };
export { foundation };
export function resolveFoundation(brand) {
  const result=structuredClone(foundation);
  for(const [group,values] of Object.entries(brand.tokens ?? {})) {
    if(!result[group] || typeof result[group] !== 'object') throw new Error(`Unknown token group: ${group}`);
    for(const [key,value] of Object.entries(values)) {
      const baseline=result[group][key];
      if(baseline === undefined || typeof value !== typeof baseline) throw new Error(`Invalid token: ${group}.${key}`);
      if(typeof value === 'number' && (!Number.isFinite(value) || value<0)) throw new Error(`Invalid number: ${group}.${key}`);
      if(typeof value === 'string' && !/^(?:[\d.]+(?:px|rem|ms)|cubic-bezier\([\d., -]+\))$/.test(value)) throw new Error(`Invalid CSS: ${group}.${key}`);
      result[group][key]=value;
    }
  }
  return result;
}
export function foundationVariables(brand) {
  const tokens=resolveFoundation(brand);
  return Object.fromEntries(Object.entries(tokens).filter(([,v])=>typeof v==='object').flatMap(([group,values])=>Object.entries(values).map(([key,value])=>[`--${group.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())}-${key}`,value])));
}
const mix=(a,b,t)=>'#'+[0,2,4].map(i=>Math.round(parseInt(a.slice(1+i,3+i),16)*t+parseInt(b.slice(1+i,3+i),16)*(1-t)).toString(16).padStart(2,'0')).join('');
export function semanticTokens(brand, mode='light') {
  const c=brand.modes[mode] ?? brand.modes.light;
  return {...c, 'info':c.primary,'info-foreground':c['primary-foreground'], 'sidebar':c.card,'sidebar-foreground':c['card-foreground'],'sidebar-accent':c.accent,'sidebar-border':c.border,'overlay':'#000000',
    'chart-1':c.primary,'chart-2':c.success,'chart-3':c.warning,'chart-4':c.destructive,'chart-5':c['muted-foreground'],
    'surface-info':mix(c.primary,c.card,.08),'surface-success':mix(c.success,c.card,.08),'surface-warning':mix(c.warning,c.card,.08),'surface-danger':mix(c.destructive,c.card,.08)};
}
export function tokenDocument(brand,mode='light') {
 return {schemaVersion:1,brand:brand.id,mode:brand.modes[mode]?mode:'light',foundation:resolveFoundation(brand),semantic:semanticTokens(brand,mode),palette:brand.palette??{},typography:brand.typography,shape:brand.shape};
}
export function dtcgTokens(brand, mode='light') {
 const result={ $description:`${brand.name}: resolved design tokens` };
 for(const [key,value] of Object.entries(semanticTokens(brand,mode))) result[key]={$type:'color',$value:{colorSpace:'srgb',components:value.slice(1).match(/../g).map(x=>parseInt(x,16)/255),alpha:1,hex:value}};
 if(brand.palette)result.palette=Object.fromEntries(Object.entries(brand.palette).map(([key,value])=>[key,{$type:'color',$value:{colorSpace:'srgb',components:value.slice(1).match(/../g).map(x=>parseInt(x,16)/255),alpha:1,hex:value}}]));
 const types={spacing:'dimension',fontSize:'dimension',lineHeight:'number',fontWeight:'fontWeight',radius:'dimension',borderWidth:'dimension',opacity:'number',duration:'duration',easing:'cubicBezier',breakpoint:'dimension',layout:'dimension',zIndex:'number',icon:'dimension'};
 for(const [group,values] of Object.entries(resolveFoundation(brand))) if(typeof values==='object') result[group]=Object.fromEntries(Object.entries(values).map(([key,value])=>[key,{$type:typeof value==='number' && group==='icon'?'number':types[group]??'string',$value:typeof value==='number'?value:group==='easing'?value.match(/[-\d.]+/g).map(Number):{value:parseFloat(value),unit:value.replace(/[\d.]/g,'')}}]));
 return result;
}
