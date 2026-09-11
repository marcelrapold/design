'use client';
import { useState } from 'react';
import { BrandProvider, Button, Badge, Input, Label, Card, CardContent } from '@rapold/framework-core';
import { brands, neutral, toCssVariables, contrast, type Mode } from '@rapold/framework-brands';

export default function Page() {
  const [brandId,setBrandId] = useState('neutral');
  const [requestedMode,setMode] = useState<Mode>('light');
  const [feedback,setFeedback] = useState('');
  const brand = brands.find(b => b.id === brandId) ?? neutral;
  const mode = requestedMode === 'dark' && brand.modes.dark ? 'dark' : 'light';
  const colors = brand.modes[mode]!;
  const prompt = `Analysiere das Repository <owner/repo>. Erstelle aus dem Projekt eine Management-Präsentation mit design.rapold.io im ${brand.id === 'goldbach' ? 'Goldbach-CI' : 'neutralen Framework-Design'}. Zielgruppe: Geschäftsleitung. Umfang: 8 Folien. Trenne belegte Fakten, Annahmen und offene Punkte. Liefere eine editierbare PPTX, PDF und Quellenbelege.`;

  return <BrandProvider brand={{id:brand.id,mode,variables:toCssVariables(brand,mode)}}>
    <a className="skip" href="#main">Zum Inhalt</a>
    <header className="topbar">
      <a href="#main" className="wordmark">Design Framework<span>0.1</span></a>
      <div className="controls">
        <label>Brand<select value={brandId} onChange={e => setBrandId(e.target.value)}>{brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}</select></label>
        <label>Darstellung<select value={mode} onChange={e => setMode(e.target.value as Mode)}><option value="light">Hell</option>{brand.modes.dark && <option value="dark">Dunkel</option>}</select></label>
      </div>
    </header>
    <div className="layout">
      <aside><p className="eyebrow">Designstandard</p><nav aria-label="Inhalt"><a href="#main">Übersicht</a><a href="#components">Komponenten</a><a href="#presentations">Präsentationen</a><a href="#contract">Brand-Vertrag</a></nav><p className="aside-note">Ein gemeinsamer Kern.<br/>Eigene Identitäten.</p></aside>
      <main id="main">
        <section className="intro">
          <div><p className="eyebrow">Foundation / {brand.id}</p><h1>Das Projekt liefert den Inhalt.<br/>Die Brand das Design.</h1><p className="lede">Eine gemeinsame Grundlage für Interfaces und Management-Präsentationen. Wähle eine Brand, um dieselben Bausteine in ihrer Ausprägung zu prüfen.</p></div>
          {brand.id === 'goldbach' ? <div className="brand-logo"><img src="/brands/goldbach/logo.svg" width="144" height="25" alt="Goldbach" /></div> : <div className="baseline-label">Neutrale Basis<br/><span>Keine Firmenbindung</span></div>}
        </section>
        <section id="components" className="section">
          <div className="section-title"><h2>01 / Komponenten</h2><span>Aus demselben Core-Package</span></div>
          <div className="specimen-grid">
            <div><h3>Aktionen und Zustände</h3><div className="actions"><Button onClick={() => setFeedback('Primäre Aktion ausgelöst.')}>Projekt öffnen</Button><Button variant="outline" onClick={() => setFeedback('Sekundäre Aktion ausgelöst.')}>Details anzeigen</Button><Button disabled>Nicht verfügbar</Button></div><div className="actions badges"><Badge>Aktiv</Badge><Badge variant="secondary">Entwurf</Badge><Badge variant="destructive">Fehler</Badge></div><p role="status" className="feedback">{feedback || 'Interaktive Referenz für Form, Kontrast und Fokus.'}</p></div>
            <form onSubmit={e => {e.preventDefault();setFeedback('Formular lokal geprüft. Keine Daten versendet.');}}><h3>Formular</h3><Label htmlFor="project-name">Projektname</Label><Input id="project-name" name="projectName" placeholder="Zum Beispiel: Kundenportal" required /><Button type="submit" variant="secondary">Eingabe prüfen</Button></form>
          </div>
          <div className="palette">{(['primary','primary-hover','foreground','muted','background'] as const).map(key => <div key={key}><div className="swatch" style={{background:colors[key]}}/><span>{key}</span><code>{colors[key]}</code></div>)}</div>
          <p className="meta">Primäraktion: {contrast(colors.primary,colors['primary-foreground']).toFixed(2)}:1 Textkontrast. Schrift: {brand.typography.family.split(',')[0]}. Radius: {brand.shape.radius}.</p>
          {brand.id === 'goldbach' && <p className="source-note">Aus DESIGN.md übernommen: Passion Red, Inter 300/700, 4 px Radius, flache Buttons. Der Hover verwendet vorläufig Red Soft für ausreichenden Textkontrast. Eine dunkle Ausprägung ist in der Vorlage nicht definiert.</p>}
        </section>
        <section id="presentations" className="section">
          <div className="section-title"><h2>02 / Management-Präsentationen</h2><span>Agenten-Vertrag v1</span></div>
          <div className="deck-preview" aria-label="Beispiel einer Titelfolie, kein exportiertes Deck"><div className="deck-head"><span>Projektübersicht</span>{brand.id === 'goldbach' && <img src="/brands/goldbach/logo.svg" width="110" height="19" alt="Goldbach" />}</div><div><p className="eyebrow">Management-Briefing</p><h3>Entscheidungen auf<br/>belastbarer Grundlage</h3><p>Nutzen, Projektstand und nächste Schritte</p></div><div className="deck-footer"><span>Layoutbeispiel / ohne Projektdaten</span><span>01</span></div></div>
          <h3 className="prompt-title">Ein Auftrag an deinen Agenten</h3><pre className="prompt">{prompt}</pre>
          <div className="actions"><Button variant="secondary" onClick={async () => {try {await navigator.clipboard.writeText(prompt);setFeedback('Prompt kopiert.');} catch {setFeedback('Kopieren nicht verfügbar. Du kannst den Prompt direkt markieren.');}}}>Prompt kopieren</Button><a className="text-link" href="/llms.txt">Agenten-Einstieg lesen</a></div>
          <p className="meta">Diese Basis stellt Regeln und Design-Tokens bereit. Der ausführende Agent benötigt Repository-Zugriff und einen Präsentationsrenderer. Eine automatische Deck-Erzeugung ist noch nicht implementiert.</p>
        </section>
        <section id="contract" className="section">
          <div className="section-title"><h2>03 / Brand-Vertrag</h2><span>Weitere Brands ohne Core-Fork</span></div>
          <Card><CardContent><dl className="contract"><div><dt>Identität</dt><dd>Name, Version, Quellen und Freigabestatus</dd></div><div><dt>Gestaltung</dt><dd>Semantische Farben, Schrift, Gewichtung, Form und Zustände</dd></div><div><dt>Präsentation</dt><dd>16:9, Rollen für Titel, Inhalt und Quellen. Echte Templates haben Vorrang.</dd></div><div><dt>Erweiterung</dt><dd>Brand-Paket ergänzen und gegen den Vertrag prüfen. Core-Komponenten bleiben gemeinsam.</dd></div></dl></CardContent></Card>
          <p className="meta">Goldbach: erster Adapter im Entwurfsstatus. Sygnum: folgt nach Eingang der Vorgaben.</p>
        </section>
        <footer>Design Framework / White-Label-Basis <span>design.rapold.io · Zieladresse</span></footer>
      </main>
    </div>
  </BrandProvider>;
}
