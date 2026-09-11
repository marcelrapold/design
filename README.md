# Design Framework

White-Label-Framework auf Basis von Atlas. Ein neutraler Designstandard mit austauschbaren Brand-Vorgaben für Interfaces und Management-Präsentationen.

**Stand:** 0.4.2, Quellstand für `marcelrapold/design`. Das Repository ist öffentlich. Die Herkunftslizenz bleibt unter `LICENSE` erhalten; eine freie Neulizenzierung ist damit nicht verbunden. Produktionsadresse: https://design.rapold.io. Die native Vercel-Git-Verbindung übernimmt Builds bei Pushes auf main. Der Live-Stand wird anhand von build-info.json geprüft. Details: [Deployment](docs/deployment.md).

## Verbindliche Referenz

[atlas.zvv.dev](https://atlas.zvv.dev) ist die ultimative Referenz für das Designsystem und den Aufbau der Website. Struktur und Verhalten folgen Atlas; die jeweilige Brand liefert ihre CI. Die Referenz umfasst Tokens, Icons, Komponenten, Navigation und Präsentationsmuster. Vollständige Atlas-Parität ist noch nicht abgenommen; siehe docs/atlas-coverage.md. Details: [Atlas-Referenz](docs/atlas-reference.md).

## Zielauftrag

> Analysiere das Repository owner/repo. Erstelle aus dem Projekt eine Management-Präsentation mit design.rapold.io im gewählten Theme.

Der Standard liefert Brand-Daten, Präsentationsrollen und einen vollständigen Agenten-Vertrag. Der ausführende Agent braucht Repo-Zugang und einen Renderer. Ein gehosteter Generator ist nicht Teil dieses ersten Schnitts.

## Start

Node.js 22 oder neuer:

```sh
npm ci
npm run dev
```

`npm run check` prüft die Brand-Verträge, Core-Isolation, Kontraste, TypeScript und den statischen Produktionsbuild. Die Referenz-App konsumiert direkt `@rapold/framework-core`. `npm run contracts` generiert die maschinenlesbaren Dateien unter `apps/docs/public` aus den kanonischen Quellen.

## Aufbau

| Pfad | Zweck |
|---|---|
| `packages/core/src` | Alle 19 Atlas-UI-Module und BrandProvider |
| `packages/brands/src` | Validierter Brand-Vertrag, neutrale Basis, Goldbach-Adapter, Präsentationsadapter |
| `packages/presentation/src` | Datenadapter, Inhaltsprüfung und editierbarer PPTX-Export |
| `apps/docs` | Next.js-Referenz mit 35 Seiten, statisch exportierbar |
| `brands/goldbach` | Gelieferte Vorgaben und dokumentierte Verfeinerungen |
| `docs/atlas-reference.md` | Verbindliche Atlas-Referenz für System und Website |
| `docs/brand-contract.md` | Integration und Erweiterung |
| `docs/repo-to-management.md` | Vollständiger Agenten-Auftrag für Management-Decks |
| `docs/extraction.md` | Übernommene und entfernte Bestandteile, Herkunft |
| `docs/release.md` | Repository-Übernahme und spätere Veröffentlichung |
| `scripts/build-contracts.mjs` | Erzeugt JSON- und Markdown-Endpunkte |
| `tests` | Vertrag, Kontrast und Core-Isolation |
| `llms.txt` | Einstieg für Agenten |
| `AGENTS.md` | Arbeitsregeln für dieses neue Projekt |
| `HANDOFF.md` | Stand, Abnahme und offene Schritte |

## Ausprägungen

- Neutral: vollständige helle und dunkle Basis.
- Goldbach: Adapter aus den vom Nutzer gelieferten `DESIGN.md` und `IMAGERY.md`, Version 1 vom 08.07.2026. Nur helle Darstellung. Status `draft`, da Verfeinerungen noch keine CI-Freigabe besitzen.
- Sygnum: noch keine Brand-Datei. Vorgaben stehen aus.

Firmenlogos, interne Vorgaben und lizenzierte Assets sind getrennt vom neutralen Core. Eine künftige freie Code-Lizenz erteilt keine Marken- oder Fontrechte.

## Zieladressen

Repository: [marcelrapold/design](https://github.com/marcelrapold/design).
Hauptadresse: `design.rapold.io` (jüngster Beispielauftrag).
Optionaler Alias: `framework.rapold.io` (ursprüngliche Zieladresse).

Die Domain-Auswahl steht in der Metadaten-Konfiguration und im Agenten-Einstieg. Es wurden keine DNS-Änderungen vorgenommen.

## Erweiterter Stand

- 19 UI-Module und markenfähige Portale.
- Vollständiger neutraler Lucide-Katalog mit SVG- und React-Verwendung.
- Grundlagen, semantische Rollen, CSS-, JSON- und DTCG-Exporte.
- 18 Folienrezepte, fünf Presets, vermessene Raster und 13 Typorollen.
- Editierbare Muster-Decks pro Brand. Die Vorschauen werden aus den exportierten PowerPoints über PDF nach PNG gerendert. Ein Build-Gate prüft ihre Aktualität.
- Inhaltslogik: docs/presentation-logic.md und scripts/validate-deck.mjs.

Bekannte Lücken und Abnahmestatus: docs/atlas-coverage.md.

Der Muster-Renderer erzeugt zwölf editierbare PPTX-Dateien (zwei Brands × sechs Decks). Zusätzlich verarbeitet `@rapold/framework-presentation` echte Projektinhalte mit allen 18 Rezepten. `npm run deck:export -- deck.json --out ./ergebnis --repo-dir ./projekt --pdf` erzeugt PPTX, PDF und Quellenmanifest. Vollständiger Ablauf und Eingabeschema: [Projektdecks](docs/project-decks.md).

Version 0.4 ergänzt den Atlas-Organigramm-Renderer mit Editor und Exporten, vier lokale ECharts-Beispiele, vollständige Navigationsicons, formatabhängige Prompts und den [Engineering-Vertrag](docs/engineering.md).
