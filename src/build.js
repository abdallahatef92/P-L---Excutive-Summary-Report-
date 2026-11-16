// Builds one self-contained, offline HTML file from src/app.html + lib/.
// Usage: node src/build.js [output]   (default: docs/index.html, served by GitHub Pages)
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const out = process.argv[2] || path.join(root, "docs", "index.html");
let html = fs.readFileSync(path.join(__dirname, "app.html"), "utf8");
const lib = f => fs.readFileSync(path.join(root, "lib", f), "utf8").replace(/<\/script/gi, "<\/script");
html = html.replace("/*__EXCELJS__*/", () => lib("exceljs.min.js"));
html = html.replace("/*__ECHARTS__*/", () => lib("echarts.min.js"));
html = html.replace("/*__PDFJS__*/", () => lib("pdf.min.js")).replace("/*__PDFWORKER__*/", () => lib("pdf.worker.min.js"));
html = html.replace("__LOGO__", "data:image/jpeg;base64," + fs.readFileSync(path.join(root, "lib", "logo.jpg")).toString("base64"));
// version: package.json version + build date, shown in the top bar; also renames the offline cache
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const ver = pkg.version + " · " + new Date().toISOString().slice(0, 10);
html = html.replace(/__VERSION__/g, ver);
const sw = path.join(root, "docs", "sw.js");
if (fs.existsSync(sw)) fs.writeFileSync(sw, fs.readFileSync(sw, "utf8").replace(/const CACHE = "[^"]*";/, 'const CACHE = "project-reports-' + pkg.version + '";'));
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log("built", out, html.length, "bytes");
