# Changelog

The version shows in the app's top bar (next to "Project Reports"), with the build date.
To release: bump `version` in `package.json`, run `npm run build`, add a line here, commit and push.

## 1.5.8 - 2026-11-16
- Excel Portfolio header text back to 11pt; taller header rows kept.

## 1.5.7 - 2026-11-16
- Excel Portfolio: taller header rows with larger header text.

## 1.5.6 - 2026-11-16
- Removed the app version from the Excel footer (still on printed / PDF reports).

## 1.5.5 - 2026-11-16
- App version printed at the bottom of every printed / PDF report and in the Excel footer.

## 1.5.4 - 2026-11-16
- Portfolio: all cells vertically centred (CPI badges were sitting at the top of tall rows).

## 1.5.3 - 2026-11-16
- Progress column: 150 px in Excel, 120 px in the app.

## 1.5.2 - 2026-11-16
- Portfolio print / PDF is A3 landscape (set by the app).
- Slightly larger Portfolio text; Progress column 150px.
- Excel: AutoFit column widths measured from every cell.

## 1.5.1 - 2026-11-16
- Portfolio fits the screen width without scrolling (compact columns plus auto-scale).
- Removed the explanatory note under the Portfolio.
- Excel: tighter column widths.

## 1.5.0 - 2026-11-16
- Portfolio redesign: summary cards, grouped two-row headers, larger text, logo, light grey row bands, status and CPI badges, slim progress bars.
- Portfolio sorted by expected finish date.
- Excel export: full numbers again (not M), grouped headers, grey bands.

## 1.4.1 - 2026-11-16
- Portfolio amounts shown as 666.45M (2 decimals with an M suffix), page and Excel.

## 1.4.0 - 2026-11-16
- Portfolio amounts shown in EGP millions (1 decimal), page and Excel.
- Alternating row shading.
- Data bar in the Progress column (page and Excel).

## 1.3.0 - 2026-11-16
- Portfolio columns reworked from review comments: Contract Value incl. VAT, BAC excl. Sponsorship (Current Budget Direct + In-Direct), VAC, GP + Risk / GP + Risk %, EV, BCWP, AC, CV (BCWP - AC).
- Abbreviation legend under the Portfolio (page and Excel).
- Excel: column widths and row heights fit the header and the bold Total row.

## 1.2.0 - 2026-11-16
- Portfolio: new **Budgeted Gross Profit** amount column (Current Budgeted Gross Profit from the P&L), with total. Included in the Excel export.

## 1.1.0 — 2026-11-15
- Check report: BAC = P&L Current Budget Direct + Current Budget In-Direct.
- Executive Summary: Risk is read when labelled "Risk", "Risk Contingency (Budget)" or "Contingency" (SouthMED, Terrazzo, West Bay).
- Version number in the top bar.

## 1.0.0 — 2026-11-12
- First release: P&L and Executive Summary sheets, Portfolio, P&L vs Executive check, Excel export, installable app.
