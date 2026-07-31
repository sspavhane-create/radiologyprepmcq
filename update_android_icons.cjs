const { execSync } = require('child_process');
const fs = require('fs');

const mipmaps = [
  { dir: 'android/app/src/main/res/mipmap-mdpi', size: 48 },
  { dir: 'android/app/src/main/res/mipmap-hdpi', size: 72 },
  { dir: 'android/app/src/main/res/mipmap-xhdpi', size: 96 },
  { dir: 'android/app/src/main/res/mipmap-xxhdpi', size: 144 },
  { dir: 'android/app/src/main/res/mipmap-xxxhdpi', size: 192 }
];

mipmaps.forEach(({ dir, size }) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  execSync(`ffmpeg -i public/icon.svg -s ${size}x${size} -y ${dir}/ic_launcher.png`);
  execSync(`ffmpeg -i public/icon.svg -s ${size}x${size} -y ${dir}/ic_launcher_round.png`);
  execSync(`ffmpeg -i public/icon.svg -s ${size}x${size} -y ${dir}/ic_launcher_foreground.png`);
});

const splashDirs = [
  'android/app/src/main/res/drawable',
  'android/app/src/main/res/drawable-port-mdpi',
  'android/app/src/main/res/drawable-port-hdpi',
  'android/app/src/main/res/drawable-port-xhdpi',
  'android/app/src/main/res/drawable-port-xxhdpi',
  'android/app/src/main/res/drawable-port-xxxhdpi'
];

splashDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  execSync(`ffmpeg -i public/icon.svg -s 512x512 -y ${dir}/splash.png`);
});

console.log('Android mipmaps and splash icons updated successfully!');
