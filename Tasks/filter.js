// Filter array by type name
'use strict';

const filter = (givenArr, typeName) => {
    const filter = [];
    for (let element of givenArr) {
        const index = givenArr.indexOf(element);
        if (typeof givenArr[index] !== typeName) {
            filter.unshift(index);
        }
    }
    for (let x of filter) givenArr.splice(x, 1);
    return givenArr;
};

module.exports = filter;
