import test from 'node:test';
import assert from 'node:assert/strict';
import {renderOrgchart,toPublicData,toJsonLd,renderZustaendigkeiten} from '../packages/brands/src/orgchart.mjs';
const data={title:'Beispiel "Organisation"',direction:{name:'Leitung',head:'Person A'},departments:[{name:'Produkt',head:'Person B',desc:['Ziele'],members:['Person C']}],asOf:'September 2026'};
const options={primary:'#263b70',font:'Inter, sans-serif'};
test('public organigram export removes people from SVG, JSON and structured data',()=>{
 const publicData=toPublicData(data);
 const svg=renderOrgchart(publicData,options);
 for(const text of [svg,JSON.stringify(publicData),JSON.stringify(toJsonLd(publicData))])assert.doesNotMatch(text,/Person [ABC]/);
 assert.match(svg,/Produkt/);assert.match(svg,/Ziele/);
 assert.match(renderOrgchart(data,options),/Person C/);
 assert.equal(toJsonLd(data).name,data.title);
});
test('orgchart escapes attributes, rejects impossible row counts and keeps governance finite',()=>{
 const svg=renderOrgchart({...data,title:'"><script>alert(1)</script>'},options);
 assert.doesNotMatch(svg,/<script>|NaN|Infinity/);assert.match(svg,/&quot;&gt;&lt;script&gt;/);
 assert.throws(()=>renderOrgchart({...data,departments:Array(9).fill(data.departments[0])},options),/acht/);
 const governance=renderZustaendigkeiten({extern:[{name:'A'},{name:'B'}],verbund:[{name:'Steuerung'},{name:'Umsetzung'}]},options);
 assert.doesNotMatch(governance,/NaN|Infinity|im ZVV/);
 assert.match(governance,/Steuerung/);
});
