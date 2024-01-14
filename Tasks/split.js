// Split an array into two parts
'use strict';

let split_Array = (startIndex, array) => {
    const firstPart = array.slice(0, startIndex);
    const secondPart = array.slice(startIndex);
    return [firstPart, secondPart];
};

module.exports = split_Array;

