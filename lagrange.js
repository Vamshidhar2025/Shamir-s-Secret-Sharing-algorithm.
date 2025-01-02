const bigInt = require('big-integer');
const math = require('mathjs');

function lagrangeInterpolation(points, k) {
  // Convert BigInt points to regular numbers for math.js matrix operations
  const xValues = points.slice(0, k).map(p => Number(p.x.toString()));
  const yValues = points.slice(0, k).map(p => Number(p.y.toString()));

  // Create Vandermonde matrix
  const matrix = [];
  for (let i = 0; i < k; i++) {
    const row = [];
    for (let j = k - 1; j >= 0; j--) {
      row.push(Math.pow(xValues[i], j));
    }
    matrix.push(row);
  }

  // Solve the system of equations
  const coefficients = math.lusolve(matrix, yValues);
  
  // The constant term is the last coefficient
  return Math.round(coefficients[coefficients.length - 1]);
}

module.exports = {
  lagrangeInterpolation
};