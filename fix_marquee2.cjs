const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/@keyframes marquee2[\s\S]*?\}\n/, "");
css = css.replace(/\.animate-marquee2[\s\S]*?\}\n/, "");
fs.writeFileSync('src/index.css', css, 'utf8');
