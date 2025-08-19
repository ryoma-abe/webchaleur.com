const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// 画像最適化設定
const IMAGE_CONFIG = {
  works: {
    width: 800,
    quality: 85,
    format: 'webp'
  },
  logo: {
    width: 300,
    quality: 90,
    format: 'webp'
  },
  general: {
    width: 1200,
    quality: 85,
    format: 'webp'
  }
};

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // アスペクト比を維持しながらリサイズ
    let resizeOptions = {};
    if (metadata.width > config.width) {
      resizeOptions = { width: config.width };
    }
    
    await image
      .resize(resizeOptions)
      .webp({ quality: config.quality })
      .toFile(outputPath);
    
    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);
    
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${reduction}% reduction)`);
    
    return { 
      original: inputStats.size, 
      optimized: outputStats.size,
      reduction: parseFloat(reduction)
    };
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dirPath, config) {
  const files = await fs.readdir(dirPath);
  const results = [];
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);
    
    if (stats.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
      const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const outputPath = path.join(dirPath, outputName);
      
      const result = await optimizeImage(filePath, outputPath, config);
      if (result) {
        results.push(result);
      }
    }
  }
  
  return results;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const publicPath = path.join(__dirname, '..', 'public');
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  // Works画像の最適化
  console.log('📁 Optimizing works images...');
  const worksPath = path.join(publicPath, 'images', 'works');
  try {
    const worksResults = await processDirectory(worksPath, IMAGE_CONFIG.works);
    worksResults.forEach(r => {
      totalOriginal += r.original;
      totalOptimized += r.optimized;
    });
  } catch (error) {
    console.log('Works directory not found, skipping...');
  }
  
  // ロゴの最適化
  console.log('\n📁 Optimizing logo...');
  const logoPath = path.join(publicPath, 'logo.png');
  try {
    const logoOutput = path.join(publicPath, 'logo.webp');
    const logoResult = await optimizeImage(logoPath, logoOutput, IMAGE_CONFIG.logo);
    if (logoResult) {
      totalOriginal += logoResult.original;
      totalOptimized += logoResult.optimized;
    }
  } catch (error) {
    console.log('Logo not found, skipping...');
  }
  
  // その他の画像の最適化
  console.log('\n📁 Optimizing other images...');
  const imagesPath = path.join(publicPath, 'images');
  try {
    const imageFiles = await fs.readdir(imagesPath);
    for (const file of imageFiles) {
      const filePath = path.join(imagesPath, file);
      const stats = await fs.stat(filePath);
      
      if (stats.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
        const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const outputPath = path.join(imagesPath, outputName);
        
        const result = await optimizeImage(filePath, outputPath, IMAGE_CONFIG.general);
        if (result) {
          totalOriginal += result.original;
          totalOptimized += result.optimized;
        }
      }
    }
  } catch (error) {
    console.log('Images directory error:', error.message);
  }
  
  // 結果サマリー
  console.log('\n' + '='.repeat(50));
  console.log('✨ Optimization Complete!');
  console.log('='.repeat(50));
  console.log(`Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized total: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total reduction: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log('\n💡 Next steps:');
  console.log('1. Update image references in your code to use .webp files');
  console.log('2. Keep original files as fallback for older browsers');
  console.log('3. Consider using <picture> element for progressive enhancement');
}

// sharp がインストールされているか確認
try {
  require.resolve('sharp');
  main().catch(console.error);
} catch (error) {
  console.log('⚠️  Sharp is not installed. Installing...');
  console.log('Run: npm install --save-dev sharp');
  console.log('Then run this script again: node scripts/optimize-images.js');
}