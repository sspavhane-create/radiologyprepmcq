const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // This will match ' 40', '(40)', '<= 40', '> 40', 'FREE_LIMIT = 40' 
  // It won't match 'border-teal-500/40' because it's preceded by '/'
  content = content.replace(/(?<!\/)40/g, '15');
  
  // Now we also need to fix any string that says '४०' (Marathi 40)
  content = content.replace(/४०/g, '१५');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed', filePath);
}

fixFile('src/components/CategoryView.tsx');
fixFile('src/components/SearchInspectView.tsx');
