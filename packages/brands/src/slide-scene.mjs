// One geometry model for the HTML reference and editable slide exports. Units: cm / pt.
export function slideScene(id, deck) {
 const c=deck.colors, g=deck.layout, nodes=[];
 const rect=(x,y,w,h,fill)=>nodes.push({kind:'rect',x,y,w,h,fill});
 const text=(value,x,y,w,h,pt=10.5,color=c.text,bold=false)=>nodes.push({kind:'text',text:value,x,y,w,h,pt,color,bold});
 const line=(y)=>rect(.93,y,32,.03,c.border);
 const title=deck.slides.find(s=>s.id===id)?.titel??id;
 const card=(x,y,w,h,heading,body,highlight=false)=>{rect(x,y,w,h,highlight?c['surface-info']:c['surface-neutral']);text(heading,x+.66,y+.51,w-1.32,1.1,13,c.text,true);text(body,x+.66,y+1.85,w-1.32,h-2.1,10.5,c['text-secondary']);};
 rect(0,0,33.867,19.05,c.surface);
 if(id==='cover-foto'||id==='foto-schluss') {
  // The slot is explicit: consumers supply licensed photography; no invented brand imagery.
  rect(0,0,33.867,17.524,c.primary);text(id==='cover-foto'?'Projektübersicht':'Fragen und nächste Schritte',.93,1.2,26,3,30,c['on-color'],true);
  text(id==='cover-foto'?'Management-Briefing · Musterinhalt':'Kontakt · Verantwortliche Person',.93,4.1,26,2,24,c['on-color']);
  text('Bildslot · eigenes Motiv gemäss Brand-Vorgaben',.93,14.6,28,1.5,11,c['on-color']);
 } else if(id==='kapitel-trenner') {
  rect(0,0,33.867,17.524,c.primary);text('01',.93,2,8,2,26,c['on-color'],true);text('Projektstand und Entscheidungen',.93,7,27,4,30,c['on-color'],true);
 } else {
  text(title,g.titel.x,g.titel.y,g.titel.w,g.titel.h,30,c.text,true);
  text('Illustrative Beispieldaten · keine Aussagen über ein reales Projekt',g.lead.x,g.lead.y,g.lead.w,g.lead.h1zeilig,11.5,c['text-secondary']);
  rect(0,g.fusslinie.y,33.867,.079,c.primary);text('01',g.foliennummer.x,g.foliennummer.y,1.49,.85,10,c.text,true);text('Quelle: Framework-Beispieldaten · durch Projektbelege ersetzen',g.quellzeile.x,g.quellzeile.y,30.23,.635,8,c['text-muted']);
  switch(id) {
   case 'agenda': ['Ausgangslage','Ziele und Evidenz','Umsetzung','Entscheidungen'].forEach((v,i)=>{text(String(i+1).padStart(2,'0'),.93,4.4+i*2.6,2,1.6,24,c.primary,true);text(v,4,4.4+i*2.6,27,1.6,24,c.text,true);});break;
   case 'management-summary':card(.93,4.27,18.8,9,'Was sich verändert','Erkenntnis aus dem Projekt\nBeleg und Auswirkung\nVerbleibende Unsicherheit',true);card(20.45,4.27,12.48,9,'Heute zu entscheiden','Entscheidungsfrage\nVerantwortung\nNächster Termin');break;
   case 'karten-steckbrief':case 'drei-schritt-beweis':case 'modul-karten-mit-chart': {
    const headings=id==='drei-schritt-beweis'?['Meldung','Ursache','Geprüfte Aussage']:['Quelle','Umfang','Einordnung'];
    headings.forEach((v,i)=>card(.93+i*10.92,4.27,10.16,7,v,'Beleg oder Datenausschnitt\nStand und Verantwortlichkeit',i===2));
    card(.93,12.1,32,4.7,'Schlussfolgerung','Deutung aus den oben dokumentierten Fakten',true);break;
   }
   case 'zwei-grosskarten':card(.93,4.27,15.748,12.5,'Ist-Zustand','Belegte Ausgangslage\nDatenstand\nBestehende Einschränkungen',true);card(17.2,4.27,15.748,12.5,'Zielbild','Erwarteter Nutzen\nAnnahmen\nErfolgskriterien');break;
   case 'phasen-karten-gate': ['Analyse','Konzeption','Umsetzung','Einführung'].forEach((v,i)=>{card(.93+i*8.18,4.27,7.468,9,v,'Ergebnis\nVerantwortung\nAbnahmekriterium',i===1);text('Gate '+(i+1),.93+i*8.18,14,7.468,1.4,12.5,c.primary,true);});break;
   case 'quellen-grid': ['Repository','Architektur','Projektplanung','Messwerte','Annahmen','Offene Fragen'].forEach((v,i)=>card(.93+(i%3)*10.92,4.27+Math.floor(i/3)*6.2,10.16,5.5,v,'Pfad · Commit · Stand\nBeleg zur Aussage',i===0));break;
   case 'kpi-board': ['24','86 %','4','12','3'].forEach((v,i)=>{const x=.93+i*6.51;rect(x,4.27,5.954,4.9,i===0?c.primary:c['surface-neutral']);text(v,x+.4,4.8,5.15,1.7,26,i===0?c['on-color']:c.primary,true);text(['Module','Abdeckung','Teams','Wochen','Offene Punkte'][i],x+.4,6.8,5.15,1,10.5,i===0?c['on-color']:c.text);});card(.93,10.3,32,6.2,'Einordnung','Alle Kennzahlen sind Beispieldaten. Im Projekt: Einheit, Periode und Vergleichsanker ergänzen.',true);break;
   case 'kpi-timeline':rect(2,9,29,.09,c.border);['Start','Konzept','Pilot','Betrieb'].forEach((v,i)=>{rect(2+i*9.1,8.75,.5,.5,i===2?c.signal:c.primary);text(v,1+i*8,6.6,7,1.2,13,c.text,true);text('Meilenstein '+(i+1),1+i*8,10.3,7,2,10.5,c['text-secondary']);});break;
   case 'textbox-tabelle':case 'split-tabelle': {
    const width=id==='split-tabelle'?18.796:32;
    ['Bereich                 Vorperiode           Aktuell','Produkt A                    100                   120','Produkt B                      80                     95','Produkt C                      60                     72','Total                             240                   287'].forEach((v,i)=>{if(i===4)rect(.93,4.27+i*1.9,width,1.8,c['surface-info']);text(v,1.3,4.5+i*1.9,width-.8,1.4,11,c.text,i===0||i===4);line(6.1+i*1.9);});
    if(id==='split-tabelle')card(20.45,4.27,12.497,11.5,'Einordnung','Interpretation\nUnsicherheiten\nKonsequenz',true);break;
   }
   case 'shape-balkendiagramm': ['Produkt A','Produkt B','Produkt C','Produkt D','Produkt E'].forEach((v,i)=>{const n=[82,64,51,38,24][i];text(v,.93,4.5+i*2.1,6,1,11,c.text);rect(7.5,4.55+i*2.1,n*.25,.65,i===0?c.primary:c['chart-previous']);text(String(n),8+n*.25,4.4+i*2.1,3,1,11,c.text,true);});break;
   case 'vollbild-grafik':rect(.93,4.27,32,12.5,c['surface-neutral']);text('Grafik aus strukturierten Projektdaten',3,7.8,27,2,24,c.primary,true);text('SVG oder PNG · 32 cm Nutzbreite · Quelle und Renderer dokumentieren',3,11,27,2,12,c['text-secondary']);break;
   case 'entscheid-register': ['Entscheidung zur nächsten Phase','Auftrag zur Klärung der Risiken','Verantwortung für die Umsetzung','Termin für die nächste Prüfung'].forEach((v,i)=>{text('E'+(i+1),.93,4.4+i*2.8,1.6,1,11,c['text-muted'],true);text(i===0?'ENTSCHEID':'AUFTRAG',3,4.4+i*2.8,5,1,10,i===0?c.danger:c.warning,true);text(v,8.5,4.4+i*2.8,24,1,13,c.text,true);text('Begründung · Verantwortliche Person · Termin',8.5,5.5+i*2.8,24,1,10.5,c['text-secondary']);line(6.8+i*2.8);});break;
  }
 }
 nodes.push({kind:'brand',x:29.905,y:.414,w:3.405,h:1.68,text:deck.brand.id==='neutral'?'Framework':deck.brand.id,color:['cover-foto','foto-schluss','kapitel-trenner'].includes(id)?c['on-color']:c.primary});
 return {width:33.867,height:19.05,nodes};
}
