# Changelog

The version shows in the app's top bar (next to "Project Reports"), with the build date.
To release: bump `version` in `package.json`, run `npm run build`, add a line here, commit and push.

## 1.7.4 - 2026-11-16
- Analysis PDF: charts are redrawn immediately at print size, so project names and bars match the screen (no more cut-off names or squashed bars).

## 1.7.3 - 2026-11-16
- Overrun still to come: tooltip shows the red figure; subtitle explains it (red = remaining budget − cost to complete).
- Analysis PDF fills the A3 landscape width; charts resized before printing so none are cut off; all project labels always shown.
- Print button is now a PDF button (Save as PDF / Print).

## 1.7.2 - 2026-11-16
- Analysis: Delay vs Indirect VAC chart replaced by a Delay column in the indirect cost ratios matrix; Overrun still to come gets the freed space.
- Matrix headers show names only; each formula appears as a tooltip on hover (info icon).
- Analysis PDF: exactly one A3 landscape page, filled edge to edge, no blank second page; version stamp moved under the report date.

## 1.7.1 - 2026-11-16
- Analysis in 3 rows: the indirect cost ratios matrix shares row 3 with Overrun still to come and Delay vs Indirect VAC.
- Whole Analysis prints on one A3 landscape page (wider print layout applied automatically).
- VAC by project: Direct / Indirect share shown on hover instead of inside the bars.

## 1.7.0 - 2026-11-16
- Analysis is now one page: 6 summary cards, 6 charts and the indirect cost ratios matrix (full width).
- Overrun mix merged into VAC by project: % inside each bar = Direct / Indirect share of that project's overrun.
- CPI chart redrawn as distance from 1.00 (red below, green above), progress beside each name.
- Indirect matrix adds an Indirect VAC column. When printed (A3), the matrix starts page 2.

## 1.6.1 - 2026-11-16
- Analysis chart 1 (Profit bridge): project filter (All projects or one project); bars now cross zero correctly when profit turns negative.
- Analysis chart 7: columns named Indirect % in Contract / Actual / At Completion, each with its formula in full; legend aligned to the same names.

## 1.6.0 - 2026-11-16
- New **Analysis** tab (portfolio, from the P&L reports), two pages:
  - Profitability: profit bridge, VAC by project (Direct vs Indirect), margin erosion, overrun mix.
  - Performance & Schedule: CPI by project, overrun still to come, indirect cost ratios matrix, delay vs indirect VAC.
  - Summary cards and an auto-written key insight under every view; prints on A3 landscape.
- Charts library (ECharts 5.5.0) bundled into the app so it still works offline.

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
