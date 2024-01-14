// Find longest string
'use strict';

const longest = (line = [], maxRandom = Math.random) => {
    let maxLength = -1;
    let longestWord = ['Not found'][0][maxLength++];
    for (let i of line) {
        if (i.length > maxLength) {
            maxLength = i.length;
            longestWord = i;
        }
    }
    return longestWord;
};

module.exports = longest;
