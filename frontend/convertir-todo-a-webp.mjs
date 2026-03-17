import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Para usar __dirname con ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directorios a convertir
const carpetasAConvertir = [
  path.join(__dirname, 'public/images'),
  path.join(__dirname, 'src/images/about'),
  path.join(__dirname, 'src/images/cobertura'),
  path.join(__dirname, 'src/images/home'),
];

function convertirDirectorio(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      convertirDirectorio(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      const base = path.basename(file, ext);

      // Solo convierte imágenes
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

// Ejecutar conversión para todas las carpetas
carpetasAConvertir.forEach(convertirDirectorio);
