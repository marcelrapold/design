# Atlas ist die verbindliche Referenz

Vom Benutzer ausdrücklich festgelegt: **https://atlas.zvv.dev ist die ultimative Referenz, auch für die Website selbst.** Das zugehörige Quellrepository ist https://github.com/zvvch/zvv-atlas.

## Was sich an Atlas orientiert

- Informationsarchitektur, Seitenaufbau, Navigation und Dokumentationsführung.
- Aufbau von Showcase, Komponentenreferenz und ausführbaren Beispielen.
- Zusammenspiel von Spezifikation, Quellcode, Agenten-Einstieg und maschinenlesbaren Fassungen.
- Komponentenverhalten, Zustände, Bedienbarkeit und Qualitätsanforderungen.
- Präsentationsmuster und Layoutlogik, soweit sie zum Auftrag und zur jeweiligen Firmenvorlage passen.

## Was über die Brand ausgetauscht wird

Farben, Schriften, Logos, Icons, Bildwelt, Tonalität und ausdrücklich definierte Formregeln stammen aus dem gewählten Brand-Paket. Goldbach-Vorgaben gelten für Goldbach, spätere Sygnum-Vorgaben für Sygnum. Atlas bleibt die Referenz für das gemeinsame System und die Seite. ZVV-Assets oder interne Dienste gehören nicht in den neutralen Core.

## Vorgehen bei Änderungen

1. Die entsprechende Seite auf `atlas.zvv.dev` und ihren ausführbaren Quellcode prüfen. Bei geschütztem oder nicht zugänglichem Showcase den vorhandenen Repository-Zugriff verwenden und die fehlende visuelle Prüfung offen nennen.
2. Den betrachteten Commit beziehungsweise Seitenstand festhalten. Keine veraltete lokale Kopie als aktuellen Atlas-Stand ausgeben.
3. Das relevante Muster als neutrale Struktur übernehmen und durch semantische Brand-Rollen parametrisieren. Keine neue Seitenarchitektur allein aus persönlicher Designpräferenz erfinden.
4. Jede bewusste Abweichung mit Quelle, Grund und Status dokumentieren. Die im ersten Schnitt gewünschte Reduktion des Umfangs ist erlaubt und wird nicht als vollständige Atlas-Parität ausgegeben.
5. Bei beauftragter visueller Abnahme Atlas und die White-Label-Seite anhand der gleichen Nutzungssituation vergleichen. Ein erfolgreicher Build beweist keine visuelle Übereinstimmung.

## Ausgangsstand dieses Repositorys

Die Extraktion basiert auf Atlas-Commit `1c75c95417cc371040e1e24a0986213314b53c13`. Fünf Komponenten wurden übernommen und entkoppelt. Der vorhandene Showcase ist ein minimaler erster Schnitt. Vollständige Seitenparität mit Atlas und eine visuelle Gegenprüfung sind noch nicht abgeschlossen.

Diese Referenzentscheidung gilt für alle weiteren Arbeiten in `marcelrapold/design`, unabhängig davon, welcher Agent oder Renderer sie ausführt.
