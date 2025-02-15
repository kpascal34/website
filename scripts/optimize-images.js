const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '../public/images');
const srcAssetsDir = path.join(__dirname, '../src/assets');
const outputPublicDir = path.join(__dirname, '../public/images/optimized');
const outputSrcDir = path.join(__dirname, '../src/assets/optimized');

// Create output directories if they don't exist
[outputPublicDir, outputSrcDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Optimization settings
const jpgOptions = {
  quality: 80,
  chromaSubsampling: '4:4:4'
};

const pngOptions = {
  quality: 80,
  compressionLevel: 9
};

// Function to optimize an image
async function optimizeImage(inputPath, outputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const image = sharp(inputPath);
  
  // Get image metadata
  const metadata = await image.metadata();
  
  // Resize if width is greater than 1920px
  if (metadata.width > 1920) {
    image.resize(1920, null, {
      withoutEnlargement: true,
      fit: 'inside'
    });
  }

  // Optimize based on file type
  if (ext === '.jpg' || ext === '.jpeg') {
    await image
      .jpeg(jpgOptions)
      .toFile(outputPath);
  } else if (ext === '.png') {
    await image
      .png(pngOptions)
      .toFile(outputPath);
  }

  // Get file sizes for comparison
  const originalSize = fs.statSync(inputPath).size;
  const optimizedSize = fs.statSync(outputPath).size;
  const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);

  console.log(`Optimized ${path.basename(inputPath)}:`);
  console.log(`Original: ${(originalSize / 1024).toFixed(2)}KB`);
  console.log(`Optimized: ${(optimizedSize / 1024).toFixed(2)}KB`);
  console.log(`Saved: ${savings}%\n`);
}

// Process all images in public/images
async function processDirectory(inputDir, outputDir) {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Skip if not an image or is DS_Store
    if (!['.jpg', '.jpeg', '.png'].includes(ext) || file === '.DS_Store') {
      continue;
    }
    
    const outputPath = path.join(outputDir, file);
    await optimizeImage(inputPath, outputPath);
  }
}

// Run optimization
async function run() {
  console.log('Starting image optimization...\n');
  
  try {
    await processDirectory(publicImagesDir, outputPublicDir);
    await processDirectory(srcAssetsDir, outputSrcDir);
    console.log('Image optimization completed successfully!');
  } catch (error) {
    console.error('Error during image optimization:', error);
  }
}

run(); 