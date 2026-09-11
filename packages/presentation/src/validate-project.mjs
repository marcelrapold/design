import {validateDeck} from '../../brands/src/deck-validation.mjs';
const structural=new Set(['cover-foto','foto-schluss','kapitel-trenner','agenda']);
const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
const filled=v=>typeof v==='string'&&v.trim().length>0;
const bounded=(v,max)=>filled(v)&&v.length<=max;
const localPath=p=>filled(p)&&!p.startsWith('/')&&!p.includes('\\')&&!p.split('/').some(s=>s==='..'||s==='.')&&!/[:\x00-\x1f]/.test(p);
export function validateProject(input){
 const base=validateDeck(input);if(!base.valid)return base;
 const errors=[],add=(code,path,message)=>errors.push({code,path,message});
 if(input.schemaVersion!==1)add('schema-version','schemaVersion','Use project content schemaVersion 1.');
 if(!bounded(input.title,90))add('project-title','title','A project title of at most 90 characters is required.');
 if(!/^[a-z][a-z0-9-]*$/.test(input.brand??''))add('brand','brand','Name the registered brand.');
 if(!/^[\w.-]+\/[\w.-]+$/.test(input.repository??''))add('repository','repository','Use owner/repository.');
 if(!/^[a-f0-9]{40}$/i.test(input.commit??''))add('commit','commit','Pin the analysed repository to a full commit SHA.');
 const provenance=new Map(),introduced=new Set();let lastSection=-1;
 input.slides.forEach((s,i)=>{
  const sectionIndex=input.sections.findIndex(x=>x.id===s.section);
  if(sectionIndex>=0){if(sectionIndex<lastSection)add('section-order',`slides[${i}].section`,'Keep each section contiguous and in agenda order.');lastSection=sectionIndex;}
  const p=`slides[${i}]`,content=s.content??{},metrics=s.metrics??[],claims=s.claims??[],sources=s.sources??[];
  if(!object(content)){add('content',p+'.content','Content must be an object.');return;}
  const limit=(list,min,max,name)=>{if(!Array.isArray(list)||list.length<min||list.length>max){add('capacity',p+'.'+name,`${name} requires ${min}–${max} items; split the slide instead of dropping content.`);return false;}return true;};
  if(!bounded(s.title,90))add('text-capacity',p+'.title','Title: at most 90 characters.');
  if(!structural.has(s.type)&&!bounded(s.takeaway,220))add('text-capacity',p+'.takeaway','Takeaway: at most 220 characters.');
  if(s.lead&&`${s.lead.period} · ${s.lead.source}`.length>160)add('text-capacity',p+'.lead','Lead: at most 160 characters.');
  if(s.type==='kapitel-trenner'&&s.title!==input.sections.find(x=>x.id===s.section)?.title)add('section-title',p+'.title','Section divider must match the section title.');
  if(s.type==='agenda')limit(s.items,1,5,'items');
  sources.forEach((source,j)=>{
   if(!bounded(source.id,40)||!bounded(source.path,180))add('text-capacity',`${p}.sources[${j}]`,'Source ids and paths must remain readable (40 / 180 characters).');
   if(!localPath(source.path)||!/^[a-f0-9]{40}$/i.test(source.commit))add('provenance',`${p}.sources[${j}]`,'A relative repository path and full source commit SHA are required.');
   const identity=JSON.stringify([source.repository??input.repository,source.path,source.commit]);
   if(provenance.has(source.id)&&provenance.get(source.id)!==identity)add('source-identity',`${p}.sources[${j}]`,'A source id must keep the same repository, path and commit throughout the deck.');
   provenance.set(source.id,identity);
   if(source.label!==undefined&&!bounded(source.label,50))add('text-capacity',`${p}.sources[${j}].label`,'Source label: at most 50 characters.');
   if(source.excerpt!==undefined&&!filled(source.excerpt))add('excerpt',`${p}.sources[${j}].excerpt`,'An excerpt cannot be empty.');
  });
  claims.forEach((claim,j)=>{
   if(!bounded(claim.title,55)||!bounded(claim.text,240))add('text-capacity',`${p}.claims[${j}]`,'Claims need a title (≤55) and text (≤240 characters).');
   if(claim.value!==undefined&&!bounded(claim.value,22))add('text-capacity',`${p}.claims[${j}].value`,'Prominent value: at most 22 characters.');
  });
  metrics.forEach((m,j)=>{
   if(!bounded(m.label,35)||!bounded(String(m.value),25)||!bounded(String(m.comparison),25)||!bounded(m.unit,20))add('text-capacity',`${p}.metrics[${j}]`,'Metrics need concise labels, units and values.');
   if(m.comparisonSourceId&&!introduced.has(m.comparisonSourceId))add('sources-first',`${p}.metrics[${j}].comparisonSourceId`,'Introduce the comparison source on an earlier slide.');
   if(m.comparisonSourceId&&!sources.some(x=>x.id===m.comparisonSourceId))add('source-ref',`${p}.metrics[${j}].comparisonSourceId`,'The comparison source must be attached to the slide.');
   if(!bounded(m.comparisonPeriod,40))add('comparison-period',`${p}.metrics[${j}]`,'Name the comparison period or benchmark.');
  });
  const chart=()=>{
   if(metrics.some(m=>typeof m.value!=='number'||typeof m.comparison!=='number'||m.value<0||m.comparison<0)||new Set(metrics.map(m=>m.unit)).size>1||new Set(metrics.map(m=>m.period)).size>1||new Set(metrics.map(m=>m.comparisonPeriod)).size>1)add('chart-data',p+'.metrics','Charts require non-negative numeric values, one unit and consistent current/comparison periods.');
  };
  if(s.resolution){
   if(!bounded(s.resolution.text,140))add('resolution-text',p+'.resolution','Name the decision, assignment or open question (≤140 characters).');
   if(s.resolution.owner&&s.resolution.owner.length>60)add('text-capacity',p+'.resolution.owner','Owner: at most 60 characters.');
  }
  if(s.introducesSources)for(const source of sources)introduced.add(source.id);
  switch(s.type){
   case 'cover-foto':case 'foto-schluss':
    if(!object(content.image)||!localPath(content.image.path)||!bounded(content.image.alt,160)||!filled(content.image.credit))add('image',p+'.content.image','Photographic recipes require a local original image, alt text and credit. Choose another recipe when no image is available.');
    if(content.subtitle!==undefined&&!bounded(content.subtitle,120))add('text-capacity',p+'.content.subtitle','Subtitle: at most 120 characters.');break;
   case 'management-summary':limit(claims,1,5,'claims');break;
   case 'karten-steckbrief':limit(sources,1,3,'sources');break;
   case 'zwei-grosskarten':limit(claims,2,2,'claims');break;
   case 'modul-karten-mit-chart':limit(claims,3,3,'claims');if(claims.some(c=>c.text.length>140))add('text-capacity',p+'.claims','Compact module cards: at most 140 characters per body.');limit(metrics,1,3,'metrics');chart();break;
   case 'phasen-karten-gate':limit(claims,4,4,'claims');if(claims.some(c=>c.text.length>180))add('text-capacity',p+'.claims','Phase cards: at most 180 characters per body.');if(limit(content.gates,1,3,'content.gates')&&content.gates.some(v=>!bounded(v,130)))add('text-capacity',p+'.content.gates','Gate text: at most 130 characters.');break;
   case 'quellen-grid':limit(sources,1,12,'sources');break;
   case 'kpi-board':limit(metrics,1,5,'metrics');if(content.chart===true)chart();break;
   case 'kpi-timeline':
    limit(metrics,1,4,'metrics');
    if(limit(content.timeline,2,7,'content.timeline')&&content.timeline.some(t=>!object(t)||!bounded(t.label,35)||!bounded(t.date,25)||!['past','current','future'].includes(t.kind)))add('timeline',p+'.content.timeline','Timeline points need label, date and past/current/future kind.');
    if(Array.isArray(content.timeline)&&content.timeline.filter(t=>t?.kind==='current').length>1)add('alarm-limit',p+'.content.timeline','Only one current marker.');break;
   case 'textbox-tabelle':case 'split-tabelle':limit(metrics,1,s.type==='split-tabelle'&&content.chart?4:6,'metrics');if(new Set(metrics.map(m=>m.period)).size>1||new Set(metrics.map(m=>m.comparisonPeriod)).size>1)add('table-periods',p+'.metrics','Rows must share the periods shown beside the table.');if(s.type==='split-tabelle'&&content.chart===true)chart();break;
   case 'drei-schritt-beweis':limit(claims,3,3,'claims');break;
   case 'shape-balkendiagramm':limit(metrics,1,10,'metrics');chart();break;
   case 'vollbild-grafik':
    if(limit(content.columns,2,12,'content.columns')&&content.columns.some(v=>!bounded(v,12)))add('text-capacity',p+'.content.columns','Roadmap column labels: at most 12 characters.');
    if(limit(content.rows,1,4,'content.rows')&&content.rows.some(r=>!object(r)||!bounded(r.label,40)||!Number.isInteger(r.start)||!Number.isInteger(r.span)||r.start<0||r.span<1||r.start+r.span>(content.columns?.length??0)))add('roadmap',p+'.content.rows','Roadmap rows need a label and an in-range start/span.');break;
   case 'entscheid-register':if(!s.resolution)add('resolution',p+'.resolution','A decision register requires a resolution.');limit(claims,0,3,'claims');break;
  }
 });
 return {valid:errors.length===0,errors};
}
