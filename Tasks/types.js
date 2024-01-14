// Count types in an array
'use strict';

const types = function (givenArr) {
    const numTypes = {
        number: 0,
        string: 0,
        boolean: 0,
    };
    for (const element of givenArr) {
        numTypes[typeof element]++;
    }
    return numTypes;
};

module.exports = types;

