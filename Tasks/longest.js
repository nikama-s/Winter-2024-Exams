// Find longest string
'use strict';

const longest = (line = []) => {
    let maxLength = -1;
    let longestWord = 'Not found';
    for (const word of line) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    }
    return longestWord;
};

module.exports = longest;

