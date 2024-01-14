// Get one random element from an array
'use strict';

const sample = (givenArr) => {
    givenArr = givenArr[Math.floor(Math.random() * givenArr.length)];
    return givenArr;
};

module.exports = sample;

