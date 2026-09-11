import {slides as catalog} from './presentation.mjs';
const known=new Set(catalog.map(s=>s.id));
const structural=new Set(['cover-foto','foto-schluss','kapitel-trenner','agenda']);
const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
const filled=v=>typeof v==='string'&&v.trim().length>0;
const scalar=v=>(typeof v==='number'&&Number.isFinite(v))||filled(v);
const date=v=>filled(v)&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v))&&new Date(v).toISOString().slice(0,10)===v;
export function validateDeck(input){
 const errors=[];const add=(code,path,message)=>errors.push({code,path,message});
 if(!input||!Array.isArray(input.slides)||!Array.isArray(input.sections))return {valid:false,errors:[{code:'schema',path:'$',message:'slides and sections arrays required'}]};
 if(typeof input.decisionQuestion!=='string'||!input.decisionQuestion.trim())add('decision-question','decisionQuestion','Name the decision this deck supports.');
 if(!input.slides.length||!input.sections.length)add('schema','$','At least one section and slide required.');
 if(input.slides.some(s=>!object(s))||input.sections.some(s=>!object(s)))return {valid:false,errors:[{code:'schema',path:'$',message:'Slides and sections must be objects.'}]};
 const ids=new Set();
 input.sections.forEach((s,i)=>{if(!filled(s.id)||!filled(s.title)||ids.has(s.id))add('section-definition',`sections[${i}]`,'Sections need unique ids and non-empty titles.');ids.add(s.id);});
 const sectionTitles=input.sections.map(s=>s.title);
 const agenda=input.slides.find(s=>s.type==='agenda');
 if(agenda&&JSON.stringify(agenda.items)!==JSON.stringify(sectionTitles))add('agenda','slides','Agenda must match section titles exactly.');
 const introducedSources=new Set();
 input.slides.forEach((slide,i)=>{
  const p=`slides[${i}]`;
  for(const key of ['sources','metrics','claims','items'])if(slide[key]!==undefined&&(!Array.isArray(slide[key])||slide[key].some(v=>key==='items'?!filled(v):!object(v)))){add('schema',p+'.'+key,'Expected an array of objects (strings for items).');return;}
  if(slide.section&&!input.sections.some(s=>s.id===slide.section))add('section-ref',p+'.section','Unknown section.');
  if(!known.has(slide.type))add('type',p+'.type','Unknown catalog type.');

  if(typeof slide.title!=='string'||!slide.title.trim())add('title',p+'.title','A title is required.');
  if(!structural.has(slide.type)){
   if(!filled(slide.section))add('section-ref',p+'.section','Working slides must belong to a section.');
   if(!filled(slide.lead?.period)||!filled(slide.lead?.source))add('lead',p+'.lead','Working slides need period and source.');
   if(!slide.sources?.length)add('source',p+'.sources','Working slides need source evidence.');
   for(const [j,s] of (slide.sources??[]).entries())if(!filled(s.id)||!date(s.retrievedAt)||!filled(s.path)||!filled(s.commit))add('provenance',`${p}.sources[${j}]`,'Source id, valid retrieval date, commit and path required.');
   if(typeof slide.takeaway!=='string'||!slide.takeaway.trim())add('takeaway',p+'.takeaway','Evidence needs a separate interpretation.');
  }
  const sources=new Set((slide.sources??[]).map(s=>s.id));
  for(const [j,m] of (slide.metrics??[]).entries()){
   if(!scalar(m.value)||!filled(m.unit)||!filled(m.period)||!scalar(m.comparison)||!filled(m.sourceId))add('comparison',`${p}.metrics[${j}]`,'Metric needs value, unit, period, comparison and sourceId.');
   if(!sources.has(m.sourceId))add('source-ref',`${p}.metrics[${j}]`,'Metric must reference evidence attached to this slide.');
   if(!introducedSources.has(m.sourceId))add('sources-first',`${p}.metrics[${j}]`,'Introduce this evidence source on an earlier slide.');
  }
  for(const [j,c] of (slide.claims??[]).entries()){
   if(!['fact','inference','open-question'].includes(c.kind)||!filled(c.text)|| (c.kind==='fact'&&!filled(c.sourceId)))add('claim',`${p}.claims[${j}]`,'Classify non-empty claims and source facts.');
   if(c.sourceId&&!sources.has(c.sourceId))add('source-ref',`${p}.claims[${j}]`,'Claim refers to unknown evidence.');
  }
  if(!Number.isInteger(slide.alarmCount??0)||(slide.alarmCount??0)<0||(slide.alarmCount??0)>1)add('alarm-limit',p+'.alarmCount','Alarm count is an integer between zero and one.');
  if(!Number.isInteger(slide.highlightCount??0)||(slide.highlightCount??0)<0||(slide.highlightCount??0)>2)add('highlight-limit',p+'.highlightCount','Highlight count is an integer between zero and two.');
  if(slide.introducesSources===true)for(const id of sources)introducedSources.add(id);
  if(slide.placeholder===true)add('placeholder',p,'Production decks cannot contain placeholders.');
 });
 for(const [i,section] of input.sections.entries()){
  const members=input.slides.filter(s=>s.section===section.id&&!structural.has(s.type));
  if(members.length<2||members.length>6)add('section-size',`sections[${i}]`,'Sections contain 2–6 working slides.');
  const close=members.at(-1)?.resolution;
  if(!close||!['decision','assignment','open-question'].includes(close.kind))add('section-close',`sections[${i}]`,'End each section with a decision, assignment or open question.');
  else if(close.kind!=='open-question'&&(!filled(close.owner)||!date(close.dueDate)))add('accountability',`sections[${i}]`,'Decisions and assignments require owner and a valid due date.');
 }
 return {valid:errors.length===0,errors};
}
