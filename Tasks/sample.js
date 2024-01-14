// Get one random element from an array
'use strict';

const sample = (givenArr) => {
    const randomNum = Math.random() * givenArr.length;
    const flooredNum = Math.floor(randomNum);
    return givenArr[flooredNum];
};

module.exports = sample;

