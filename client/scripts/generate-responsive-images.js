const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/responsive');

// Image configurations
const imageConfigs = {
  hero: {
    sizes: {
      desktop: { width: 1920, height: 1080, quality: 75 },
      tablet: { width: 1024, height: 576, quality: 80 },
      mobile: { width: 640, height: 360, quality: 85 }
    },
    fit: 'cover'
  },
  regular: {
    sizes: {
      large: { width: 1280, height: 720, quality: 75 },
      medium: { width: 800, height: 450, quality: 80 },
      small: { width: 400, height: 225, quality: 85 }
    },
    fit: 'inside'
  }
};

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const processImage = async (inputPath, isHero = false) => {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const config = isHero ? imageConfigs.hero : imageConfigs.regular;
  
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Process each size
    for (const [size, settings] of Object.entries(config.sizes)) {
      // Calculate dimensions maintaining aspect ratio
      const aspectRatio = metadata.width / metadata.height;
      const width = Math.min(settings.width, metadata.width);
      const height = Math.round(width / aspectRatio);
      
      const sharpInstance = sharp(inputPath)
        .resize({
          width,
          height,
          fit: config.fit,
          position: 'center'
        });

      // Generate AVIF version (highest quality, smallest size)
      await sharpInstance
        .clone()
        .avif({
          quality: settings.quality,
          effort: 9,
          chromaSubsampling: '4:4:4'
        })
        .toFile(path.join(outputDir, `${filename}-${size}.avif`));
      
      // Generate WebP version
      await sharpInstance
        .clone()
        .webp({
          quality: settings.quality,
          effort: 6,
          preset: 'photo',
          smartSubsample: true,
          reductionEffort: 6
        })
        .toFile(path.join(outputDir, `${filename}-${size}.webp`));
      
      // Generate optimized JPEG version
      await sharpInstance
        .jpeg({
          quality: settings.quality,
          progressive: true,
          mozjpeg: true,
          trellisQuantisation: true,
          overshootDeringing: true,
          optimizeScans: true,
          optimizeCoding: true,
          quantisationTable: 3,
          chromaSubsampling: '4:4:4'
        })
        .toFile(path.join(outputDir, `${filename}-${size}.jpg`));
      
      console.log(`✓ Generated ${size} versions of ${filename}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error);
  }
};

const processImages = async () => {
  console.log('Starting responsive image generation...');
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const isHero = file.toLowerCase().includes('hero') || file === 'event-security.jpg';
      await processImage(inputPath, isHero);
    }
  }
  
  console.log('Responsive image generation complete!');
};

// Run the script
processImages(); 