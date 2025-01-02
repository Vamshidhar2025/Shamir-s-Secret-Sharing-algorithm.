const fs = require('fs');
const { decodePoints } = require('./utils');
const { lagrangeInterpolation } = require('./lagrange');

// Read and process test case 1
const testCase1 = JSON.parse(fs.readFileSync('testcase1.json', 'utf8'));
const { points: points1, k: k1 } = decodePoints(testCase1);
const secret1 = lagrangeInterpolation(points1, k1);

// Read and process test case 2
const testCase2 = JSON.parse(fs.readFileSync('testcase2.json', 'utf8'));
const { points: points2, k: k2 } = decodePoints(testCase2);
const secret2 = lagrangeInterpolation(points2, k2);

console.log('Secret for Test Case 1:', secret1);
console.log('Secret for Test Case 2:', secret2);