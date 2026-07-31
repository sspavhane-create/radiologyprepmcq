const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/@keyframes marquee \{\s*0% \{\s*transform: translateX\(0%\);\s*\}\s*100% \{\s*transform: translateX\(-50%\);\s*\}\s*\}/, 
`@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0%); }
}`);

css = css.replace(/\.animate-marquee \{\s*animation: marquee 25s linear infinite;\s*\}/, 
`.animate-marquee {
  animation: marquee 25s linear infinite;
}
.animate-marquee2 {
  animation: marquee2 25s linear infinite;
}`);

fs.writeFileSync('src/index.css', css, 'utf8');
