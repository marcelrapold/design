# Projektinhalte zu PowerPoint

Der Export verarbeitet ein geprüftes Inhaltsmodell. Die Analyse eines Repositories übernimmt ein ausführender Agent oder ein Mensch. Der Renderer ergänzt keine fehlenden Projektfakten und führt keinen Code aus dem analysierten Repository aus.

## Vollständiger Ablauf

1. Repository und Commit festhalten. Belegte Aussagen, offene Fragen und Entscheidungsbedarf formulieren.
2. Eine Brand aus der Registry wählen. CI-Status und vorhandene Assets prüfen.
3. `project-input.schema.json` als Struktur verwenden. Inhalte nach dem Vertrag in `presentation-logic.md` auf Sektionen und Folien verteilen.
4. Export ausführen. Mit `--repo-dir` prüft der Export, ob die genannten Dateipfade am angegebenen Commit existieren und gelieferte Textauszüge tatsächlich vorkommen.
5. Jede Folie rendern und die Aussage, Darstellung und Editierbarkeit prüfen. Ein syntaktisch gültiger Beleg beweist die daraus abgeleitete Aussage nicht.

```sh
npm ci
npm run deck:export -- examples/framework-review.json --out ./deck-output --repo-dir . --pdf
```

Ergebnis: `presentation.pptx`, `presentation.pdf`, `sources.json` und das verwendete `deck.json`. Für PDF muss `soffice` verfügbar sein. Ohne `--pdf` entsteht die PowerPoint samt Quellenmanifest ohne Office-Installation. `--repo-dir` erwartet einen Checkout mit den referenzierten Git-Objekten, gegebenenfalls mit vollständiger Historie. Ausgabedateien werden erst nach erfolgreichem Erzeugen aller angeforderten Formate geschrieben.

Das beigefügte Beispiel enthält acht Folien über `marcelrapold/design`, fest auf Commit `9fcf9f95dc89cf6487fe454dba031b85a3111497` bezogen. Die Vergleichsbasis ist `a30164904c435c5677876202df1f38225e4288a7`. Es behauptet keinen aktuelleren Produktionsstand.

## Inhalte pro Rezept

Alle Arbeitsfolien benötigen Titel, Sektion, Zeitraum/Quelle im Lead, Quellenobjekte und eine Einordnung. Quellenobjekte tragen `id`, `path`, vollständigen `commit` und `retrievedAt`. `label` erleichtert die Darstellung, `excerpt` erlaubt die Prüfung gegen den Quelltext. Kennzahlen benötigen `label`, `value`, `unit`, `period`, `comparison`, `comparisonPeriod` und `sourceId`. Eine andere Vergleichsquelle wird mit `comparisonSourceId` verknüpft.

| Rezept | Inhalt |
|---|---|
| cover-foto / foto-schluss | `content.image` mit relativem Pfad, Alternativtext und Urheber-/Quellenangabe; optional `subtitle` |
| agenda | `items`, wortgleich mit den Sektionstiteln |
| kapitel-trenner | Sektionstitel, wortgleich mit der Agenda |
| management-summary | 1–5 `claims`, jeweils Titel, Text und Behauptungstyp |
| karten-steckbrief | 1–3 Quellenobjekte, auf der Einführungsfolie `introducesSources: true` |
| zwei-grosskarten | Genau zwei Behauptungen |
| modul-karten-mit-chart | Drei kurze Behauptungen, 1–3 numerische Vergleichskennzahlen |
| phasen-karten-gate | Vier Phasen als Behauptungen, 1–3 Abnahmekriterien in `content.gates` |
| quellen-grid | 1–12 Quellenobjekte |
| kpi-board | 1–5 Kennzahlen, optional `content.chart: true` für den Periodenvergleich |
| kpi-timeline | 1–4 Kennzahlen und 2–7 Punkte in `content.timeline` mit Datum, Beschriftung und Status |
| textbox-tabelle | 1–6 Kennzahlen; qualitative Vergleichswerte sind zulässig |
| split-tabelle | 1–6 Kennzahlen, mit optionalem Chart höchstens vier |
| drei-schritt-beweis | Drei Behauptungen mit optionalem hervorgehobenem `value`: Meldung, Ursache, geprüfte Aussage |
| shape-balkendiagramm | 1–10 nichtnegative numerische Kennzahlen mit gemeinsamer Einheit |
| vollbild-grafik | Strukturierte Roadmap: 2–12 `content.columns`, 1–4 `content.rows` mit `label`, `start`, `span` |
| entscheid-register | `resolution` mit Text, Typ und gegebenenfalls Verantwortung/Termin; höchstens drei ergänzende Behauptungen |

Numerische Diagramme brauchen konsistente Einheiten und Vergleichsperioden. Inhalt oberhalb der Rezeptkapazität führt zu einem Fehler; er wird nicht abgeschnitten oder automatisch verkleinert. Die visuellen Grenzen sind bewusst konservativ. Eine Abnahme gerenderter Folien bleibt erforderlich.

## Assets und neue Brands

`assets.logo` im Brand-Vertrag liefert Pfad, Seitenverhältnis, Hintergrund und Schutzraumanteil. Die Datei liegt im öffentlichen Asset-Verzeichnis. `typography.bodyFamily` und `headingFamily` können für PowerPoint die exakten Schriftschnittnamen nennen. Die exakten Schriftschnitte und Original-Assets werden ausschliesslich aus der aktiven Brand gelesen.

Projektbilder werden relativ zur Inhaltsdatei aufgelöst. Pfade und symbolische Verknüpfungen dürfen dieses Verzeichnis nicht verlassen. Es gibt keine automatischen Netzwerkabrufe. Ein fotografisches Rezept ohne Bild schlägt fehl. Originale Corporate-Master haben weiterhin Vorrang; der Adapter importiert sie noch nicht.

## Referenzgalerie reproduzieren

Die Galerie zeigt echte PNG-Renderings der Muster-PowerPoints. Der Build prüft einen Inhaltsfingerprint und die Prüfsummen aller 48 Referenzdateien. Nach einer Änderung an Tokens, Brand, Rezepten oder Renderer müssen die Bilder und PDFs erneuert und mit dem Quellstand committed werden.

Voraussetzungen: LibreOffice, Poppler (`pdftoppm`), Fontconfig, Python und FontTools für die mitgelieferten Inter-Webfonts. Die Font-Konvertierung betrifft ausschliesslich das lokale Rendern und bewahrt die OFL-Lizenz.

```sh
python scripts/prepare-render-fonts.py
fc-cache -f
npm run deck:reference
npm run check
```

Der normale Website-Build benötigt kein LibreOffice: Er verwendet die versionierten, auf Aktualität geprüften Referenzdateien. Die erzeugten PPTX bleiben editierbar. Explizite Chartlabels erhalten das Dezimalkomma unabhängig von Office-Spracheinstellungen; nach Datenänderungen das Deck neu erzeugen.
