const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// 画像最適化設定（AVIF対応）
const IMAGE_CONFIG = {
  works: {
    widths: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['avif', 'webp'],
    quality: {
      avif: 80,
      webp: 85
    }
  },
  logo: {
    widths: [150, 300],
    formats: ['avif', 'webp'],
    quality: {
      avif: 90,
      webp: 90
    }
  },
  general: {
    widths: [640, 750, 828, 1080, 1200, 1920],
    formats: ['avif', 'webp'],
    quality: {
      avif: 80,
      webp: 85
    }
  }
};

async function optimizeImage(inputPath, width, format, quality) {
  try {
    const outputName = path.basename(inputPath, path.extname(inputPath));
    const outputDir = path.dirname(inputPath);
    const outputPath = path.join(outputDir, `${outputName}-${width}.${format}`);
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // 元画像より大きいサイズは作らない
    if (metadata.width < width) {
      return null;
    }
    
    let resizeOptions = { width };
    
    if (format === 'avif') {
      await image
        .resize(resizeOptions)
        .avif({ quality, effort: 4 })
        .toFile(outputPath);
    } else if (format === 'webp') {
      await image
        .resize(resizeOptions)
        .webp({ quality })
        .toFile(outputPath);
    }
    
    const outputStats = await fs.stat(outputPath);
    console.log(`  ✓ ${outputName}-${width}.${format} (${(outputStats.size / 1024).toFixed(1)}KB)`);
    
    return outputPath;
  } catch (error) {
    console.error(`  ✗ Failed to create ${width}px ${format}:`, error.message);
    return null;
  }
}

async function generateResponsiveImages(inputPath, config) {
  const results = [];
  const fileName = path.basename(inputPath, path.extname(inputPath));
  
  console.log(`\n📸 Processing: ${fileName}`);
  
  for (const format of config.formats) {
    console.log(`  Format: ${format}`);
    for (const width of config.widths) {
      const result = await optimizeImage(
        inputPath, 
        width, 
        format, 
        config.quality[format]
      );
      if (result) {
        results.push(result);
      }
    }
  }
  
  // オリジナルフォーマットも最適化（フルサイズ）
  const originalFormat = path.extname(inputPath).slice(1);
  if (originalFormat === 'png' || originalFormat === 'jpg' || originalFormat === 'jpeg') {
    const metadata = await sharp(inputPath).metadata();
    for (const format of config.formats) {
      const outputName = path.basename(inputPath, path.extname(inputPath));
      const outputDir = path.dirname(inputPath);
      const outputPath = path.join(outputDir, `${outputName}.${format}`);
      
      console.log(`  Creating full-size ${format}...`);
      
      if (format === 'avif') {
        await sharp(inputPath)
          .avif({ quality: config.quality.avif, effort: 4 })
          .toFile(outputPath);
      } else if (format === 'webp') {
        await sharp(inputPath)
          .webp({ quality: config.quality.webp })
          .toFile(outputPath);
      }
      
      const stats = await fs.stat(outputPath);
      console.log(`  ✓ ${outputName}.${format} (${(stats.size / 1024).toFixed(1)}KB)`);
      results.push(outputPath);
    }
  }
  
  return results;
}

async function processDirectory(dirPath, config) {
  const files = await fs.readdir(dirPath);
  const allResults = [];
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);
    
    if (stats.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
      const results = await generateResponsiveImages(filePath, config);
      allResults.push(...results);
    }
  }
  
  return allResults;
}

async function main() {
  console.log('🚀 Starting AVIF/WebP responsive image generation...\n');
  console.log('This will create multiple sizes for srcset optimization');
  console.log('='.repeat(60));
  
  const publicPath = path.join(__dirname, '..', 'public');
  
  // Works画像の処理
  console.log('\n📁 Processing works images...');
  const worksPath = path.join(publicPath, 'images', 'works');
  try {
    await processDirectory(worksPath, IMAGE_CONFIG.works);
  } catch (error) {
    console.log('Works directory not found or error:', error.message);
  }
  
  // ロゴの処理
  console.log('\n📁 Processing logo...');
  const logoPath = path.join(publicPath, 'logo.png');
  try {
    await generateResponsiveImages(logoPath, IMAGE_CONFIG.logo);
  } catch (error) {
    console.log('Logo not found or error:', error.message);
  }
  
  // その他の画像の処理
  console.log('\n📁 Processing other images...');
  const imagesPath = path.join(publicPath, 'images');
  try {
    const files = await fs.readdir(imagesPath);
    for (const file of files) {
      const filePath = path.join(imagesPath, file);
      const stats = await fs.stat(filePath);
      
      if (stats.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
        await generateResponsiveImages(filePath, IMAGE_CONFIG.general);
      }
    }
  } catch (error) {
    console.log('Images directory error:', error.message);
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ Responsive image generation complete!');
  console.log('\n💡 Next steps:');
  console.log('1. Update your components to use <picture> element with srcset');
  console.log('2. Use AVIF as primary format with WebP fallback');
  console.log('3. Implement proper sizes attribute for responsive images');
}

// 実行
try {
  require.resolve('sharp');
  main().catch(console.error);
} catch (error) {
  console.log('⚠️  Sharp is not installed.');
  console.log('Sharp should already be installed. If not, run: npm install --save-dev sharp');
}