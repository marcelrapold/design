# CI/CD nach Vercel

## Automatischer Ablauf

`.github/workflows/check.yml` führt bei jedem Push und Pull Request `npm run check` aus: Tests, TypeScript, statischer Produktionsbuild und Prüfung der Präsentationsdateien.

Nach einem erfolgreichen Check löst ein Push auf `main` den Job `Deploy production` aus. `workflow_dispatch` erlaubt denselben Ablauf manuell auf `main`. Pull Requests, Tags und andere Branches können kein Produktionsdeployment auslösen.

Der Deployment-Job prüft die Zugangsdaten und den aktuellen `main`-Commit. Er liest die Konfiguration des bestehenden Vercel-Projekts, baut und prüft mit `vercel build --prod` und veröffentlicht das erzeugte Artefakt mit `vercel deploy --prebuilt --prod`. Die Vercel CLI ist auf `59.16.0` fixiert. Produktionsjobs werden nacheinander ausgeführt; ein laufender Upload wird nicht durch einen neuen Push abgebrochen.

Anschliessend prüft `scripts/verify-deployment.mjs` auf `design.rapold.io`:

- exakte Version und vollständige Commit-ID in `/build-info.json`;
- erfolgreiche HTML-Antworten mit Framework-Inhalt für `/`, `/praesentation`, `/organigramm`, `/charts` und `/prompt-compiler`;
- den ausgelieferten Engineering-Vertrag.

Ein falscher Commit, eine Fehlerseite oder eine Anmeldeseite lässt den Deployment-Job fehlschlagen. Die Prüfung erlaubt kurze Verzögerungen der Domain-Zuordnung. Sie ersetzt keine visuelle Browser-Abnahme.

GitHub Actions steuert den Rollout. `git.deploymentEnabled: false` in `vercel.json` verhindert zusätzliche Deployments durch Vercels native Git-Integration. Die GitHub-Prüfung baut bereits den statischen Export; der getrennte Produktionsjob baut erneut mit der Vercel-Projektkonfiguration. Auf Vercel selbst findet dank `--prebuilt` kein weiterer Build statt.

Grundlage: [Vercel: GitHub Actions mit CLI und Prebuilt-Deployment](https://vercel.com/kb/guide/how-can-i-use-github-actions-with-vercel).

## Einmalige Verbindung

Im GitHub-Repository unter **Settings → Secrets and variables → Actions** diese Repository-Secrets hinterlegen; alternativ im vorhandenen GitHub-Environment `production`:

| Secret | Inhalt |
|---|---|
| `VERCEL_TOKEN` | Vercel-Token mit Deployment-Rechten auf dem bestehenden Projekt |
| `VERCEL_ORG_ID` | `orgId` des Teams, dem das Produktionsprojekt gehört |
| `VERCEL_PROJECT_ID` | `projectId` des bestehenden Projekts für `design.rapold.io` |

Die IDs liefert `.vercel/project.json` nach autorisiertem `vercel link` auf das bestehende Projekt. Keine Tokens in Chat, Repository oder Logs eintragen. Ein fehlendes Secret erzeugt eine ausdrückliche Fehlermeldung mit dessen Namen; der Job überspringt den Rollout nicht stillschweigend.

Nach dem Hinterlegen können die fehlgeschlagenen Jobs des neuesten `main`-Runs erneut gestartet oder der Workflow auf `main` manuell ausgelöst werden. Weitere Pushes auf `main` lösen automatisch einen neuen Build und nach erfolgreicher Prüfung das Deployment aus. Bestehende Schutzregeln des GitHub-Environments gelten weiterhin.

## Verbindungsstand am 11.09.2026

Die verbundenen Werkzeuge können Code auf `marcelrapold/design` veröffentlichen. Der Vercel-Zugang listet im verbundenen Team weiterhin kein Projekt. Ein Deployment-Aufruf wurde zuvor mit HTTP 403 abgewiesen: Die Verbindung darf für das Projekt `design` kein Preview Deployment erstellen. Es wurde damit kein Deployment angelegt. In der lokalen Umgebung sind weder Vercel-Zugangsdaten noch eine Vercel-Projektverknüpfung vorhanden. Das GitHub-Werkzeug bietet keine Verwaltung von Actions-Secrets.

Die Produktionsdomain zeigte bei der letzten Browserprüfung weiterhin die Einseitenfassung 0.1. Die Veröffentlichung ist vom Benutzer beauftragt; für die Ausführung der Pipeline müssen die drei oben genannten Secrets verfügbar sein und auf das richtige Projekt mit ausreichenden Rechten zeigen. Der tatsächliche Workflow-Lauf zeigt, welche Werte noch fehlen.

## Sollkonfiguration des bestehenden Vercel-Projekts

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

## Rücknahme

Wenn die ausgelieferte Version fehlschlägt, im bestehenden Vercel-Projekt das zuvor geprüfte Deployment wieder zuordnen. Vor der Rücknahme Deployment-ID und Commit dokumentieren. Anschliessend Domain und Build-Info erneut prüfen.
