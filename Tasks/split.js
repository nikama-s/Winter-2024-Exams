// Split an array into two parts
'use strict';

let split_Array = (startIndex, array) => {
    const firstPart = array.slice(0, startIndex);
    array = array.slice(startIndex, array.length);
    return [firstPart, array];
};

module.exports = split_Array;
