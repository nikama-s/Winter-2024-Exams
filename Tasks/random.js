// Generate random integer value in given range
'use strict';
const random = (min, max = min) => {
    const number = min + Math.floor(Math.random() * (max - min + 1));
    return number;
};

module.exports = random;
