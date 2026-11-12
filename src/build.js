// Builds one self-contained, offline HTML file from src/app.html + lib/.
// Usage: node src/build.js [output]   (default: docs/index.html, served by GitHub Pages)
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const out = process.argv[2] || path.join(root, "docs", "index.html");
let html = fs.readFileSync(path.join(__dirname, "app.html"), "utf8");
const lib = f => fs.readFileSync(path.join(root, "lib", f), "utf8").replace(/<\/script/gi, "<\/script");
html = html.replace("/*__EXCELJS__*/", () => lib("exceljs.min.js"));
html = html.replace("/*__PDFJS__*/", () => lib("pdf.min.js")).replace("/*__PDFWORKER__*/", () => lib("pdf.worker.min.js"));
html = html.replace("__LOGO__", "data:image/jpeg;base64," + fs.readFileSync(path.join(root, "lib", "logo.jpg")).toString("base64"));
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log("built", out, html.length, "bytes");
