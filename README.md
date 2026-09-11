# Design Framework

White-Label-Auszug aus Atlas. Ein neutraler Designstandard mit austauschbaren Brand-Vorgaben für Interfaces und Management-Präsentationen.

**Stand:** 0.1.0, Quellstand für `marcelrapold/design`. Das Repository ist öffentlich. Die Herkunftslizenz bleibt unter `LICENSE` erhalten; eine freie Neulizenzierung ist damit nicht verbunden. Die Domains sind noch nicht verbunden.

## Verbindliche Referenz

[atlas.zvv.dev](https://atlas.zvv.dev) ist die ultimative Referenz für das Designsystem und den Aufbau der Website. Struktur und Verhalten folgen Atlas; die jeweilige Brand liefert ihre CI. Der aktuelle Showcase ist ein minimaler erster Schnitt, keine bereits abgenommene vollständige Atlas-Parität. Details: [Atlas-Referenz](docs/atlas-reference.md).

## Zielauftrag

> Analysiere das Repository owner/repo. Erstelle aus dem Projekt eine Management-Präsentation mit design.rapold.io im Goldbach-CI.

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
| `packages/core/src` | Button, Card, Input, Label, Badge und BrandProvider |
| `packages/brands/src` | Validierter Brand-Vertrag, neutrale Basis, Goldbach-Adapter, Präsentationsadapter |
| `apps/docs` | Kleine Next.js-Referenz-App, statisch exportierbar |
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
