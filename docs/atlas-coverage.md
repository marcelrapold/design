# Atlas-Abgleich

Referenz: zvvch/zvv-atlas, Commit 1c75c95417cc371040e1e24a0986213314b53c13. Folgeauftrag: mindestens gleicher Umfang im wiederverwendbaren Framework; ursprüngliche Minimalreduktion aufgehoben. Stand: Framework 0.3.0.

| Bereich | Implementiert | Noch offen |
|---|---|---|
| UI-Exports | 19/19 Module aus packages/atlas/src/ui, einschliesslich markenfähiger Portale | Browser-Abnahme aller Zustände |
| Farbrollen | Alle neutralen Atlas-Rollen, Light/Dark, Brand-Overrides, JSON/CSS/DTCG | Visuelle Gegenprüfung mit Atlas |
| Foundation | Abstände, Typografie, Radius, Borders, Opacity, Motion, Breakpoints, Shell, z-index, Icongrössen | Neutrale Ergänzungen sind Defaults, keine gelieferten CI-Vorgaben |
| Shell | 35 Referenzseiten, Gruppen, Cmd-K-Suche, Breadcrumbs, Rail, persistente Auswahl, mobile Navigation | Browser-Abnahme auf Desktop und Mobilgeräten |
| Icons | Alle 1'834 Lucide-Icons der installierten Version, React-Import, Suchkatalog, SVG, ISC-Lizenz | ZVV-Zeichen bewusst ausgeschlossen |
| Inhaltslogik | Atlas-Abschnitte 1–7 neutral übertragen; vollständige lesbare Seite und Agenten-Vertrag | Weitere Projektanlässe und CI-Abnahme |
| Folienkatalog | 18 Rezepte, fünf Presets, 13 Schriftrollen; 14 komplexe Inhaltsmuster aus muster_bausteine.py in gemeinsame Szenen übertragen | Fotos und dekorative Brand-Motive fehlen in strukturellen Folien |
| Deck-Exports | 12 editierbare PPTX mit zugehörigen PDFs, 36 echte Folienbilder, Datenadapter für 18 Rezepte und Quellenmanifest | Import bereitgestellter Corporate-Master |
| Deck-Inhaltsprüfung | JSON-Schema, eigenständiger JS-Validator; Agenda, Quellenreihenfolge je Quelle, Evidenzreferenzen, Vergleiche, Behauptungstyp, Alarmgrenze, Sektionsabschluss | Prüfung aller realen Aussagen und visuelle Abnahme bleiben Aufgabe des ausführenden Agenten |
| Daten-Showcases | TanStack-Tabelle mit 250 Beispielzeilen, Filter, Sortierung, Pagination; Recharts-Balken, Linien, Flächen und zugängliche Wertetabelle | ECharts und weitere spezialisierte Atlas-Visualisierungen |
| Mermaid | Lokales Rendern, Brand-Wechsel, Fehlerzustand, SVG-Export | Browser-Abnahme der Interaktionen |
| Zustände | Toasts, Empty States, Skeletons, Lightbox und lokale Formularvalidierung | Browser-Abnahme mit Tastatur |
| Abläufe | Login-, Auth-Flow- und HTML-Mail-Muster; kein angebundener Dienst | Integrationsrezepte und End-to-End-Beispiele |
| Prompt-Compiler | Deterministischer Agenten-Auftrag aus Ziel, Brand und Ausgabeformat | Formatabhängige vertiefte Regeln; kein gehosteter Generator |
| Organigramm | Lokaler Editor mit Einrückung und JSON-Export | Grafischer Editor, SVG-Export und Atlas-Funktionstiefe |
| Motion | Dauer/Easing-Tokens, wiederholbare CSS-Beispiele, Reduced Motion | Weitergehende neutrale Animationen; Corporate-Lotties ausgeschlossen |
| Techstack/Engineering | Stack, Architektur- und Prüfregeln dokumentiert | Vollständige Tiefe der ursprünglichen Atlas-Standards und Integrationsbeispiele |
| Firmenassets | Goldbach-Quellen und Original-SVG getrennt; Farb- und Formrollen parametrisiert | Sygnum-Quellen, echte Bildmotive und Corporate-Master fehlen |

Kein 100-%-Label: Anzahl übernommener Module, inhaltliche Abdeckung, Laufzeitfunktion und visuelle Parität sind verschiedene Prüfdimensionen.

Die Galerie zeigt 36 echte, versionierte PPTX-Renderings über LibreOffice/PDF. Ein Build-Gate prüft die Referenzdateien gegen die kanonischen Quellen. Ein achtseitiges Projektdeck aus versionierten Repository-Inhalten wurde mit PPTX, PDF und Quellenmanifest ausgeführt. Zahlenbeschriftungen nativer Diagramme werden wie bei Atlas explizit gesetzt, damit das Dezimalkomma unabhängig von Office-Spracheinstellungen bleibt. Nach Datenänderungen die Labels neu erzeugen.

Die Präsentationsseite übernimmt zusätzlich den erklärenden Einstieg, den Erzeugungsablauf, Farb- und Typorollen, gruppierte Galerie, Detailanleitung neben der Folie, fünf Preset-Filmstreifen, Downloads je Preset sowie die sechs Grundregeln. Die direkte visuelle Browser-Gegenprüfung mit der geschützten Atlas-Seite bleibt offen.
