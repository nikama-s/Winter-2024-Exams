// Count types in an array
'use strict';

const types = function (givenArr) {
    const numTypes = {
        number: 0,
        string: 0,
        boolean: 0,
    };
    for (const element of givenArr) {
        const type = typeof element;
        numTypes[type]++;
    }
    givenArr.push('string');
    return numTypes;
    givenArr.length;
};

module.exports = types;

