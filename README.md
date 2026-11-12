# Project Reports

One offline HTML page that reads the monthly **Project P&L Report** and **Executive Summary (Cost Report)** PDFs, detects each project, and shows:

- **P&L Report** (prints A4 portrait) and **Executive Summary** (prints A3 landscape) per project
- **Portfolio** summary of all P&L projects (prints A4 landscape, Excel export)
- **P&L vs Executive Summary check**: opened from the edit (pencil) panel only, with an Excel export

PDFs are read inside your browser. Nothing is uploaded anywhere. Loaded data is kept in the browser's local storage.

## Use it

- **Online:** open the GitHub Pages site for this repo.
- **Offline:** download `docs/index.html` (or the Pages page with *Save as*) and open it in Chrome or Edge.

The download icon in the app saves a copy with the loaded data inside, so you can send it to someone.

## Build

You need Node.js. No packages to install.

```bash
npm run build
```

This writes `docs/index.html`, the single self-contained file (pdf.js, ExcelJS and the logo are embedded).

| Path | What it is |
|---|---|
| `src/app.html` | The app: layout, PDF parsing, rendering, print and Excel export |
| `src/build.js` | Inlines the libraries and logo into one HTML file |
| `lib/` | pdf.js 3.11.174, ExcelJS 4.4.0, company logo |
| `docs/index.html` | Built output served by GitHub Pages (branch `main`, folder `/docs`) |

Commit the rebuilt `docs/index.html` after every change to `src/`.
