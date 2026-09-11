# Sygnum · Brand-Adapter 0.2.0

Stand: 11.09.2026. Status: **draft**. Öffentlich recherchierte Rekonstruktion, keine offizielle Sygnum-Freigabe und kein lizenziertes CI-Manual.

## Verbindliche Reihenfolge

Expliziter Auftrag und freigegebene Originalvorlagen vor diesem Adapter. Die Atlas-Struktur bleibt gemeinsamer Framework-Vertrag. Sygnum-Regeln gelten ausschliesslich für `brand: sygnum`. Weder Default noch andere Firmen-Presets übernehmen diese Inhalte.

`packages/brands/src/sygnum.json` ist die kanonische technische Quelle. `sources/DESIGN.md` trennt Beobachtung und Umsetzung. `sources/IMAGERY.md` beschreibt die beobachtete Bildwelt. `sources/GENAI.md` definiert die daraus abgeleitete GenAI-Bildsprache. `sources/sources.json` dokumentiert jeden Abrufstatus. `sources/observations.json` enthält extrahierte Metadaten und Prüfsummen.

## Was belegt ist

Der offizielle Crypto Market Outlook 2025 enthält Neusa Next Std und Benton Sans sowie eine Coral-/Violettgrau-Palette. Das separat veröffentlichte Presse-Logo liegt als Rasteroriginal vor. Website und Unternehmensprofil belegen die institutionelle Ansprache, Vertrauen und die Verbindung von Finanztradition und digitaler Zukunft. Diese Quellen sind kein vollständiger aktueller Web-Styleguide.

## Was dieser Adapter festlegt

Helle Darstellung als Basis; dunkle Editorial-/Hero-Flächen sind als Präsentations- und GenAI-Erweiterung zulässig, nicht als behaupteter offizieller Sygnum-Dark-Mode. Semantische UI-Farben mit messbaren Kontrasten. Originalpalette separat unter `palette`, CSS `--brand-color-*` und DTCG `palette`. Original-Coral ist kein kleiner weisser Buttontext. Interaktive Hauptfarbe `#C32D4F`, Hover `#A52642`: dokumentierte, nicht freigegebene Kontrastableitungen. Statusfarben, 4-px-Radius, 44-px-Zielhöhe und 16:9-Atlas-Raster sind Framework-Entscheidungen, keine offiziellen CI-Angaben.

## Typografie und Rechte

Fontnamen werden referenziert, **keine Fontdateien ausgeliefert oder eingebettet**. Ohne passende lokal lizenzierte Schriften verwendet die Website Inter/Arial; PPTX/PDF nutzen die vorhandene Ersatzschrift des jeweiligen Systems. Die Vorschauen belegen Layout und editierbaren Export, nicht originalgetreue Typografie. Originalschriften in der Zielumgebung lizenzieren, Familiennamen prüfen und dann erneut rendern.

Das Logo stammt aus einer Sygnum-Presseveröffentlichung. JPEG wurde ohne Neuzeichnung in PNG verpackt; 400 × 108 px und ursprünglicher Weissraum bleiben erhalten. Nicht auf einen erfundenen SVG-Master hochstufen, nicht neu einfärben. Rasterauflösung bei Druck beachten. Marken-, Bild- und Fontrechte werden nicht durch eine Code-Lizenz übertragen. Vor externer Nutzung sind Berechtigung und finaler CI-Abgleich zu klären.

## Präsentationssprache 0.2

Sygnum-Decks dürfen stärker editorial inszeniert werden als der UI-Layer: grosszügige Weissräume wechseln mit tiefen Ink-/Navy-Flächen; Coral dient als präziser Signalton. Architektur, Ökosysteme, Security Boundaries, Prozesse und Roadmaps bevorzugen native Vektorgrafik, Mermaid und Lucide-Icons statt Textbox-Serien. Tabellen bleiben für echte Vergleiche reserviert.

Für 12-seitige Strategie-Decks gilt als Richtwert: **2–4 Diagramm-/Systemfolien, 1–2 Vergleichs-/Entscheidungsfolien, 1 Roadmap, maximal 3 GenAI-Keyvisuals**. Das echte Sygnum-Logo wird separat platziert und nie durch GenAI erzeugt. `sources/GENAI.md` ist der verbindliche Prompt- und Qualitätsvertrag für generierte Bildinhalte.

## Management-Präsentationen

Den gemeinsamen Management-Vertrag mit `brand: sygnum` verwenden. Standard bleibt acht Folien; explizite Aufträge können Umfang und Dramaturgie überschreiben. de-CH, 16:9, PPTX, PDF, deck.json und Quellenmanifest. Jede Folie hat eine klare Aussage, Quellen und gegebenenfalls Risiken. Keine Anlageempfehlung oder regulatorische Produktfreigabe durch Gestaltung suggerieren. Beispielzahlen immer als illustrative Daten markieren. Erstellt wird ein Framework-Deck, kein behaupteter Original-Folienmaster der Bank.

## Offene Abnahme

Aktueller vollständiger CI-Guide, SVG-Master, Original-PowerPoint-Master, freigegebene Web-Fontkonfiguration und Schriftlizenzen fehlen. Alle fünf Punkte bleiben offen, auch nach bestandenen technischen Tests.
