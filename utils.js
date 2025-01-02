const bigInt = require('big-integer');

function convertFromBase(value, base) {
  if (base <= 10) {
    return bigInt(value.toString(), base);
  }

  const digits = '0123456789abcdefghijklmnopqrstuvwxyz';
  let result = bigInt(0);
  const multiplier = bigInt(base);

  for (let i = 0; i < value.length; i++) {
    const digit = digits.indexOf(value[i].toLowerCase());
    if (digit === -1) throw new Error(`Invalid digit ${value[i]} for base ${base}`);
    result = result.multiply(multiplier).add(digit);
  }

  return result;
}

function decodePoints(data) {
  const points = [];
  const { keys: { n, k }, ...rest } = data;

  for (let i = 1; i <= n; i++) {
    if (rest[i]) {
      const { base, value } = rest[i];
      const x = bigInt(i);
      const y = convertFromBase(value, parseInt(base));
      points.push({ x, y });
    }
  }

  return { points, k };
}

module.exports = {
  convertFromBase,
  decodePoints
};