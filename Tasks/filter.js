// Filter array by type name
'use strict';

const filter = (givenArr, typeName) => {
    const filter = [];
    for (const element of givenArr) {
        const index = givenArr.indexOf(element);
        if (typeof element !== typeName) filter.unshift(index);
    }
    for (const item of filter) givenArr.splice(item, 1);
    return givenArr;
};

module.exports = filter;


