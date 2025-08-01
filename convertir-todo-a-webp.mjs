import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Esto es para poder usar __dirname con ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = path.join(__dirname, 'public/images');

function convertirDirectorio(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      convertirDirectorio(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      const base = path.basename(file, ext);

      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const output = path.join(dir, `${base}.webp`);

        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(output)
          .then(() => console.log(`✅ ${fullPath} → ${output}`))
          .catch(err => console.error(`❌ Error con ${fullPath}:`, err));
      }
    }
  });
}

convertirDirectorio(baseDir);
