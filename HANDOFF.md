# Handover 0.1.0

## Erledigt

- Atlas-Quellstruktur und ausgewählte ausführbare Komponenten geprüft. Quelle und Commit stehen in `docs/extraction.md`.
- Fünf UI-Primitiven extrahiert. Feste ZVV-Farben und Textfarben in Buttons/Badges ersetzt. Keine ZVV-Assets, Hausschriften, PINs, Infrastruktur oder Historie übernommen.
- Firmenneutraler Core, validierte Brand-Konfiguration, neutrale helle/dunkle Basis und kleiner Showcase.
- Goldbach aus dem gelieferten ZIP integriert. Inter lokal eingebunden. Original-SVG übernommen. Dokumentierte Hover-Korrektur: 4.25:1 zu 9.13:1. Fehlende Icons und Folienmaster ausdrücklich festgehalten.
- Agenten-Einstieg und Vertrag «Repository zu Management-Präsentation» inklusive Quellenmanifest, Ausgabeformaten und QA-Anforderungen.
- Web-/Präsentationsrollen aus derselben Brand-Datei. Generierte statische JSON-/Markdown-Endpunkte.
- Quellstand für das vom Benutzer angelegte Repository `marcelrapold/design` vorbereitet, kein Upstream-Fork.
- `atlas.zvv.dev` als verbindliche Referenz für Designsystem UND Website in AGENTS.md, README, Brand-Vertrag und Agenten-Einstieg verankert.

## Verifikation

`npm run check` vollständig bestanden:

- 6 Tests: Farbkontraste aller unterstützten Modi, Schema-/Injektionsprüfung, Erweiterbarkeit/Fallback, UI-/Präsentationskonsistenz, Core-Isolation, dokumentierter Goldbach-Konflikt.
- TypeScript ohne Fehler.
- Next.js-Produktionsbuild und statischer Export erfolgreich.
- Ausgelieferte Core-CSS-Klassen und maschinenlesbare Endpunkte vorhanden.

Keine visuelle Browser-Abnahme des neuen Showcase. Die Quellseite war unter `atlas.zvv.dev` bis zum PIN-Gate erreichbar, ihre geschützten Ansichten wurden nicht im Browser geprüft. Automatisierte Checks sind keine CI-Freigabe. Vollständige visuelle Atlas-Parität steht noch aus.

## Noch nicht erledigt

1. Rechte am extrahierten Code für einen Open-Source-Release festhalten. Original-LICENSE erhalten, Pakete bleiben privat/UNLICENSED. Goldbach-Vorgaben und Assets gesondert behandeln.
2. Ziel-Domain `design.rapold.io` einrichten. `framework.rapold.io` ist als optionaler Alias dokumentiert. Keine DNS-Änderung und kein Deployment ausgeführt.
3. Showcase visuell und mit Tastatur prüfen, bevor er veröffentlicht wird.
4. Goldbach-Folienmaster und `bilder/icons.json` ergänzen, Verfeinerungen mit dem Brand-Verantwortlichen abgleichen. Sygnum erst nach gelieferten Vorgaben ergänzen.

## Nächster funktionaler Ausbau

Der Benutzer möchte den Auftrag «Check Repo xy, erstelle eine Management-Präsentation mit design.rapold.io im Goldbach-CI». Der Agenten-Vertrag ist implementiert, ein PPTX-/PDF-Renderer und eine echte Repository-zu-Deck-Ausführung noch nicht. Dafür keinen Chat-/Dashboard-Overhead bauen: zuerst den Auftrag mit einem konkreten autorisierten Repository und Renderer durchführen, Quellenmanifest und exportierte Dateien prüfen, dann den wiederverwendbaren Adapter extrahieren.

## Archiv verwenden

Das ZIP enthält `framework/` mit den Quellen und `framework.bundle` mit der lokalen Git-Historie. Für einen vollständigen Checkout:

```sh
git clone framework.bundle framework-checkout
cd framework-checkout
npm ci
npm run check
```

Alternativ direkt mit dem Quellordner arbeiten. Der aktuelle Quellstand liegt im Zielrepository `marcelrapold/design`; `docs/release.md` beschreibt Betrieb und Lizenzstatus. Keine Zugangsdaten sind im Bundle enthalten.
