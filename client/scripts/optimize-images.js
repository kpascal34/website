const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize({
        width: 1920,
        height: 1080,
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 60,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    // Create WebP version
    await sharp(inputPath)
      .resize({
        width: 1920,
        height: 1080,
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({
        quality: 70,
        effort: 6
      })
      .toFile(outputPath.replace(/\.[^.]+$/, '.webp'));

    console.log(`✓ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${path.basename(inputPath)}:`, error);
  }
};

const processImages = async () => {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      await optimizeImage(inputPath, outputPath);
    }
  }
};

processImages().then(() => {
  console.log('Image optimization complete!');
}); 