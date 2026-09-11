<!-- AI Toolbox: IMAGERY.md from "Goldbach Design System", version 1, updated 2026-07-08. Latest version: https://www.goldbach-cloud.com/ai-toolbox/#/tool/d5d4438d-7fc4-46ec-9850-6b3e55698021 -->
# Goldbach Bildwelt

> **Zweck:** Zentrale Referenz für alle bildbezogenen Goldbach-Vorgaben (Bildwelt, Mockups, Devices, Moodbilder). Maschinenlesbar für KI-Bildauswahl und -generierung sowie als Spickzettel für Designer und Projektverantwortliche.
>
> **AI-Hinweis:** Diese Datei ist eigenständig und verbindlich für Bildauswahl, Bildgenerierung, Moodbilder, Mockups und Devices.

---

## BILD-BESCHAFFUNG — verbindliche Reihenfolge

Für **jede** bildbezogene Aufgabe gilt diese Reihenfolge. Sie ist die einzige Entscheidungslogik; die Hinweise nach Systemzugriff erklären nur, wie je nach verfügbarem Zugriff gearbeitet wird.

1. **Goldbach Cloud nutzen:** Thema aus der aktuellen Unterhaltung ableiten (z. B. Radio, TV, Video, Onlinewerbung). Wenn das Thema unklar ist, zuerst kurz nachfragen. Danach mit passenden Stichworten und Synonymen über `search_media` suchen, Ergebnisse nach Motiv, Thema, Stimmung, Orientierung, Format und Goldbach-Bildwelt-Regeln bewerten, das beste Bild mit `download_media` herunterladen und direkt verwenden.
2. **Bild generieren, wenn in der Goldbach Cloud kein passendes Bild gefunden wird:** ein neues Bild anhand der Prompt-Vorlagen dieser Datei erzeugen. Kernattribute, Lichtstimmung, Kategorie-Template und Verbote beachten. KI-Bilder im finalen Output als KI-generiert kennzeichnen.
3. **Platzhalter nur im Notfall verwenden:** Wenn weder ein passendes Cloud-Bild noch Bildgenerierung verfügbar ist, einen sichtbaren markenkonformen Platzhalter in exakter Grösse setzen und den passenden Generierungs-Prompt mitliefern. Bildflächen niemals leer lassen.

> **Wichtig:** Die Goldbach Cloud enthält rechtlich freigegebene, markenkonforme Fotos und hat Vorrang vor jeder Bildgenerierung. Bildgenerierung ist der ausdrückliche Fallback, wenn in der Goldbach Cloud nichts Passendes existiert oder kein Cloud-Zugriff verfügbar ist.

---

## HINWEISE NACH SYSTEMZUGRIFF

Diese Datei wird von verschiedenen AI-Systemen und Workflows genutzt. Entscheidend ist nicht der Toolname, sondern welche Fähigkeiten im konkreten Kontext verfügbar sind. Die Beschaffungs-Reihenfolge oben bleibt immer verbindlich.

| Zugriff / Situation | Vorgehen |
|---|---|
| Goldbach Cloud MCP Server verfügbar | Als Bildquelle verwenden. Mit Thema plus Synonymen suchen, z. B. `radio audio`, `tv video`, `onlinewerbung digital`, `podcast audio`, `dooh outdoor`. |
| Bildgenerierung verfügbar, aber kein passendes Cloud-Bild | Kategorie und Motiv bestimmen, passende Prompt-Vorlage aus Kapitel 3 verwenden, Bild direkt einsetzen und als KI-generiert kennzeichnen. |
| Weder Cloud-Bild noch Bildgenerierung verfügbar | Markenkonformen Platzhalter setzen, passenden Prompt mitliefern und klar kennzeichnen, dass das Bild ersetzt werden muss. |
| Menschliche Nutzer | Goldbach Cloud verwenden. KI-generierte Bilder nur einsetzen, wenn dort kein passendes Goldbach-Bild gefunden wird, und entsprechend kennzeichnen. |

---

## 1. Bildwelt (Kernattribute)

Die Goldbach-Bildwelt besteht aus proprietären Fotos. Diese Beschreibung dient der KI-Erzeugung und Auswahl markenkonformer Bilder.

### Kernattribute

| Attribut | Beschreibung |
|---|---|
| **Natürlich** | Keine gestellten Posen — Szenen wirken wie aus dem Alltag. |
| **Passioniert** | Menschen zeigen Emotion: Freude, Engagement, Zuwendung zu Medien. |
| **Warm** | Warme Farbtemperatur, Sonnenlicht (Golden Hour), helle Belichtung. |
| **Modern** | Zeitgenössische Kleidung, aktuelle Devices, modernes Interieur. |
| **Urban** | Städtische Umgebungen, Cafés, moderne Wohnungen, öffentliche Räume. |
| **Glaubwürdig** | Keine übertriebene Perfektion. Diversity in Alter, Herkunft, Kontext. |

### Drei Bildkategorien

**A — AUTHENTISCH (Lifestyle)**
Natürliche Momente, mit denen man sich identifizieren kann.
- Menschen auf dem Sofa mit Laptop/Tablet/Smartphone
- Paare oder Gruppen beim gemeinsamen Medienkonsum
- Einzelpersonen im Café oder Co-Working-Space
- Familien vor dem TV

**B — PASSION (Emotionale Zuwendung)**
Menschen sind einem Device emotional zugewandt.
- Lachende Person beim Scrollen auf dem Smartphone
- Aufmerksam schauendes Paar vor dem TV
- Freudig überraschter Blick auf ein Tablet
- Person mit Kopfhörern, die Musik geniesst

**C — MESSAGE (Werbebotschaft empfangen)**
Der Mensch empfängt aktiv Werbebotschaften.
- Person schaut auf Werbung auf dem Smartphone
- Blick auf eine digitale Anzeige / OOH-Screen
- Interaktion mit einem Werbemittel auf dem Laptop

### Technische Bildparameter

| Parameter | Wert |
|---|---|
| **Farbtemperatur** | Warm (2500–4000 K), goldener bis orangewarmer Ton |
| **Belichtung** | Hell, High-Key, leicht überbelichtet; Highlights dürfen ausbrennen |
| **Lichtführung** | Gegenlicht (Sonne hinter den Personen), leuchtender Rim-Light-Saum an Haaren/Schultern |
| **Lichtquelle** | Tiefe Golden-Hour-Sonne, sichtbarer Lens-Flare / Lichtfleck erlaubt |
| **Schärfe** | Hauptmotiv scharf, dezenter Bokeh-Hintergrund erlaubt; Bokeh-Lichtpunkte erwünscht |
| **Sättigung** | Natürlich bis leicht erhöht, kein Filter |
| **Kontrast** | Mittel bis weich — aufgehellte Schatten, keine harten Schattenkanten |
| **Nachbearbeitung** | Kein starker Filter, kein Vintage, kein Entsättigungseffekt |

### Lichtstimmung (verbindlich für alle Bilder)

Die Lichtstimmung ist das wichtigste wiedererkennbare Merkmal der Goldbach-Bildwelt. Sie ist konsequent **hell, warm und gegenlichtig**. Folgende sechs Eigenschaften sollen in jedem generierten Bild zusammenwirken:

1. **Gegenlicht als Standard** — Die Hauptlichtquelle (Sonne oder Fenster) steht *hinter* oder seitlich-hinter den Personen, nicht vorne. Dadurch entsteht ein leuchtender Lichtsaum (Rim Light) an Haaren, Schultern und Konturen.
2. **Golden Hour** — Tief stehende Sonne, warmes goldenes bis orangewarmes Licht. Auch in Innenräumen wird diese Stimmung durch warmes Fenster- und Lampenlicht nachgebildet.
3. **High-Key, überstrahlt** — Insgesamt sehr helle Anmutung. Fenster, Himmel und Sonne dürfen bewusst ausbrennen (clipping). Keine dunklen, satten Bildbereiche.
4. **Lens-Flare & Lichtflecken** — Ein dezenter Flare, Lichtschleier oder ein heller Lichtfleck am Bildrand ist erwünscht und verstärkt die sonnige Stimmung. Nicht übertreiben.
5. **Weiche, aufgehellte Schatten** — Viel Streulicht, kaum harte Schattenkanten. Schatten bleiben hell und transparent.
6. **Warmer Hautton & Bokeh** — Hauttöne wirken golden und sonnengewärmt; im unscharfen Hintergrund dürfen weiche, runde Lichtpunkte (Bokeh) erscheinen.

**Englische Kurzformel für Prompts:**
`bright high-key backlit golden-hour photo, warm sunlight from behind, glowing rim light on hair, soft lifted shadows, gentle lens flare, sun-kissed skin tones, warm bokeh highlights, slightly overexposed, airy and luminous`

### Verbotene Bildstile

- Dunkel, düster, Low-Key
- Flaches, frontales oder kühles Licht (Neon, Bürolicht, bewölkt-grau)
- Sterile Studio-Aufnahmen mit weissem Hintergrund
- Übertriebene Filter (Vintage, Schwarzweiss, übersteigerte Sättigung)
- Stockfoto-Klischees (Daumen hoch, Headset-Frau, generische Handshakes)
- Illustrationen als Ersatz für Fotografie

---

## 2. Farbschemata & Verteilung

> ℹ️ **Hinweis zu den Prozentwerten:** Alle %-Angaben in diesem Kapitel sind **Richtwerte für die visuelle Dominanz** im Layout — **keine** exakten Pixel- oder Flächenberechnungen. Sie geben an, welche Farbe das Gesamtbild prägt, nicht ein abzuzählendes Verhältnis. Nicht versuchen, Pixel/Flächen exakt nachzurechnen.

### Schema A — Rot-dominant (Standard)

> Die Anteile sind relative Gewichtungen, keine absoluten Prozentwerte.

| Farbe | Anteil |
|---|---|
| Passion Red | ~26% |
| Red Soft | ~19% |
| Red Dark | ~16% |
| Rose Bright | ~13% |
| Peach | ~10% |
| Coral | ~10% |
| Gold | ~6% |

### Schema B — Erweitert (für informative Layouts)

| Farbe | Anteil |
|---|---|
| Passion Red | ~25% |
| Red Soft | ~18% |
| Red Dark | ~15% |
| Rose Bright | ~12% |
| Peach | ~9% |
| Coral | ~9% |
| Gold | ~6% |
| Pink | ~6% |

> **Weiss und Schwarz** sind in beiden Schemas als Primärfarben immer präsent — als Hintergrund, Textfarbe und Kontrastfläche. Ihr Anteil ist nicht fix, sondern richtet sich nach dem Layout.

### Kombinationsregeln

- Passion Red ist immer die **dominante Farbe**.
- Graustufen als **neutrale Stützfarben**, nie als Akzent.
- Warme Töne (Gold, Peach) als **Weichzeichner**.
- Dunkle Töne (Red Soft, Red Dark) für **Tiefe und Kontrast**.

---

## 3. Prompt-Vorlagen für Bildgenerierung

Nur verwenden, wenn in der Goldbach Cloud kein passendes Bild gefunden wird oder kein Cloud-Zugriff verfügbar ist. Die Bildgenerierung unterscheidet zwei Kategorien mit je eigenen Regeln.

### Kategorie: Menschen

Zeige Menschen in natürlichen Alltagssituationen beim Medienkonsum. Helle, sonnige Atmosphäre, Fokus auf authentische Emotionen. Candid, ungestellt, dokumentarischer Stil.

**Prompt-Struktur:**

```
Generate a detailed photorealistic image prompt.
Return ONLY the descriptive text — no parameters, no URLs, no explanation.

Category: Menschen
Format: [Format]
Description: [Motiv / Inhalt]

Brand guidelines:
- Natural, warm, modern, urban, authentic
- Bright, high-key, backlit golden-hour lighting: warm sunlight coming from behind the subject
- Glowing rim light on hair and shoulders, gentle lens flare, soft lifted shadows
- Slightly overexposed, airy and luminous; sun-kissed warm skin tones, warm bokeh highlights
- Photorealistic — no illustration, no CGI
- No logos, no text in image

Category rules:
Show people in natural, everyday situations consuming media.
Bright sunny atmosphere, focus on authentic emotions.
Candid, unposed, documentary-style.
```

### Kategorie: Device

Das Device ist der Held — prominent im Bild platziert. Natürlicher Teil der Szene, nicht isoliert. Helle, sonnige Atmosphäre, Licht akzentuiert Screen und Produktdesign.

**Prompt-Struktur:**

```
Generate a detailed photorealistic image prompt.
Return ONLY the descriptive text — no parameters, no URLs, no explanation.

Category: Device
Format: [Format]
Description: [Motiv / Inhalt]

Brand guidelines:
- Natural, warm, modern, urban, authentic
- Bright, high-key, backlit golden-hour lighting: warm sunlight coming from behind the subject
- Glowing rim light on hair and shoulders, gentle lens flare, soft lifted shadows
- Slightly overexposed, airy and luminous; sun-kissed warm skin tones, warm bokeh highlights
- Photorealistic — no illustration, no CGI
- No logos, no text in image

Category rules:
Device is the hero — place it prominently in the composition.
Natural part of the scene, not isolated.
Bright sunny atmosphere, light accentuates screen and product design.
```

---

## 4. Mockups & Devices

Devices können in den Fokus gesetzt werden, um ein Produkt hervorzuheben.

### Darstellungsmodi

| Modus | Beschreibung |
|---|---|
| **Lifestyle-Mockup** | Device in realer Szene (Hände, Schreibtisch, Wohnzimmer) |
| **Freigestelltes Device** | Device isoliert auf weissem/transparentem Hintergrund |

### Device-Typen

| Device | Beschreibung |
|---|---|
| Laptop | Modernes MacBook-ähnliches Notebook, leicht geöffnet |
| Smartphone | Rahmenloses Smartphone (Hochformat) |
| Tablet | Quer- oder Hochformat |
| Desktop-Monitor | Flacher Monitor auf Standfuss |
| Smart TV | Fernseher auf Standfuss oder Wandmontage |
| Smart Speaker | Kompakter runder Speaker (Google Home-Stil) |
| Kopfhörer | Over-Ear, dunkel/schwarz |
| Radio | Retro-Radiogerät mit Antenne |
| Earbuds | Kabellose In-Ear mit Ladecase |
| OOH-Stele | Hochformat-Screen auf Standsäule |

---

## 5. Moodbilder

Moodbilder unterscheiden sich von der allgemeinen Bildwelt: Sie zeigen **keine Devices** und werden **nicht mit Werbebotschaften kombiniert**. Einsatz für saisonale oder event-abhängige emotionale Unterstützung.

| Merkmal | Beschreibung |
|---|---|
| **Emotionalität** | Warmherzig, lebensfroh, positiv |
| **Lichtstimmung** | Golden Hour, Sonnenuntergang, warmes Licht |
| **Motive** | Freundesgruppen, Feiern, Natur, Jahreszeiten, Sport, Gemeinschaft |
| **Farbwelt** | Warme Rottöne, Gold, Korall als natürliche Akzente |

**Typische Motive:**
- Freundesgruppe beim Winterspaziergang (Weihnachten)
- Feiernde Menschen mit Konfetti (Neujahr/Events)
- Keimende Pflanze im Sonnenlicht (Frühling)
- Gruppe im Pool/Meer (Sommer)
- Jogger im Sonnenuntergang (Motivation/Sport)
- Anstossende Weingläser (Herbst/Networking)

---

## 6. Anwendung

Diese Datei kann eigenständig für Bildauswahl, Bildbewertung, Moodbilder, Mockups, Devices und KI-Bildgenerierung verwendet werden. Die Goldbach Cloud ist die verbindliche Bildquelle für vorhandene Goldbach-Bilder.
