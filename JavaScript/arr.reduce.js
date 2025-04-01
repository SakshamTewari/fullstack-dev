/* Segregating Numbers Based on Their Integer Part */

const arr = [1.1, 1.2, 1.3, 2.1, 2.2, 2.3];

const segregate = arr.reduce((prevValue, currValue) => {
  const floored = Math.floor(currValue);
  if (!prevValue[floored]) {
    prevValue[floored] = [];
  }
  prevValue[floored].push(currValue);
  return prevValue;
}, {});

console.log(segregate);

/* Segregate into Integer & Decimal Parts Separately */
const segregate2 = arr.reduce((prevValue, currValue) => {
  const intPart = Math.floor(currValue); //key
  const decPart = currValue - intPart;

  if (!prevValue[intPart]) {
    prevValue[intPart] = { integers: [], decimals: [] };
  }

  if (decPart === 0) {
    prevValue[intPart].integers.push(currValue);
  } else {
    prevValue[intPart].decimals.push(currValue);
  }

  return prevValue;
}, {});

console.log(segregate2);
