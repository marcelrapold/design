import {slides as catalog} from './presentation.mjs';
const known=new Set(catalog.map(s=>s.id));
const structural=new Set(['cover-foto','foto-schluss','kapitel-trenner','agenda']);
export function validateDeck(input){
 const errors=[];const add=(code,path,message)=>errors.push({code,path,message});
 if(!input||!Array.isArray(input.slides)||!Array.isArray(input.sections))return {valid:false,errors:[{code:'schema',path:'$',message:'slides and sections arrays required'}]};
 if(!input.decisionQuestion?.trim())add('decision-question','decisionQuestion','Name the decision this deck supports.');
 const sectionTitles=input.sections.map(s=>s.title);
 const agenda=input.slides.find(s=>s.type==='agenda');
 if(agenda&&JSON.stringify(agenda.items)!==JSON.stringify(sectionTitles))add('agenda','slides','Agenda must match section titles exactly.');
 let sourceIntroduced=false;
 input.slides.forEach((slide,i)=>{
  const p=`slides[${i}]`;
  if(!known.has(slide.type))add('type',p+'.type','Unknown catalog type.');
  if(slide.introducesSources===true && slide.sources?.length)sourceIntroduced=true;
  if(!slide.title?.trim())add('title',p+'.title','A title is required.');
  if(!structural.has(slide.type)){
   if(!slide.lead?.period||!slide.lead?.source)add('lead',p+'.lead','Working slides need period and source.');
   if(!slide.sources?.length)add('source',p+'.sources','Working slides need source evidence.');
   for(const [j,s] of (slide.sources??[]).entries())if(!s.id||!s.retrievedAt||!s.path||!s.commit)add('provenance',`${p}.sources[${j}]`,'Source id, retrieval date, commit and path required.');
   if(!slide.takeaway?.trim())add('takeaway',p+'.takeaway','Evidence needs a separate interpretation.');
  }
  if(slide.metrics?.length&&!sourceIntroduced)add('sources-first',p+'.metrics','Introduce the evidence sources before the first metric slide.');
  for(const [j,m] of (slide.metrics??[]).entries())if(m.value===undefined||!m.unit||!m.period||m.comparison===undefined||!m.sourceId)add('comparison',`${p}.metrics[${j}]`,'Metric needs value, unit, period, comparison and sourceId.');
  for(const [j,c] of (slide.claims??[]).entries())if(!['fact','inference','open-question'].includes(c.kind)|| (c.kind==='fact'&&!c.sourceId))add('claim',`${p}.claims[${j}]`,'Classify claims and source facts.');
  if((slide.alarmCount??0)>1)add('alarm-limit',p+'.alarmCount','At most one alarm element per slide.');
  if((slide.highlightCount??0)>2)add('highlight-limit',p+'.highlightCount','At most two highlighted statement surfaces.');
  if(slide.placeholder===true)add('placeholder',p,'Production decks cannot contain placeholders.');
 });
 for(const [i,section] of input.sections.entries()){
  const members=input.slides.filter(s=>s.section===section.id&&!structural.has(s.type));
  if(members.length<2||members.length>6)add('section-size',`sections[${i}]`,'Sections contain 2–6 working slides.');
  const close=members.at(-1)?.resolution;
  if(!close||!['decision','assignment','open-question'].includes(close.kind))add('section-close',`sections[${i}]`,'End each section with a decision, assignment or open question.');
  else if(close.kind!=='open-question'&&(!close.owner||!close.dueDate))add('accountability',`sections[${i}]`,'Decisions and assignments require owner and due date.');
 }
 return {valid:errors.length===0,errors};
}
