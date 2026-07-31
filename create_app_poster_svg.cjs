const fs = require('fs');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#040814" />
      <stop offset="50%" stop-color="#080e22" />
      <stop offset="100%" stop-color="#02040b" />
    </linearGradient>

    <!-- Gold Frame Gradient -->
    <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="25%" stop-color="#eab308" />
      <stop offset="50%" stop-color="#ca8a04" />
      <stop offset="75%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#a16207" />
    </linearGradient>

    <!-- Yellow Gold Text Gradient -->
    <linearGradient id="goldText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb" />
      <stop offset="20%" stop-color="#fde047" />
      <stop offset="60%" stop-color="#eab308" />
      <stop offset="100%" stop-color="#ca8a04" />
    </linearGradient>

    <!-- White Text Gradient -->
    <linearGradient id="whiteText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="70%" stop-color="#f1f5f9" />
      <stop offset="100%" stop-color="#cbd5e1" />
    </linearGradient>

    <!-- Cyan Skeleton Glow -->
    <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>

    <!-- XRay Blue Filter -->
    <linearGradient id="xrayScreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000000" flood-opacity="0.9" />
    </filter>

    <filter id="glowEffect">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Main Rounded Rectangle Canvas -->
  <rect x="12" y="12" width="1000" height="1000" rx="160" fill="url(#bgGrad)" stroke="url(#goldBorder)" stroke-width="20" />
  
  <!-- Inner Gold Hairline Frame -->
  <rect x="28" y="28" width="968" height="968" rx="144" fill="none" stroke="#fde047" stroke-width="3" stroke-opacity="0.6" />

  <!-- TOP HEADER -->
  <!-- Radiation Symbol Left -->
  <g transform="translate(65, 48)">
    <circle cx="70" cy="70" r="68" fill="#facc15" stroke="#ca8a04" stroke-width="4" />
    <circle cx="70" cy="70" r="16" fill="#000" />
    <!-- Radiation blades -->
    <path d="M 70 70 L 40 22 A 54 54 0 0 1 100 22 Z" fill="#000" />
    <path d="M 70 70 L 112 95 A 54 54 0 0 1 82 122 Z" fill="#000" />
    <path d="M 70 70 L 28 95 A 54 54 0 0 1 58 122 Z" fill="#000" opacity="0" />
    <path d="M 70 70 L 28 95 A 54 54 0 0 1 28 45 Z" fill="#000" />
    <!-- Re-draw accurate radiation blades -->
    <g fill="#000">
      <path d="M 70 70 L 42 22 A 55 55 0 0 1 98 22 Z" />
      <path d="M 70 70 L 112 94 A 55 55 0 0 1 84 122 Z" />
      <path d="M 70 70 L 28 122 A 55 55 0 0 1 0 70 Z" opacity="0"/>
      <path d="M 70 70 L 28 94 A 55 55 0 0 1 56 122 Z" />
    </g>
    <circle cx="70" cy="70" r="14" fill="#facc15" />
    <circle cx="70" cy="70" r="8" fill="#000" />
  </g>

  <!-- Author Name Header -->
  <g transform="translate(512, 50)" text-anchor="middle">
    <!-- Lines beside name -->
    <line x1="-260" y1="42" x2="-140" y2="42" stroke="#eab308" stroke-width="3" />
    <line x1="140" y1="42" x2="260" y2="42" stroke="#eab308" stroke-width="3" />
    
    <text x="0" y="32" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="28" fill="#ffffff" letter-spacing="2">Mr.</text>
    <text x="0" y="78" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="52" fill="url(#goldText)" letter-spacing="1" filter="url(#shadow)">Shankar Pavhane</text>
  </g>

  <!-- Top Right X-Ray Film Box -->
  <g transform="translate(780, 42)">
    <rect x="0" y="0" width="170" height="170" rx="16" fill="url(#xrayScreen)" stroke="#38bdf8" stroke-width="4" filter="url(#shadow)"/>
    <!-- Ribcage x-ray scan lines -->
    <path d="M 85 20 L 85 150 M 85 40 Q 40 45 35 60 M 85 40 Q 130 45 135 60 M 85 65 Q 35 70 30 85 M 85 65 Q 135 70 140 85 M 85 90 Q 38 95 35 110 M 85 90 Q 132 95 135 110" stroke="#bae6fd" stroke-width="3.5" fill="none" opacity="0.85" />
  </g>

  <!-- MIDDLE SECTION GRAPHICS -->
  <!-- Left: Medical X-Ray Tube Machine Graphic -->
  <g transform="translate(30, 210)" opacity="0.95">
    <!-- Table Base -->
    <rect x="20" y="190" width="220" height="25" rx="6" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
    <rect x="35" y="215" width="190" height="110" fill="#94a3b8" stroke="#334155" stroke-width="3"/>
    <rect x="15" y="170" width="230" height="20" rx="4" fill="#f8fafc" stroke="#64748b" stroke-width="3"/>
    <!-- Column & Arm -->
    <rect x="70" y="40" width="30" height="130" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
    <rect x="90" y="60" width="100" height="24" rx="6" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
    <!-- Tube Head -->
    <rect x="160" y="45" width="60" height="55" rx="10" fill="#38bdf8" stroke="#0284c7" stroke-width="4"/>
    <circle cx="190" cy="72" r="12" fill="#fde047"/>
  </g>

  <!-- Right: Glowing Blue Skeleton Profile -->
  <g transform="translate(770, 220)" filter="url(#glowEffect)">
    <!-- Skull outline -->
    <path d="M 80 20 C 130 20 160 50 160 100 C 160 130 145 150 130 160 L 130 185 C 100 185 80 180 70 165 C 50 150 40 120 40 90 C 40 45 60 20 80 20 Z" fill="none" stroke="#38bdf8" stroke-width="5" />
    <!-- Eye socket & nasal area -->
    <ellipse cx="115" cy="85" rx="18" ry="24" fill="#0369a1" stroke="#7dd3fc" stroke-width="3"/>
    <path d="M 125 115 L 110 130 L 130 130 Z" fill="#7dd3fc"/>
    <!-- Spine vertebrae line -->
    <path d="M 75 190 Q 60 230 75 270 Q 90 310 75 350" fill="none" stroke="#38bdf8" stroke-width="8" stroke-dasharray="12,6"/>
    <!-- Ribs connected -->
    <path d="M 75 220 Q 20 230 10 260 M 75 245 Q 15 255 10 285 M 75 270 Q 20 280 15 310" fill="none" stroke="#0284c7" stroke-width="4"/>
  </g>

  <!-- MAIN TITLE TYPOGRAPHY (CENTER) -->
  <!-- "RADIOGRAPHY" -->
  <g transform="translate(512, 215)" text-anchor="middle">
    <!-- 3D Shadow layer -->
    <text x="0" y="10" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="102" fill="#000000" letter-spacing="4">RADIOGRAPHY</text>
    <text x="0" y="0" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="102" fill="url(#whiteText)" stroke="#0f172a" stroke-width="6" letter-spacing="4" filter="url(#shadow)">RADIOGRAPHY</text>
  </g>

  <!-- "PREP" -->
  <g transform="translate(512, 370)" text-anchor="middle">
    <!-- 3D Shadow layer -->
    <text x="0" y="12" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="155" fill="#78350f" letter-spacing="8">PREP</text>
    <text x="0" y="0" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="155" fill="url(#goldText)" stroke="#451a03" stroke-width="8" letter-spacing="8" filter="url(#shadow)">PREP</text>
  </g>

  <!-- Blue Pulse Line across center -->
  <path d="M 120 405 L 380 405 L 405 380 L 430 435 L 455 370 L 480 420 L 505 405 L 900 405" fill="none" stroke="#38bdf8" stroke-width="6" filter="url(#glowEffect)" />

  <!-- "3000+" -->
  <g transform="translate(512, 580)" text-anchor="middle">
    <!-- Shadow -->
    <text x="0" y="14" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="210" fill="#000000" letter-spacing="2">3000<tspan fill="#eab308">+</tspan></text>
    <!-- Main -->
    <text x="0" y="0" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="210" fill="url(#whiteText)" stroke="#0f172a" stroke-width="10" letter-spacing="2" filter="url(#shadow)">3000<tspan fill="url(#goldText)" stroke="#854d0e">+=</tspan></text>
  </g>

  <!-- "MCQ" -->
  <g transform="translate(512, 730)" text-anchor="middle">
    <!-- Shadow -->
    <text x="0" y="14" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="165" fill="#78350f" letter-spacing="6">MCQ</text>
    <text x="0" y="0" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-size="165" fill="url(#goldText)" stroke="#451a03" stroke-width="10" letter-spacing="6" filter="url(#shadow)">MCQ</text>
  </g>

  <!-- BOTTOM FEATURE BADGES GRID (6 COLS) -->
  <g transform="translate(50, 775)">
    <!-- Outer container box -->
    <rect x="0" y="0" width="924" height="150" rx="20" fill="#070d1e" stroke="#1e293b" stroke-width="4" filter="url(#shadow)" />
    
    <!-- 5 Vertical Dividers -->
    <line x1="154" y1="15" x2="154" y2="135" stroke="#334155" stroke-width="2" />
    <line x1="308" y1="15" x2="308" y2="135" stroke="#334155" stroke-width="2" />
    <line x1="462" y1="15" x2="462" y2="135" stroke="#334155" stroke-width="2" />
    <line x1="616" y1="15" x2="616" y2="135" stroke="#334155" stroke-width="2" />
    <line x1="770" y1="15" x2="770" y2="135" stroke="#334155" stroke-width="2" />

    <!-- Col 1: 30 Chapters -->
    <g transform="translate(77, 20)" text-anchor="middle">
      <text x="0" y="32" font-size="34">📖</text>
      <text x="0" y="72" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="28" fill="#fde047">30</text>
      <text x="0" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="15" fill="#ffffff" letter-spacing="1">CHAPTERS</text>
    </g>

    <!-- Col 2: Mock Tests -->
    <g transform="translate(231, 20)" text-anchor="middle">
      <text x="0" y="32" font-size="34">📋</text>
      <text x="0" y="72" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="18" fill="#fde047" letter-spacing="1">MOCK</text>
      <text x="0" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="15" fill="#ffffff" letter-spacing="1">TESTS</text>
    </g>

    <!-- Col 3: Detailed Answers -->
    <g transform="translate(385, 20)" text-anchor="middle">
      <text x="0" y="32" font-size="34">💡</text>
      <text x="0" y="72" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="16" fill="#fde047" letter-spacing="0.5">DETAILED</text>
      <text x="0" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="15" fill="#ffffff" letter-spacing="1">ANSWERS</text>
    </g>

    <!-- Col 4: Progress Tracking -->
    <g transform="translate(539, 20)" text-anchor="middle">
      <text x="0" y="32" font-size="34">📈</text>
      <text x="0" y="72" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="16" fill="#38bdf8" letter-spacing="0.5">PROGRESS</text>
      <text x="0" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="15" fill="#ffffff" letter-spacing="1">TRACKING</text>
    </g>

    <!-- Col 5: Lifetime Updates -->
    <g transform="translate(693, 20)" text-anchor="middle">
      <text x="0" y="32" font-size="34">🔄</text>
      <text x="0" y="72" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="16" fill="#c084fc" letter-spacing="0.5">LIFETIME</text>
      <text x="0" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="15" fill="#ffffff" letter-spacing="1">UPDATES</text>
    </g>

    <!-- Col 6: 1 Device Secure Access -->
    <g transform="translate(847, 20)" text-anchor="middle">
      <text x="0" y="32" font-size="34">🛡️</text>
      <text x="0" y="72" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="16" fill="#38bdf8" letter-spacing="0.5">1 DEVICE</text>
      <text x="0" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="13" fill="#ffffff" letter-spacing="0.5">SECURE ACCESS</text>
    </g>
  </g>

  <!-- BOTTOM RIBBON BANNER -->
  <g transform="translate(512, 955)" text-anchor="middle">
    <path d="M -280 -25 L 280 -25 L 260 20 L -260 20 Z" fill="url(#goldText)" stroke="#ca8a04" stroke-width="4" filter="url(#shadow)" />
    <text x="0" y="6" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="24" fill="#0f172a" letter-spacing="3">★ YOUR SUCCESS, OUR MISSION ★</text>
  </g>
</svg>`;

fs.writeFileSync('public/icon.svg', svgContent, 'utf8');
fs.writeFileSync('public/app-poster.svg', svgContent, 'utf8');
console.log('Successfully written public/icon.svg and public/app-poster.svg');
