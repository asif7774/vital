#!/usr/bin/env node

/**
 * SVG Sprite Generator
 * 
 * This script helps generate SVG sprite files from individual SVG icon files.
 * It reads all SVG files from a directory and combines them into a single sprite.
 * 
 * Usage:
 *   node scripts/generate-svg-sprite.js [input-dir] [output-file]
 * 
 * Example:
 *   node scripts/generate-svg-sprite.js icons/ public/sprites/app-icons.svg
 * 
 * Or use npm script:
 *   npm run generate-sprite
 */

const fs = require('fs');
const path = require('path');

// Default values
const DEFAULT_INPUT_DIR = 'icons';
const DEFAULT_OUTPUT_FILE = 'public/sprites/app-icons.svg';

// Get command line arguments
const inputDir = process.argv[2] || DEFAULT_INPUT_DIR;
const outputFile = process.argv[3] || DEFAULT_OUTPUT_FILE;

// Ensure input directory exists
if (!fs.existsSync(inputDir)) {
  console.error(`❌ Input directory '${inputDir}' does not exist.`);
  console.log('Usage: node scripts/generate-svg-sprite.js [input-dir] [output-file]');
  process.exit(1);
}

// Find all SVG files in the input directory
const svgFiles = fs.readdirSync(inputDir)
  .filter(file => file.toLowerCase().endsWith('.svg'))
  .map(file => path.join(inputDir, file));

if (svgFiles.length === 0) {
  console.error(`❌ No SVG files found in '${inputDir}'.`);
  process.exit(1);
}

console.log(`📁 Found ${svgFiles.length} SVG files in '${inputDir}'`);

// SVG sprite header
const spriteHeader = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;">
  <!-- Generated SVG Sprite - ${new Date().toISOString()} -->
  <!-- Total Icons: ${svgFiles.length} -->
`;

// SVG sprite footer
const spriteFooter = `
</svg>`;

// Process each SVG file
let spriteContent = spriteHeader;
let processedCount = 0;

svgFiles.forEach((filePath, index) => {
  try {
    const fileName = path.basename(filePath, '.svg');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract viewBox from the SVG content
    const viewBoxMatch = fileContent.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
    
    // Extract the content inside the <svg> tags
    const contentMatch = fileContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
    if (!contentMatch) {
      console.warn(`⚠️  Could not parse SVG content from ${filePath}`);
      return;
    }
    
    const svgContent = contentMatch[1];
    
    // Clean up the content
    const cleanedContent = svgContent
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/>\s+</g, '><') // Remove whitespace between tags
      .trim();
    
    // Create symbol element
    const symbolId = fileName
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-') // Replace non-alphanumeric chars with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    
    const symbol = `  <symbol id="${symbolId}" viewBox="${viewBox}">
    ${cleanedContent}
  </symbol>

`;
    
    spriteContent += symbol;
    processedCount++;
    
    console.log(`✅ Processed: ${fileName} → ${symbolId}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

// Add footer
spriteContent += spriteFooter;

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write the sprite file
try {
  fs.writeFileSync(outputFile, spriteContent, 'utf8');
  console.log(`\n🎉 Successfully generated SVG sprite!`);
  console.log(`📄 Output file: ${outputFile}`);
  console.log(`📊 Processed: ${processedCount}/${svgFiles.length} icons`);
  
  // Show file size
  const stats = fs.statSync(outputFile);
  const fileSizeKB = (stats.size / 1024).toFixed(2);
  console.log(`📏 File size: ${fileSizeKB} KB`);
  
  // Show usage example
  console.log(`\n💡 Usage example:`);
  console.log(`   <SvgIcon name="icon-name" viewBox="0 0 24 24" width="24" height="24" />`);
  
} catch (error) {
  console.error(`❌ Error writing sprite file:`, error.message);
  process.exit(1);
}
