<!-- AI Toolbox: DESIGN.md from "Goldbach Design System", version 1, updated 2026-07-08. Latest version: https://www.goldbach-cloud.com/ai-toolbox/#/tool/d5d4438d-7fc4-46ec-9850-6b3e55698021 -->
# GOLDBACH DESIGN SYSTEM

> **Zweck:** Maschinenlesbare Referenz für KI-gestützte Erstellung von Logos, Farben, Typografie, Icons, visuellen Grundregeln sowie Websites, Plattformen und Buttons.
>
> **AI-Hinweis:** Diese Datei ist eigenständig und verbindlich für Logo, Farben, Typografie, Icons und visuelle Grundregeln.

---

## INHALTSVERZEICHNIS

| # | Kapitel |
|---------|---------|
| 1 | [Logo](#1-logo) |
| 2 | [Typografie](#2-typografie) |
| 3 | [Corporate Colors](#3-corporate-colors) |
| 4 | [Corporate Nuancen](#4-corporate-nuancen) |
| 5 | [Transparenzen](#5-transparenzen) |
| 6 | [Farbverläufe](#6-farbverläufe) |
| 7 | [Icons](#7-icons) |
| 8 | [Bildwelt-Grundregeln](#8-bildwelt-grundregeln) |
| 9 | [Videowelt-Prinzipien](#9-videowelt-prinzipien) |
| 10 | [Websites, Plattformen und Buttons](#10-websites-plattformen-und-buttons) |
| A | [Schnellreferenz](#anhang-schnellreferenz) |

---

## 1. Logo

### Beschreibung

Das Goldbach-Logo ist ein reiner **Wortmarken-Logotyp**: der Schriftzug **GOLDBACH** als geometrische Sans-Serif-Wortmarke in Versalien (kein Symbol, kein Bildzeichen). Das Logo wird **ausschliesslich als SVG-Asset** eingesetzt (siehe „Logo-Asset (SVG)") — nie als gesetzter Text.

### Logo-Asset (SVG)

> ⚠️ **Absolute Regel: Das alleinstehende Goldbach-Logo wird ausschliesslich als SVG eingesetzt — niemals als Text, Titel, Überschrift oder im Fliesstext.**
>
> ❌ Verboten: „GOLDBACH" als getippter Text, als Headline oder in Satzform.
> ✅ Korrekt: SVG-Datei einbinden, Farbe via `fill` setzen.

Das offizielle Logo-SVG (inline, Farbe via `fill` überschreiben):

```svg
<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 282.8 47.7">
  <path fill="#b61f34" d="M282.8,1h-9.8v17.1h-9.2V1h-9.8v45.9h9.8v-19h9.2v18.9h9.8V1ZM240.6,35.6c-1,2.4-2.7,3.6-5.2,3.6s-5-1.7-5.8-5.2c-.5-2.1-.7-5.7-.7-10.7s.4-8.4,1.1-10.6c.9-2.8,2.7-4.2,5.5-4.2s4.3,1.3,5.2,3.9l7.7-3c-1.2-2.9-3-5.3-5.5-7C240.6.8,238,0,235.3,0,229.1,0,224.6,2.4,221.8,7.3c-2.2,3.7-3.2,9-3.2,15.8s.3,8.3.8,10.9c.8,4.1,2.3,7.2,4.7,9.5,2.8,2.8,6.6,4.2,11.5,4.2s5.5-.8,7.8-2.4c2.3-1.6,4-3.8,5.2-6.7l-8-3h0ZM191.8,28.5l4.3-17.7h.3l3.7,17.7h-8.3ZM202.5,1h-12.4l-12.9,45.8h10.2l2.4-9.9h12.4l2.4,9.9h10.7L202.5,1h0ZM158.7,38.2h-3.7v-11.5h3.8c4.1,0,6.2,1.8,6.2,5.5.1,4-2,6-6.3,6M162.5,17.9c-.9.9-2.2,1.4-3.8,1.4h-3.7v-9.9h3.5c3.5,0,5.3,1.6,5.3,4.8.1,1.6-.4,2.8-1.3,3.7M172.2,26c-1.1-1.8-2.6-3.1-4.3-3.8,3.1-1.8,4.7-4.8,4.7-9.1s-1.5-7.2-4.5-9.4c-2.6-1.8-5.9-2.7-9.9-2.7h-12.3v45.8h11.8c4.8,0,8.7-1.3,11.7-3.8,3-2.6,4.5-6.2,4.5-10.7s-.5-4.4-1.7-6.3M128.1,27.4c0,1.2-.1,2.1-.2,2.8-.3,2.9-1.1,4.8-2.2,6-1.1,1.1-2.6,1.7-4.3,1.7h-2.3V9.8h2.3c2.3,0,4,.8,5.1,2.5s1.7,5.3,1.7,10.9,0,3.1-.1,4.2M135.6,8.1c-2.6-4.8-7.3-7.1-13.9-7.1h-12.6v45.8h12.5c11.2,0,16.8-7.9,16.8-23.6s-.9-11.7-2.8-15.1M103.8,37.7h-14.8V.9h-9.9v45.9h24.7v-9.1ZM59.9,36.4c-1,1.8-2.4,2.7-4.3,2.7s-3.1-.8-4.1-2.5c-1.1-1.7-1.7-6.2-1.7-13.3s.5-10.1,1.4-11.9c1-1.8,2.4-2.7,4.3-2.7s3.2.9,4.2,2.6,1.6,5.7,1.6,12c0,6.9-.4,11.2-1.4,13.1M67.2,5.2C64.3,1.7,60.4,0,55.7,0s-8.7,1.8-11.5,5.3c-3.1,3.8-4.7,9.8-4.7,17.9s1.5,15.5,4.5,19.2c1.3,1.7,3,3,5.2,3.9,2,.9,4.1,1.4,6.3,1.4,5,0,8.8-1.7,11.5-5,3.2-3.8,4.8-10.3,4.8-19.5s-1.6-14.4-4.6-18M18.3,18.5v8.4h4.4v3.1c0,2-.2,3.6-.6,4.8-.7,2.9-2.5,4.3-5.4,4.3s-4.5-1.4-5.3-4.3c-.7-2.2-1-6.2-1-12.2s.3-7.8,1-9.7c1-2.9,2.8-4.4,5.6-4.4s4.4,1.3,5.4,4l7.4-3.2C27.1,3.1,22.7,0,16.5,0s-7.1,1.1-9.7,3.2c-2.6,2.1-4.4,5.1-5.4,8.8-.9,3.4-1.4,7-1.4,10.9,0,8,1,13.8,3.1,17.5,1.3,2.3,3.2,4.1,5.7,5.5,2.3,1.2,4.9,1.8,7.6,1.8,5.5,0,9.7-2.1,12.5-6.3,2.3-3.6,3.5-8,3.5-13.4v-9.4h-14.1,0Z"/>
</svg>
```

Die Farbe wird via `fill`-Attribut direkt am `<path>` überschrieben:

| Variante | Anwendung |
|---|---|
| **Rot** (`#b61f34`) | Standard-SVG, direkt verwenden |
| **Weiss** (`#ffffff`) | `fill="#ffffff"` auf alle Pfade setzen |
| **Schwarz** (`#000000`) | `fill="#000000"` auf alle Pfade setzen |

### Logo-Varianten

| Variante | Einsatz |
|---|---|
| **Weiss auf Passion Red** | Bevorzugte Hauptvariante für Werbezwecke und Imagekampagnen. |
| **Passion Red auf Weiss** | Auf hellem Hintergrund. |
| **Schwarz auf Weiss** | Ausnahme: nur bei Inhaltsseiten, wo Logo zurücktreten soll. |
| **Weiss auf Schwarz** | Auf dunklem Hintergrund. |

Bei Fotos richtet sich die Farbwahl nach dem Kontrast — die besser lesbare Variante wählen.

### Schutzraum

Mindestabstand auf allen vier Seiten = **Höhe des Buchstabens „H"** im Logo.

```
┌──────────────────────────────────┐
│           ↕ = Höhe „H"          │
│  ┌────────────────────────────┐  │
│  │        GOLDBACH            │  │
│  └────────────────────────────┘  │
│  ↔ Höhe „H"        Höhe „H" ↔   │
└──────────────────────────────────┘
```

### Minimalgrösse

- Digital: **≥ 75 px Breite** (bei 96 dpi)

---

## 2. Typografie

> ⚠️ **Absolute Regel: Es wird ausschliesslich Inter verwendet. Jede andere Schriftart ist verboten — einzige Ausnahme ist ein technischer System-Fallback (Arial), wo Inter nicht einbettbar ist (z. B. E-Mail/Gmail).**

### Schriftarten-System

| Kontext | Schriftart | Schnitte |
|---|---|---|
| **Alle Zwecke** (Headlines, Claim, Fliesstext, Präsentationen, G-Slides, UI, Subheadlines) | Inter | Light (300), Bold (700) |
| **E-Mail / System (Gmail)** — nur technischer Fallback | Arial (System-Sans) | Normal, Bold |

### Einsatzregeln

| Element | Schrift | Schnitt |
|---|---|---|
| Logo-Schriftzug | SVG-Asset (kein gesetzter Text) | — |
| Claim | Inter | Bold (700) |
| Headlines | Inter | Bold (700) |
| Subheadlines | Inter | Bold (700) |
| Fliesstext | Inter | Light (300) |
| Hervorhebungen | Inter | Bold (700) |
| Präsentationen (G-Slides) | Inter | Light (300) / Bold (700) |
| Digitale Texte (Gmail) — technischer Fallback | Arial | Normal |

### Fallback-Regel

**Inter** ist die einzige Markenschrift. Nur wenn Inter technisch nicht einbettbar ist (z. B. E-Mail/Gmail):
- → **System-Sans-Serif** (Arial / Helvetica) als einziger Fallback.

> ❌ **Verboten:** Montserrat, Roboto, Open Sans, Lato, Poppins, Raleway oder jede andere Schrift. Bei Unsicherheit: Inter verwenden.

---

## 3. Corporate Colors

### Primärfarben

| Name | HEX | RGB |
|---|---|---|
| **Passion Red** | `#b61f34` | 182, 31, 52 |
| **White** | `#ffffff` | 255, 255, 255 |
| **Black** | `#000000` | 0, 0, 0 |

### Farbhierarchie

1. **Passion Red** — Primärfarbe, dominiert alle Gestaltungen.
2. **Weiss** — Hintergrundfarbe, Kontrastfarbe.
3. **Schwarz** — Textfarbe, Sekundärkontrast.

> Alle CSS Custom Properties → Kap. 4

### Rahmen, Konturen und Borders

Rote Rahmen, rote Konturen und dekorative Borders sind **keine Standard-Gestaltungselemente** der Goldbach-CI.

- Passion Red wird als Fläche, Textfarbe, Iconfarbe oder Overlay eingesetzt — nicht als Umrandung von Karten, Boxen, Bildern, Diagrammen oder Inhaltsmodulen.
- Keine roten Borders um Cards, Textboxen, Bildflächen, Kennzahlen, Diagramme, Tabellen oder CTA-Flächen setzen.
- Keine roten Konturlinien als dekorative Trennung verwenden.
- Dezente Trennlinien sind nur funktional erlaubt und in Hellgrau oder Schwarz zu setzen, nicht in Passion Red.
- Ausnahme: Ein dokumentiertes Template oder ein freigegebenes Asset gibt eine rote Kontur ausdrücklich vor.

---

## 4. Corporate Nuancen

Nuancen ergänzen die Primärpalette für Grafiken. Sie sind der Primärpalette nachgeordnet.

### Rottöne

| Name | HEX | RGB |
|---|---|---|
| **Coral** | `#fe3935` | 254, 57, 53 |
| **Pink** | `#ef1957` | 239, 25, 87 |
| **Rose Bright** | `#f45e89` | 244, 94, 137 |
| **Peach** | `#f57e7e` | 245, 126, 126 |
| **Red Soft** | `#8d1926` | 141, 25, 38 |
| **Red Dark** | `#590318` | 89, 3, 24 |
| **Fuchsia** | `#971f51` | 151, 31, 81 |

### Warme Akzentfarben

| Name | HEX | RGB |
|---|---|---|
| **Gold** | `#f9cb9c` | 249, 203, 156 |

### Graustufen

| Name | HEX | RGB |
|---|---|---|
| **Black Soft 1** | `#575757` | 87, 87, 87 |
| **Black Soft 2** | `#878787` | 135, 135, 135 |
| **Black Soft 3** | `#b2b2b2` | 178, 178, 178 |
| **Black Soft 4** | `#dadada` | 218, 218, 218 |
| **UI Gray** | `#9e9e9e` | 158, 158, 158 |
| **Background Light** | `#f2f2f2` | 242, 242, 242 |

### CSS Custom Properties (vollständig)

```css
:root {
  /* Primär */
  --gb-passion-red: #b61f34;
  --gb-white: #ffffff;
  --gb-black: #000000;

  /* Rottöne */
  --gb-coral: #fe3935;
  --gb-pink: #ef1957;
  --gb-rose-bright: #f45e89;
  --gb-peach: #f57e7e;
  --gb-red-soft: #8d1926;
  --gb-red-dark: #590318;
  --gb-fuchsia: #971f51;

  /* Warm */
  --gb-gold: #f9cb9c;

  /* Graustufen */
  --gb-black-soft-1: #575757;
  --gb-black-soft-2: #878787;
  --gb-black-soft-3: #b2b2b2;
  --gb-black-soft-4: #dadada;
  --gb-ui-gray: #9e9e9e;
  --gb-background-light: #f2f2f2;

  /* Funktionale Zuweisung (semantische Rollen) */
  --gb-theme-primary: var(--gb-passion-red);
  --gb-theme-background: var(--gb-white);
  --gb-theme-text: var(--gb-black);
  --gb-theme-text-muted: var(--gb-black-soft-1);
}
```

---

## 5. Transparenzen

Transparenz-Regeln kommen zum Einsatz, wenn ein Bild **vollflächig hinter einem roten Schleier** liegt. Ziel ist, dass Text auf dem Bild sichtbar bleibt und das Bild gleichzeitig als Bild erkennbar bleibt.

### Use-Cases

| Use-Case | Regel |
|---|---|
| **Bild mit Text auf vollflächigem rotem Schleier** | Mindestens **80%** Passion-Red-Deckkraft, damit Text lesbar bleibt. |
| **Bild ohne Text mit rotem Schleier** | **50%** Passion-Red-Deckkraft, damit das Bild stärker sichtbar bleibt. |
| **Bild mit Text links oder rechts** | Kein vollflächiger Schleier; stattdessen Farbverlauf gemäss Kap. 6 verwenden. |

| Deckkraft | Einsatz |
|---|---|
| 100% | Vollflächige Farbe ohne Bild. |
| 95% | Leichte Bildandeutung, starker Farbfokus. |
| 90% | Bild dezent sichtbar, Farbe dominiert. |
| 85% | Bild erkennbar, guter Kompromiss. |
| 80% | Minimum für Text auf Bild/Overlay — Text muss lesbar bleiben. |
| 50% | Für Bildflächen ohne Text oder für die bilddominante Seite eines Verlaufs. |
| < 80% | ❌ **Nicht erlaubt, wenn Text auf dem Overlay steht.** |

**Lesbarkeit hat immer Priorität.** Sobald Text auf einem vollflächigen Bild-Overlay steht, gilt die 80%-Mindestregel. Im Zweifelsfall höhere Deckkraft wählen.

```css
.overlay-passion-red {
  background-color: rgba(182, 31, 52, 0.90); /* 90% Standard */
}
.overlay-passion-red-image-only {
  background-color: rgba(182, 31, 52, 0.50); /* 50% nur ohne Text */
}
/* Text auf Overlay: opacity 0.80–1.00 — NIEMALS unter 0.80 */
/* Bild ohne Text: opacity 0.50 */
```

---

## 6. Farbverläufe

Farbverläufe kommen nur zum Einsatz, wenn Text **links oder rechts** auf einem Bild steht. Der Textbereich wird mit transparentem Passion Red auf mindestens **80% Deckkraft** gebettet, damit der Text lesbar bleibt. Auf der gegenüberliegenden Seite ohne Text wird das Bild stärker sichtbar; dort darf die rote Deckkraft bis **50%** zurückgehen.

### Use-Cases

| Use-Case | Verlauf |
|---|---|
| **Text links** | Links 80% Passion Red, nach rechts bis 50% Passion Red. |
| **Text rechts** | Rechts 80% Passion Red, nach links bis 50% Passion Red. |

**Nicht verwenden:** Farbverläufe sind nicht für vollflächige Schleier gedacht. Für vollflächige Bild-Overlays gelten die Transparenz-Regeln in Kap. 5.

```css
/* Von links nach rechts — Text links */
.gradient-left {
  background: linear-gradient(
    to right,
    rgba(182, 31, 52, 0.80) 0%,
    rgba(182, 31, 52, 0.80) 42%,
    rgba(182, 31, 52, 0.50) 100%
  );
}

/* Von rechts nach links — Text rechts */
.gradient-right {
  background: linear-gradient(
    to left,
    rgba(182, 31, 52, 0.80) 0%,
    rgba(182, 31, 52, 0.80) 42%,
    rgba(182, 31, 52, 0.50) 100%
  );
}
```

**Regeln:**
- Nur Passion Red als Gradient-Basis — keine anderen Farben.
- Der Textbereich liegt immer auf mindestens 80% Passion Red.
- Die bilddominante Seite darf maximal bis 50% Deckkraft reduziert werden.
- Keine Verläufe nach oben/unten verwenden, ausser ein Template definiert dies ausdrücklich.

---

## 7. Icons

> **Zwingende Regel:** Wenn Icons erstellt, ausgewählt oder als SVG eingebunden werden, muss immer die Datei **`icons.json`** verwendet werden.
>
> **Quelle:** `bilder/icons.json` im lokalen Goldbach-Asset-Ordner `bilder/`.
>
> Die `icons.json` ist die einzige verbindliche Quelle für Icon-Namen, Kategorien, Suchbegriffe und SVG-Pfade. Keine Icons frei zeichnen, keine alternativen Icon-Sets verwenden und keine Icon-Namen aus dieser Datei nachbauen.

### Technische Spezifikation

| Eigenschaft | Wert |
|---|---|
| Font-Name | `goldbach-icons` |
| Anzahl Icons | 271 |
| Viewbox | `0 0 1024 1024` |
| Format | SVG-Pfade aus IcoMoon |
| Verbindliche Quelle | `bilder/icons.json` |
| Asset-Ordner | `bilder/` |
| Lookup | über `properties.name`, `properties.category`, `properties.category_slug` oder `properties.search_tags` |

### Verwendung

**Ablauf:**
1. `bilder/icons.json` laden.
2. Passendes Icon über Name, Kategorie oder Such-Tags auswählen.
3. Im Array `icons[]` das passende Objekt verwenden.
4. SVG-Pfade aus `icon.paths` als Inline-SVG einsetzen.
5. Wenn `properties.requires_fill_rule_evenodd` wahr ist oder ein Icon mehrere Pfade hat, auf jedem `<path>` `fill-rule="evenodd"` setzen.

**Inline SVG aus `icons.json`:**
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24" height="24" fill="#b61f34">
  <path d="[Pfad aus icons.json]"/>
</svg>
```

### Farb-Varianten und Hintergründe

Icons werden grundsätzlich **ohne runden Kreis** eingesetzt. Die Icon-Farbe richtet sich nach dem Hintergrund und muss immer klar lesbar sein.

| Hintergrund | Standard-Icon | Kreis/Container | Einsatz |
|---|---|---|---|
| **Passion Red / roter Hintergrund** | Weiss `#ffffff` | Kein Kreis | Standard auf rotem Grund |
| **Dunkler Hintergrund / dunkles Foto** | Weiss `#ffffff` | Kein Kreis | Standard auf dunklem Grund |
| **Weisser / heller Hintergrund** | Passion Red `#b61f34` | Kein Kreis | Standard auf hellem Grund |
| **Weisser / heller Hintergrund mit zu wenig Lesbarkeit** | Weiss `#ffffff` | Passion-Red-Kreis `#b61f34` | Ausnahme, nur wenn rotes Icon nicht lesbar ist |

**Regeln:**
- Kein runder Kreis als Standard verwenden.
- Auf rotem oder dunklem Hintergrund immer ein weisses Icon ohne Kreis setzen.
- Auf weissem oder hellem Hintergrund immer ein rotes Icon ohne Kreis setzen.
- Ein roter Kreis mit weissem Icon ist nur erlaubt, wenn ein rotes Icon auf hellem Hintergrund nicht ausreichend lesbar ist.
- Schwarze Icons sind keine Standardvariante und nur zulässig, wenn ein Template oder eine technische Einschränkung sie ausdrücklich verlangt.

**Via CSS dynamisch:**
```css
/* Roter oder dunkler Hintergrund */
.icon-on-red,
.icon-on-dark {
  color: #ffffff;
}

/* Weisser oder heller Hintergrund */
.icon-on-light {
  color: #b61f34;
}

/* Ausnahme: roter Kreis mit weissem Icon */
.icon-circle-exception {
  background-color: #b61f34;
  color: #ffffff;
  border-radius: 50%;
}

svg { fill: currentColor; }
```

### Ausnahme-Spezifikation: roter Kreis mit weissem Icon

Nur verwenden, wenn das rote Icon auf weissem/hellem Hintergrund nicht ausreichend gelesen werden kann.

| Eigenschaft | Wert |
|---|---|
| Container | 64×64px |
| Form | Kreis |
| Hintergrund | `fill="#b61f34"` |
| Padding | 20% = 12.8px pro Seite |
| Icon-Grösse | 60% = 38.4×38.4px |
| Icon-Offset | `x="12.8" y="12.8"` |
| Icon-Farbe | `fill="#ffffff"` |

```html
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="32" fill="#b61f34"/>
  <g transform="translate(12.8, 12.8) scale(0.0375)" fill="#ffffff">
    <path d="[Pfad aus icons.json]"/>
  </g>
</svg>
```

> **Skalierung:** `scale(0.0375)` rechnet die 1024er-Viewbox auf 38.4px um (`38.4 / 1024 = 0.0375`); `translate(12.8, 12.8)` zentriert sie im 64er-Container (`12.8 + 38.4 + 12.8 = 64`).
>
> Pfade mit mehreren `M`-Befehlen oder mehreren Pfaden benötigen `fill-rule="evenodd"` an **jedem** `<path>` für korrekte Aussparungen. Die Datei `icons.json` enthält dafür pro Icon `properties.requires_fill_rule_evenodd`.

---

## 8. Bildwelt-Grundregeln

Visuelle Kommunikation mit Bildern folgt diesen Grundprinzipien:

- Bilder wirken hell, warm, natürlich und menschlich.
- Passion Red wird als Fläche, Akzent oder Overlay eingesetzt, nicht als dekorativer Rahmen.
- Bildflächen werden sichtbar befüllt und nie leer gelassen.
- Devices und Screens werden realistisch in Nutzungssituationen gezeigt.
- Generische Stock-Optik, kalte Corporate-Symbolbilder und abstrakte AI-Hintergründe vermeiden.

## 9. Videowelt-Prinzipien

Für Videos gelten **dieselben Charakteristika wie für die Bildwelt** (Kap. 8).

### Standard-Elemente

| Element | Spezifikation |
|---|---|
| **Intro** | Standardisiertes Goldbach-Intro (Logo-Animation) |
| **Outro (neutral)** | Logo-Animation ohne Claim |
| **Outro mit Claim** | „THANK YOU WITH PASSION" oder „YOUR MESSAGE IS OUR PASSION" |
| **Formate** | Quer- und Hochformat |

**Farben:** CI/CD-Farben (Passion Red, Schwarz, Weiss) als Basis, Nuancen für Akzente, Transparenz-Overlays gemäss Kap. 5.

---

## 10. Websites, Plattformen und Buttons

### Grundprinzip

Digitale Interfaces orientieren sich am visuellen Auftritt der Goldbach-Website: grosszügige Weissräume, klare Typografie, starke rote Flächen als Akzent oder CTA, reduzierte UI-Elemente und keine dekorativen Rahmen.

### Verbindliche Web- und Plattform-Regeln

- Website- und Plattform-Layouts müssen funktional, ruhig und scanbar sein.
- Keine frei erfundenen Brand-Stile, keine dekorativen Kartenraster im Marketing-Look, keine roten Borders als Schmuckelement.
- Passion Red wird für primäre Aktionen, aktive Zustände, Akzente und Overlays eingesetzt.
- Weiss, Schwarz und Graustufen tragen die Struktur; Rot darf führen, aber nicht jedes UI-Element dominieren.
- Bilder hell, warm, menschlich und markennah einsetzen; generische Stock-Optik vermeiden.
- Icons aus `bilder/icons.json` einsetzen.
- Logo als SVG-/Bild-Asset verwenden, nie als getippten Text.
- Website-Texte kurz, aktiv, klar und respektvoll im `du` formulieren.

### Website-Farbvariablen

| Rolle | Wert | Nutzung |
|---|---|---|
| White | `#ffffff` | Button-Text auf Rot, Flächen, negative Logos |
| Passion Red | `#b61f34` | Primäre CTAs, aktive Akzente |
| Dark Red | `#8d1926` | Sekundäre/dunklere CTA-Flächen |
| Coral | `#fe3935` | Akzentton, sparsam |
| Peach/Rose Hover | `#f57e7e` | Heller Hover-/Akzentzustand |
| Pink Hover | `#ef1957` | Primärer CTA-Hover |
| Black | `#000000` | Text, Link-Buttons auf hellem Grund |
| Background Light | `#f2f2f2` | Dezente Flächen |

### Buttons

Goldbach-Buttons sind flach, klar und rechteckig mit leichtem Radius.

```css
.gb-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 39px;
  padding: 10px 20px;
  border: 0;
  border-radius: 4px;
  box-shadow: none;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.015em;
  transition: color .2s, background-color .2s, border-color .2s;
}
```

**Wichtig:** Buttons verwenden **keinen roten Border**. Die Fläche definiert den CTA, nicht die Kontur.

#### Primärer CTA

Für wichtigste Aktionen wie Beratung, Kontakt, Anmeldung oder Conversion.

```css
.gb-button-primary {
  color: #ffffff;
  background: #b61f34;
}

.gb-button-primary:hover {
  color: #ffffff;
  background: #ef1957;
}
```

**Text:** kurz, aktiv, handlungsorientiert. Beispiele: `Beratung anfordern`, `Offerte anfordern`, `Zur Newsletter-Anmeldung`.

#### Primärer Hero-CTA

Im Hero oder für besonders wichtige Einstiege kann der Button-Text in Versalien gesetzt werden.

```css
.gb-button-hero {
  color: #ffffff;
  background: #b61f34;
  text-transform: uppercase;
}

.gb-button-hero:hover {
  background: #ef1957;
}
```

#### Dunkler CTA

Für CTA-Bereiche auf hellen Sektionen oder im unteren Seitenbereich.

```css
.gb-button-dark {
  color: #ffffff;
  background: #8d1926;
}

.gb-button-dark:hover {
  color: #ffffff;
  background: #a50251;
}
```

#### Text-Link-Button

Für News-Teaser, Cards und Listen, wenn keine starke CTA-Fläche gewünscht ist.

```css
.gb-button-link {
  padding: 0;
  color: #000000;
  background: transparent;
  border: 0;
  font-size: 20px;
}

.gb-button-link:hover {
  color: #b61f34;
  background: transparent;
}
```

### Button-Verbote

- Keine roten Outline-Buttons.
- Keine roten Borders um Buttons, Cards, Bilder, Tabellen, Diagramme oder Formulare.
- Keine Pill-Buttons mit stark gerundetem Radius, ausser ein bestehendes Website-Modul gibt dies ausdrücklich vor.
- Keine Schatten, Bevels oder 3D-Effekte.
- Keine Icon-only-Buttons für Primäraktionen; CTA muss lesbar beschriftet sein.

### Layout für Plattformen

Plattformen und Tools sollen näher an einem funktionalen Interface als an einer Kampagnen-Landingpage liegen.

- Navigation klar und stabil halten.
- Primäre Aktionen mit `gb-button-primary` markieren.
- Sekundäre Aktionen als Text-Link oder neutraler Button lösen.
- Karten nur verwenden, wenn sie einzelne wiederholbare Datensätze oder Module strukturieren.
- Keine Karten in Karten.
- Tabellen, Filter, Formulare und Dashboards mit Weiss, Schwarz und Graustufen strukturieren; Rot nur für aktive Auswahl, CTA oder wichtige Hervorhebung.
- Fehlermeldungen und Warnungen nicht automatisch in Passion Red setzen, wenn dadurch Brand-CTA und Fehlerzustand verwechselt werden.

---

## ANHANG: Schnellreferenz

### Farbpalette

```yaml
primär:
  passion-red: "#b61f34"
  white: "#ffffff"
  black: "#000000"

nuancen-rot:
  coral: "#fe3935"
  pink: "#ef1957"
  rose-bright: "#f45e89"
  peach: "#f57e7e"
  red-soft: "#8d1926"
  red-dark: "#590318"
  fuchsia: "#971f51"

nuancen-warm:
  gold: "#f9cb9c"

graustufen:
  soft-1: "#575757"
  soft-2: "#878787"
  soft-3: "#b2b2b2"
  soft-4: "#dadada"
  ui-gray: "#9e9e9e"
  background-light: "#f2f2f2"
```

### Typografie-Stack

```yaml
display: "Inter"            # Bold/Black für Headlines & Claim
body: "Inter"
body-weights: [300, 700]
system-fallback: "Arial"   # nur wo Inter nicht einbettbar ist (E-Mail/Gmail)
presentations: "Inter"
verboten: "Montserrat, Roboto, Open Sans, Lato, Poppins, Raleway — und alle anderen Schriften"
```

### Design-Entscheidungsbaum

```
Welche Gestaltung?
├── Markant / Image → Passion Red dominiert, Logo weiss auf rot, Inter Bold Headlines
│   ├── Mit Foto? → Transparenz ≥ 80%, warmes natürliches Foto
│   ├── Mit Gradient? → Nur Passion Red, Textseite ≥ 80%, Bildseite bis 50%
│   └── Mit Icons? → Outline-Stil, einfarbig (rot/schwarz/weiss)
└── Informativ → Inter für Text, Graustufen + Red Akzente
```
