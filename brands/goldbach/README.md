# Goldbach-Adapter

Quelle: vom Nutzer geliefertes ZIP mit `DESIGN.md` und `IMAGERY.md`. Beide Dateien bleiben unverändert erhalten. Stand laut Dateikopf: Version 1, 08.07.2026. Keine zusätzliche Freigabe oder Vollständigkeit unterstellen.

## Direkt übernommen

Passion Red `#b61f34`, Weiss, Schwarz, Graustufen aus DESIGN.md. Inter Light 300 / Bold 700. Buttons flach, Radius 4 px. Logo als exakt extrahiertes SVG aus DESIGN.md. Keine nachgebaute Wortmarke. Die Referenz-App lädt Inter lokal über das Fontsource-Paket.

## Dokumentierte Verfeinerungen

| Punkt | Quelle | Adapter | Status |
|---|---|---|---|
| Primärer Hover | Pink `#ef1957` mit Weiss | Red Soft `#8d1926` mit Weiss | Entwurf: Pink/Weiss unterschreitet 4.5:1 für normalen Text |
| Button-Mindesthöhe | mindestens 39 px | mindestens 44 px | Framework-Bedienbarkeitsdefault, erfüllt das Quellenminimum |
| Schriftgewichte | Hauptkapitel 300/700, Anhang nennt auch Black | 300/700 | Hauptkapitel als präzisere Quelle |
| Fehlerzustand | nicht automatisch Passion Red | neutrales Core-Fehlerpaar | nicht als freigegebene Goldbach-Zustandsfarbe darstellen |
| Eingabekontur/Fokus | keine vollständige Tokenspezifikation | Graustufen, keine roten dekorativen Ränder | funktionale Ergänzung |
| Deck-Masse und Schriftgrössen | keine Folienmaster im Paket | Framework-Defaults | durch spätere Originalfolien ersetzen |

## Fehlende Quellen

`bilder/icons.json` ist nicht im ZIP. Keine Ersatzicons verwenden. Originalfolien/POTX fehlen ebenfalls. Keine dunkle CI-Ausprägung vorhanden. Die Bildvorgaben sind dokumentiert, der erste funktionale Showcase braucht keine Fotos.

Das SVG hat 282.8 × 47.7 Einheiten; die H-Höhe beträgt gemäss Pfad etwa 45.9 Einheiten. Der Showcase reserviert mindestens die skalierte H-Höhe als Schutzraum. Ein Deck-Renderer muss das unabhängig prüfen.

## Rechte

Marke, SVG und gelieferte Vorgaben werden nicht durch eine künftige Core-Lizenz freigegeben. Der Benutzer hat die Übernahme des vollständigen vorbereiteten Pakets nach `marcelrapold/design` ausdrücklich beauftragt. Daraus folgt keine freie Lizenz für Marke oder Assets. Das Fontsource-Paket enthält die separate Inter-Lizenz.

## Sichtbare Assets

`/brand?brand=goldbach` zeigt das Original-SVG und die in DESIGN.md ausdrücklich
beschriebenen Varianten Weiss und Schwarz. Bei den Varianten wird ausschliesslich
die Pfadfüllung geändert. Die Navigation und die Präsentationsdownloads verwenden
das rote Original mit Schutzraum; eine eingeklappte Rail zeigt das Framework-Symbol,
da die Logo-Mindestbreite dort nicht eingehalten werden kann.
