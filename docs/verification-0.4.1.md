# Abnahme 0.4.1 · 11.09.2026

## Geprüft

- Goldbach-Original und weisse/schwarze Varianten laden im Browser; SVG-Pfade und ViewBox stimmen mit dem Original überein. Vier dokumentierte Farbkonstellationen sichtbar.
- Brand-Direktlink, Desktop-Logo und die Markenansicht geprüft.
- Sechs Mermaid-Renderflächen (fünf Beispiele plus Editor) rendern ohne Anwendungsfehler. Helle und dunkle neutrale Darstellung sowie Goldbach geprüft.
- Lange Labels umbrechen; Vollbild öffnet, Escape schliesst und setzt den Fokus zum Auslöser zurück.
- Syntaxfehler erscheinen am Editor. Nach der Korrektur ist die Vorschau wieder verfügbar.
- Timeline-Achsen nutzen nachweislich die Brand-Linienfarbe; Ereignisse haben keinen aufhellenden Filter. Der klassische Look verhindert Neo-Schatten.
- Tabellen: Suche findet DS-042 über den vollständigen Datensatz und setzt die Seite auf 1 zurück. Leere Suche zeigt Rücksetz-Aktion. Abdeckung sortiert numerisch mit 100 % zuerst. 24-Zeilen-Auswahl zeigt 24 Zeilen.
- Desktop-Tabellen in Hell und Dunkel visuell geprüft.
- Mobile Ansichten bei 320 und 390 px geprüft: Dokumentbreite bleibt im Viewport, breite Tabellen scrollen im eigenen Rahmen.

## Grenzen

Der geschützte Atlas-Showcase war nicht direkt zugänglich. Der Vergleich verwendet den in docs/atlas-reference.md genannten Quellcommit und die konkreten Mermaid-/Tables-Seiten daraus.

Der SVG-Download wurde im Browser angeklickt; der Browseradapter meldete innerhalb von 10 Sekunden kein Download-Ereignis. Der erfolgreiche Dateitransfer ist damit nicht bestätigt. Die gerenderte SVG und ihre eingebetteten Brand-Stile sind im DOM geprüft; die statischen Logo-Dateien laden korrekt.

Die lokale Prüfung ersetzt nicht den anschliessenden GitHub-/Vercel-Build. Beide müssen für den veröffentlichten Commit erfolgreich sein.
