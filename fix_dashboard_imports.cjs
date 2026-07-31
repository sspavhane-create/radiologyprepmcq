const fs = require('fs');

let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

// replace React import
content = content.replace("import React from 'react';", "import React, { useState, useEffect } from 'react';");

// add Unlock to lucide-react imports
content = content.replace("Award\n} from 'lucide-react';", "Award,\n  Unlock\n} from 'lucide-react';");

// insert the local imports
const localImports = `
import { getIsPremiumUnlocked } from '../lib/storage';
import { PremiumUnlockModal } from './PremiumUnlockModal';
`;
content = content.replace("import { CATEGORIES, OFFICIAL_EXAM_INFO } from '../data/initialQuestions';", "import { CATEGORIES, OFFICIAL_EXAM_INFO } from '../data/initialQuestions';" + localImports);

fs.writeFileSync('src/components/Dashboard.tsx', content, 'utf8');
