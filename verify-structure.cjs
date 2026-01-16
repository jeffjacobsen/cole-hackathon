const fs = require('fs');
const path = require('path');

const requiredDirs = [
  'src/components',
  'src/components/sections',
  'src/components/ui',
  'src/assets',
  'src/styles',
  'src/lib'
];

const requiredFiles = [
  'src/components/sections/index.ts',
  'src/components/ui/index.ts',
  'src/lib/utils.ts',
  'src/styles/index.ts'
];

console.log('✅ Verifying project folder structure...\n');

let allPassed = true;

// Check directories
console.log('📁 Checking directories:');
requiredDirs.forEach(dir => {
  const exists = fs.existsSync(dir);
  console.log(`  ${exists ? '✅' : '❌'} ${dir}`);
  if (!exists) allPassed = false;
});

// Check files
console.log('\n📄 Checking index files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allPassed = false;
});

if (allPassed) {
  console.log('\n✅ All folder structure requirements met!');
  process.exit(0);
} else {
  console.log('\n❌ Some requirements are missing');
  process.exit(1);
}
