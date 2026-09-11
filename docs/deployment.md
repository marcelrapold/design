# CI/CD über die native Vercel-Git-Integration

## Automatischer Ablauf

Der Benutzer bestätigt die bestehende Verbindung zwischen `marcelrapold/design` und dem Vercel-Projekt `marcelrapold/design`. Jeder Push auf `main` löst den nativen Vercel-Build aus. In `vercel.json` ist `main` ausdrücklich aktiviert; andere Branches lösen durch diese Konfiguration keine Vercel-Deployments aus.

Vercel führt `npm ci` und danach `npm run check` aus. Dieser Befehl umfasst Tests, TypeScript, den statischen Produktionsbuild sowie die Prüfung der Präsentationsdateien. Erst ein erfolgreicher Build kann veröffentlicht werden. Das Ausgabe-Verzeichnis ist `apps/docs/out`.

GitHub Actions führt unabhängig davon bei jedem Push und Pull Request denselben Check aus. Es gibt keinen zusätzlichen Actions-Deployment-Job und keine dafür erforderlichen `VERCEL_TOKEN`-, `VERCEL_ORG_ID`- oder `VERCEL_PROJECT_ID`-Secrets. Vercel und GitHub verwenden die bereits eingerichtete Git-Integration. Die beiden Prüfungen laufen unabhängig; die Vercel-Veröffentlichung hängt an ihrem eigenen erfolgreichen `npm run check`.

Grundlage: [Vercel für GitHub](https://vercel.com/docs/git/vercel-for-github) und [branchabhängige Git-Deployments](https://vercel.com/docs/project-configuration/git-configuration#git.deploymentenabled).

## Projekteinstellungen

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

Build- und Routingwerte stehen in `vercel.json`. Der Produktionsbranch und die bestehende Domain-Zuordnung sind Einstellungen des Vercel-Projekts; sie lassen sich mit dem aktuell eingeschränkten Connector nicht unabhängig bestätigen.

## Auslieferung prüfen

Den Vercel-Status am gepushten GitHub-Commit beziehungsweise das zugehörige Deployment abwarten. Nach einem erfolgreichen Rollout muss `https://design.rapold.io/build-info.json` die Version `0.4.0` und die vollständige neue Commit-ID enthalten.

Die öffentliche Prüfung ist auch ohne Vercel-Token ausführbar:

```bash
node scripts/verify-deployment.mjs https://design.rapold.io <vollständige-commit-id>
```

Der Prüfer kontrolliert Version und Commit, die Kernrouten `/`, `/praesentation`, `/organigramm`, `/charts`, `/prompt-compiler` sowie den Engineering-Vertrag. Ein grüner GitHub-Check allein bestätigt noch keinen Produktionsrollout. Die technische Prüfung ersetzt keine visuelle Browser-Abnahme.

## Korrektur der vorherigen Pipeline

Commit `cf57f7c` hatte native Git-Deployments deaktiviert und einen eigenen Actions-Deployment-Job hinzugefügt. Dieser scheiterte an drei fehlenden Actions-Secrets. Nach der Bestätigung der bereits bestehenden Git-Verbindung wurde diese zusätzliche Pipeline entfernt und natives Deployment für `main` wieder aktiviert.

Die 403/404-Antworten der direkten Vercel-Werkzeuge betreffen deren Verbindung und sind kein Nachweis gegen die bestehende Vercel-GitHub-Integration. Keine neuen Secrets oder Ersatzprojekte für diesen Ablauf anlegen.

## Rücknahme

Wenn die ausgelieferte Version fehlschlägt, im bestehenden Vercel-Projekt das zuvor geprüfte Deployment wieder zuordnen. Vor der Rücknahme Deployment-ID und Commit dokumentieren. Anschliessend Domain und Build-Info erneut prüfen.
