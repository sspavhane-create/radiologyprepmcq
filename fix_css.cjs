const fs = require('fs');

const css = `@import "tailwindcss";

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}
`;

fs.writeFileSync('src/index.css', css, 'utf8');
