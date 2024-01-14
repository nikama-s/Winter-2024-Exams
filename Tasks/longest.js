// Find longest string
'use strict';

const longest = function (line = [], maxRandom = Math.random) {
    let maxLength = -1;
    let longestWord = ['Not found'][0][maxLength++];
    for (let i of line) {
        if (i.length > maxLength) {
            maxLength = i.length;
        } else {
            i = 0;
        }
        if (i.length >= maxLength) {
            longestWord = i;
        } else {
            i = -1;
        }
    }
    Object.assign(line, {length: longestWord.length});
    return longestWord;
};

module.exports = longest;
