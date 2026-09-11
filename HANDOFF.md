# Handover 0.3.0

## Ziel und Referenz

Vollständiges wiederverwendbares White-Label-Framework auf Atlas-Niveau. Die ursprüngliche Minimalreduktion ist aufgehoben. Atlas-Referenz: 1c75c95417cc371040e1e24a0986213314b53c13. Repository: https://github.com/marcelrapold/design. Autorisierte Produktionsadresse: https://design.rapold.io.

## Implementiert

- 19 Atlas-UI-Module, BrandProvider mit Portal-Kontext, vollständige Foundation- und semantische Rollen sowie JSON/CSS/DTCG-Exporte.
- 35 Referenzseiten mit Atlas-Navigationskonzept, Brand-Wechsel, Suche, Rail und Mobilnavigation.
- 1'834 neutrale Lucide-Icons mit React-Verwendung, Suche, SVG-Download und Herkunftslizenz.
- 18 Folienrezepte, fünf Presets, 13 Schriftrollen und vermessene Layouts. 14 komplexe Inhaltsrezepte aus Atlas nach JavaScript übertragen.
- 12 editierbare Muster-PPTX beim Build. Native Charts, explizite CH-Zahlenlabels, getrennte Tabellenzellen, Original-Goldbach-SVG. Beispieldaten sind als solche bezeichnet.
- Vollständige Inhaltslogik aus Atlas-Abschnitten 1–7, JSON-Eingabeschema und eigenständiger Validator. Quellen vor Kennzahlen, konkrete Evidenzreferenzen, Vergleiche, Schlussfolgerungen und verantwortete Sektionsabschlüsse werden geprüft.
- TanStack-Tabelle, Recharts, Mermaid mit SVG-Export, Toasts, Zustandsmuster, Lightbox, Formularvalidierung, Login-/Auth-/Mail-Muster, Prompt-Compiler und einfache Organigramm-/Motion-Beispiele.

## Prüfung

`npm run check` ist die verbindliche Release-Prüfung: Vertragstests, TypeScript, statischer Produktionsbuild, ausgelieferte CSS-Klassen, Referenzrouten, eigenständiger Validator und Struktur aller zwölf PPTX-Dateien. Native Diagramme müssen editierbare Daten und Dezimalkomma-Beschriftungen enthalten.

Repräsentative Goldbach-PPTX-Folien wurden mit einem unabhängigen PPTX-Import und PNG-Rendering geprüft. Das ist keine native PowerPoint- oder Browser-Abnahme. Keine vollständige visuelle Gegenprüfung mit dem geschützten Atlas-Showcase.

## Deployment

Upload und Produktionsdeployment sind beauftragt. Der zuletzt geprüfte Vercel-Zugang listete kein Projekt für die Domain; die CLI war nicht angemeldet und frühere Verbindungsversuche wurden durch die Umgebung blockiert. Keine weiteren Login-Schleifen oder erfundenen Erfolgsmeldungen. Ein Push bestätigt nur den Repository-Stand. Produktionsnachweis ist ein erfolgreicher Abruf von `/build-info.json` mit dem passenden Commit.

## Verbleibende Arbeit

Die verbindliche Lückenliste steht in docs/atlas-coverage.md. Priorität: Produktionsprojekt zugänglich machen und neuen Build ausliefern; Website und Interaktionen gegen Atlas prüfen; reale Projektinhalte durch den Deck-Vertrag bis zur exportierten Präsentation führen. Der Datenadapter für alle 18 Rezepte ist implementiert. Ein achtseitiges Briefing wurde gegen historische Git-Objekte geprüft und als PPTX/PDF/Quellenmanifest exportiert. Corporate-Master-Import, ECharts, grafischer Organigramm-Editor und vertiefte Engineering-/Integrationsstandards fehlen.

Goldbach bleibt ein CI-Entwurf aus den gelieferten Vorgaben. Sygnum erst nach gelieferten Quellen ergänzen. Original-LICENSE bleibt erhalten; öffentliche Quellablage und freie Neulizenzierung sind verschiedene Entscheidungen. Keine ZVV-Assets oder internen Dienste übernehmen.

## Neuer Stand 0.3

Präsentationsseite strukturell an Atlas angeglichen, inklusive 36 echten PNG-Vorschauen, 12 PDFs, Detailanleitungen und Preset-Filmstreifen. Versionierte Bilder besitzen einen Inhaltsfingerprint; veraltete Bilder lassen den Build fehlschlagen. Renderanleitung in docs/project-decks.md. Der Projektexport setzt keine Musterfakten ein und prüft Quellen, Textkapazitäten, Vergleichsperioden, Datenformat und Abschnittsreihenfolge. Neue Brands können Original-Logos und genaue Schriftschnittnamen konfigurieren.
