// Split string by the first occurrence of separator
'use strict';

const parseIp = (givenStr) => {
    let finalArr = [];
    let splitArr = givenStr.split('.');
    if (splitArr.length !== 4) return;
    let index = 0;
    for (const element of splitArr) {
        finalArr[index] = parseInt(element);
        if (isNaN(finalArr[index])) return;
        index++;
    }

    return finalArr;
};

module.exports = parseIp;
