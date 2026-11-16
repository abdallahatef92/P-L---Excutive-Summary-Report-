# Changelog

The version shows in the app's top bar (next to "Project Reports"), with the build date.
To release: bump `version` in `package.json`, run `npm run build`, add a line here, commit and push.

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
