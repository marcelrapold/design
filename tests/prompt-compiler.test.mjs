import test from 'node:test';
import assert from 'node:assert/strict';
import {compilePrompt} from '../packages/brands/src/prompt-compiler.mjs';

test('interface and written brief requests cannot inherit the presentation delivery contract',()=>{
  const input={idea:'Projekt prüfen',brand:{id:'goldbach',name:'Goldbach'}};
  const ui=compilePrompt({...input,format:'Interface'});
  const brief=compilePrompt({...input,format:'Management-Briefing'});
  const slides=compilePrompt({...input,format:'Präsentation'});
  assert.match(ui,/Anwendungscode/);
  assert.match(ui,/engineering\.md/);
  assert.doesNotMatch(ui,/PPTX|validateProject|jede Folie/i);
  assert.match(brief,/Schriftliches Management-Briefing/);
  assert.doesNotMatch(brief,/PPTX|validateProject/);
  assert.match(slides,/PPTX, PDF und sources\.json/);
  for(const output of [ui,brief,slides])assert.match(output,/brands\/goldbach\/brand\.json/);
  assert.throws(()=>compilePrompt({...input,format:'Unbekannt'}),/Unbekanntes/);
});
