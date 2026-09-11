# Produktionsrollout

## Verifizierter Stand am 11.09.2026

Der Quellstand 0.4 ist auf `marcelrapold/design`, Branch `main`, veröffentlicht. Der Feature-Commit `08fe9674e44289b26011e5ad4dd491d7c2483734` hat [GitHub Actions Run 34607164270](https://github.com/marcelrapold/design/actions/runs/34607164270) erfolgreich durchlaufen: 20 Tests, TypeScript, statischer Produktionsbuild und Exportprüfungen.

Die Domain `design.rapold.io` zeigte bei der Browserprüfung weiterhin die Einseitenfassung 0.1. Der verbundene Vercel-Zugang listete kein Projekt. Ein tatsächlicher Deployment-Aufruf für `design` wurde mit HTTP 403 abgewiesen: Die Verbindung darf für dieses Projekt kein Preview Deployment erstellen. Es entstand kein neues Deployment. Die Freigabe des Benutzers zur Veröffentlichung liegt vor; der offene Punkt ist der technische Projektzugang.

## Sollkonfiguration des bestehenden Projekts

| Einstellung | Wert |
|---|---|
| Git-Repository | `marcelrapold/design` |
| Produktionsbranch | `main` |
| Root Directory | Repository-Wurzel (`.`), da npm-Workspaces verwendet werden |
| Framework Preset | Other (`framework: null`); Next.js erzeugt einen statischen Export |
| Node.js | 22.x, entsprechend der CI |
| Install Command | `npm ci` |
| Build Command | `npm run check` |
| Output Directory | `apps/docs/out` |
| Clean URLs | `true` |
| Produktionsdomain | `design.rapold.io` |

Die Build- und Routingwerte stehen in `vercel.json`. `cleanUrls` ordnet beispielsweise `/praesentation` der exportierten Datei `praesentation.html` zu. Quelle: [Vercel-Konfiguration](https://vercel.com/docs/project-configuration/vercel-json#cleanurls).

## Wiederaufnahme

1. Die Vercel-Verbindung mit einem Zugang verbinden, der das bestehende Produktionsprojekt sehen und darin Deployments anlegen darf. Keine Tokens in Chat, Repository oder Logs eintragen.
2. Projekt-ID und vorhandene Domain-Zuordnung aus dem nun sichtbaren Projekt lesen; die obigen Einstellungen prüfen. Kein Ersatzprojekt oder eine zweite Domain-Zuordnung anlegen.
3. Den aktuellen `main`-Commit auslesen und genau diesen Stand bauen. Bei aktiver Git-Integration den neuesten Commit deployen; einen manuell übergebenen Build mit derselben Commit-ID kennzeichnen.
4. Vorschau öffnen und Direktaufrufe von `/praesentation`, `/organigramm`, `/charts` und `/prompt-compiler` prüfen. Markenwechsel, Suche, Mobilmenü, SVG-Export sowie PPTX/PDF-Downloads bedienen.
5. Den geprüften Build auf dem bestehenden Produktionsprojekt ausliefern. Danach dieselben Direktaufrufe auf `design.rapold.io` prüfen.
6. `/build-info.json` abrufen. `version` muss `0.4.0` und `commit` die vollständige tatsächlich ausgerollte Commit-ID sein. Ein Commit-Link oder ein grüner CI-Lauf allein belegt keinen Produktionsrollout.

## Rücknahme

Wenn die ausgelieferte Version fehlschlägt, im bestehenden Vercel-Projekt das zuvor geprüfte Deployment wieder zuordnen. Vor der Rücknahme Deployment-ID und Commit dokumentieren. Anschliessend Domain und Build-Info erneut prüfen.
