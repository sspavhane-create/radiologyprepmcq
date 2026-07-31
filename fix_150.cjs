const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix colors and weights that were 400 but became 150
  content = content.replace(/-150\b/g, '-400');
  
  // Did I replace 40 in `w-40` or `h-40`? 
  // Let's check. Yes, `w-40` -> `w-15`, `h-40` -> `h-15`. We should restore `w-15` to `w-40` if it was meant to be 40.
  // Actually, wait, were there any `w-40` in CategoryView?
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed colors', filePath);
}

fixFile('src/components/CategoryView.tsx');
fixFile('src/components/SearchInspectView.tsx');
