# Sygnum · High-Impact Presentation Language

Status: draft / framework-derived. Ergänzt den Brand-Adapter 0.2.0.

## Grundsatz

Sygnum-Präsentationen sollen **institutionelle Präzision mit editorialer Spannung** verbinden. Nicht jede Folie ist weiss und nicht jede Aussage wird in Cards zerlegt. Ein 12-seitiges Strategie-Deck braucht Rhythmus: Kontext, These, System, Beweis, Architektur, Risiko, Umsetzung, Entscheidung.

## Rhythmus für 12 Slides

1. **Hero Cover** — echtes Logo + ein GenAI-Keyvisual + klare These.
2. **Macro Context** — Layer-/Ökosystemdiagramm; warum das Thema jetzt relevant ist.
3. **Strategic Rationale** — 4–5 ikonische Gründe, eine dominante Aussage.
4. **Client / Business Context** — Use Cases nach Kundensegmenten oder Wertströmen.
5. **Decision Frame** — Build / Buy / Partner als echter Vergleich mit Empfehlung.
6. **Target Architecture** — Mermaid-/Systemdiagramm, Integration in Sygnum-Ökosystem.
7. **Technical Deep Dive** — dunkle Architekturfolie mit Trust Boundaries und Operations.
8. **Security / Resilience** — Keyvisual + Security Controls; maximal ein Bild.
9. **Hosting / Infrastructure** — Standort, HA, Netzwerk, Monitoring; optional Schweiz-Keyvisual.
10. **Team / Operating Model** — Rollen, Ownership, FTE, Build-up.
11. **Roadmap / Decision Gate** — Phasen, Deliverables, Exit Criteria, Budget-/Ressourcenrahmen.
12. **Decision / Closing** — konkreter Beschluss + optional drittes Keyvisual.

Die Reihenfolge ist ein empfohlenes Muster, kein starres Template. Inhalte entscheiden.

## Diagramme

Mindestens 2, ideal 3–4 systemische Visualisierungen pro 12 Slides. Mermaid oder native Vektoren für:

- Ecosystem / Layer Stack
- Target Architecture
- Security / Trust Boundaries
- Operational Flow / Incident Path
- Roadmap, wenn Abhängigkeiten wichtiger sind als reine Zeitachsen

Diagramme müssen eine Aussage transportieren. Keine Dekorationsdiagramme.

## Icons

Lucide-Icons als semantische Kurzschrift. Pro Folie typischerweise 3–6 Icons. Einheitliche Strichstärke, Coral für aktive/strategische Elemente, Ink/Slate für neutrale Elemente. Icons ersetzen keine Labels; sie reduzieren Scan-Zeit.

## Dark Editorial Slides

Dunkle Flächen sind für **Hero, Architecture, Security und Closing** zulässig. Sie sind eine Präsentationsableitung und kein offizieller Sygnum-Dark-Mode. Hintergrund: tiefe Ink-/Navy-/Violetttöne; Text weiss/off-white; Coral sparsam. Maximal etwa 4 dunkle Slides in einem 12er-Deck, damit der Hell/Dunkel-Rhythmus wirkt.

## GenAI

`sources/GENAI.md` gilt vollständig. Maximal drei Keyvisuals. Kein generiertes Logo, keine generierten Texte. Bilder dienen als emotionale oder räumliche Verankerung; technische Information bleibt editierbare Vektorgrafik.

## Cover

Das echte Sygnum-Logo ist Pflicht. Titel maximal 3–4 Zeilen. Subline erklärt den strategischen Zweck. Autor und Datum klein unten. Keyvisual darf maximal etwa 65 % der visuellen Aufmerksamkeit beanspruchen; Text bleibt dominant lesbar.

## Entscheidungsslides

Keine neutrale Consulting-Ästhetik, wenn die Analyse eine Präferenz ergibt. Empfehlung klar markieren, Alternativen fair darstellen. Entscheidung, nächste 90 Tage, Ressourcen und Exit Criteria sichtbar machen.

## Tabellen

Nur für echte multidimensionale Vergleiche. Weniger Gitterlinien, mehr Hierarchie. Empfehlung als Spalte oder Zeile hervorheben. Keine Tabelle, wenn vier Icons und vier Aussagen schneller erfassbar sind.

## Qualitätsziel

Eine starke Sygnum-Folie soll gleichzeitig drei Tests bestehen:

1. **5-Sekunden-Test:** Hauptaussage sofort erkennbar.
2. **Board-Test:** Entscheidung, Risiko oder Implikation klar.
3. **Expert-Test:** technische Darstellung hält einer fachlichen Nachfrage stand.
