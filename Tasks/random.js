// Generate random integer value in given range
'use strict';
const random = (min, max = min) => {
    const randomDecimal = Math.random();
    const scaledNumber = randomDecimal * (max - min + 1);
    const flooredNumber = Math.floor(scaledNumber);
    const finalNumber = min + flooredNumber;

    return finalNumber;
};

module.exports = random;
