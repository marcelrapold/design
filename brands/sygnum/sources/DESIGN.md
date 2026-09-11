# Sygnum · Design-Rekonstruktion

Recherche: 11.09.2026. Evidenzstatus: öffentlich belegte Elemente plus dokumentierte Framework-Ableitungen. Kein offizielles CI-Manual.

## 1. Markenverständnis

Quelle: offizieller Webauftritt und Unternehmensprofil, siehe sources.json (`web`, `about`). Sygnum verbindet institutionelle Finanzdienstleistungen mit digitalem Finanzwesen. Vertrauen, fachliche Kompetenz und persönliche Betreuung prägen die Ansprache. Die Swiss-Singapore-Heritage ist Teil der eigenen Positionierung. Das Design soll deshalb nicht wie eine beliebige Trading-App wirken.

**Ableitung:** ruhige Hierarchie, präzise Daten, klar erkennbare Verantwortlichkeit. Modernität entsteht durch Reduktion und Struktur; nicht durch permanente Bewegung, leuchtende Bedienelemente oder dekorative Tokensymbole.

## 2. Messbare Farbquellen

Quelle: `outlook-2025`, gemessen aus PDF-Vektorbefehlen und Textspans; Prüfsumme in observations.json. Nicht aus komprimierten Screenshots geschätzt. RGB-Werte entsprechen dem untersuchten PDF und sind keine behaupteten offiziellen Pantone-/CMYK-Spezifikationen.

| Adaptername | Gemessener RGB-Wert | Verwendung im Adapter |
|---|---|---|
| Coral | #F04E69 | Markenakzent, dünne Regeln, grössere Hervorhebungen |
| Ink | #4C495F | Primärer Text und institutionelle Flächen |
| Slate | #6E6D7F | Sekundärer Text, beschriftete Vergleichsserien |
| Lavender | #C3C2D1 | Nicht-textliche Vergleichsflächen |
| Mist | #E6E7E8 | Zurückhaltende Flächen und Trennungen |
| Frost | #CCDDE7 | Ergänzende grafische Fläche |
| Lilac | #C7B2D6 | Ergänzende grafische Fläche |
| Rose | #F8ABAD | Ergänzende grafische Fläche |
| Magenta | #ED1968 | Im PDF vorhanden; kein universeller UI-Primärton |

Die Farbnamen sind lokal vergebene Rollenbezeichnungen. Ein Vorkommen im PDF macht eine Farbe nicht automatisch zur freigegebenen universellen Brand-Farbe. Das Logo bleibt ein eigenes Originalasset und wird nicht auf diese Palette umgefärbt.

## 3. Kontrast statt schematischer Übernahme

Original-Coral/Weiss: ca. 3,50:1. Nicht für normalen kleinen Text geeignet. Der Adapter verwendet `#C32D4F` für Primary/Links (Weisskontrast ca. 5,51:1) und `#A52642` für Hover (ca. 7,10:1). Beide Werte sind **eigene Ableitungen**, keine extrahierten Originalwerte.

Text `#4C495F`, sekundärer Text `#6E6D7F`, Weissflächen und sehr helle Tönung `#F5F4F8`. Input-/Fokuskontrast mindestens 3:1. Erfolgs-, Warn- und Fehlerfarben sind eigenständige semantische Framework-Farben. Farbe niemals als einziges Unterscheidungsmerkmal einsetzen. Dekorative Tönungen sind keine geeigneten Linienfarben für relevante dünne Charts ohne zusätzlichen Kontrastnachweis.

## 4. Typografie

Im PDF eingebettete Familien: **Neusa Next Std** (Light, Regular, Medium) und **Benton Sans** (Light, Book, Medium, Bold). Die Namen sind aus den Fontmetadaten belegt. Fontdateien wurden nicht extrahiert.

**Adapterrollen:** Display/Titel: Neusa Next Std Light, Gewicht 300. Fliesstext: Benton Sans Light, Gewicht 300; funktionale Beschriftungen bei Bedarf 400/500. Keine automatische Fettsetzung aller Headline-Rollen. Originalfamilien nur verwenden, wenn Lizenz und korrekter lokaler Familienname vorhanden sind. UI-Fallback: Inter/Arial. Kein synthetisches Verzerren oder horizontales Stauchen einer Ersatzschrift.

Web-Basisschrift 16 px, Zeilenhöhe 1,65. Headline 36–52 px, Zeilenhöhe 1,15–1,25. Kleine Datenbeschriftungen benötigen erhöhte Sorgfalt. Diese Grössen sind **Framework-Ableitungen**, keine aus Printgrössen umgerechneten Web-CI-Vorgaben.

## 5. Layout und Komponenten

**Beobachtetes Printmuster:** leichte Überschriften, dünne Trennungen, klar strukturierte Inhaltsseiten und grosszügige Aussenränder; Research-Seiten verwenden teilweise zwei Spalten. Institutionelle Inhaltsseiten sind deutlich ruhiger als die Cover.

**Umsetzung:** Atlas-Shell unverändert. 12-Spalten-Raster, 4-px-Abstandsgrundlage, zurückhaltende 4-px-Radien, keine dekorativen Schatten. Karten grenzen Inhalte ab, nicht jede Zeile. Tabellen erhalten ruhige Header, rechtsbündige Zahlen, Einheiten und Quellen. Fehlende Werte mit Gedankenstrich und Erklärung, nicht als null.

Buttons: Hauptaktion dunkler Coral-Ton, Hover nochmals dunkler, sichtbarer Fokus, mindestens 44 px Höhe. Sekundäre Aktionen bleiben neutral. Geldbeträge, Zeitraum und Kontostatus nicht in dekorativen Farben verstecken. Lade-, Leer-, Fehler- und Erfolgszustände müssen lesbar sein. Icons: neutraler Lucide-Satz aus dem Framework, **kein behaupteter offizieller Sygnum-Iconfont**.

## 6. Diagramme und Präsentationen

18 Atlas-Rezepte und fünf Deck-Presets. Kein Originalmaster vorhanden. Kernaussage vor Datenfläche, Quellenzeile und klare Seitenzählung. Grafikfarben werden aus semantischen Rollen generiert. Vergleichsreihen bleiben ruhig; Risiko wird ausdrücklich benannt. Tabellen, Balken und Linien sollen editierbar bleiben.

Für Management-Folien sparsame Farbanteile und keine dekorativen Kurskerzen. Research-Cover dürfen eigenständige Motive besitzen, siehe IMAGERY.md. Ein Motiv ist kein Nachweis einer positiven Anlagewirkung.

## 7. Tonalität und Werte

Die offizielle Karriereseite benennt die Werte **Seek & seize opportunities**, **Yes to integrity & humility**, **Grow & win together**, **Nose for value** (`values`).

**Ableitung:** Chancen erkennen; mit Integrität und ohne Überheblichkeit erklären; Zusammenarbeit und Kundennutzen sichtbar machen. Keine Renditeversprechen, unbelegten Superlative oder automatisch übernommenen FINMA-Produktfreigaben. Claims und Zahlen benötigen eigene aktuelle Quellen; Branding ersetzt keine fachliche Prüfung.

## 8. Abnahme

Originalfarben und Ableitungen dürfen nicht vermischt werden. Keine CSS-/Fontbeobachtungen aus dem Live-Auftritt behaupten: der direkte Abruf war geschützt. Aktuelle Quelle vor externer Publikation erneut prüfen. Technische Tests, Browser-QA, Font-Fidelity und Rechtefreigabe sind getrennte Nachweise.
