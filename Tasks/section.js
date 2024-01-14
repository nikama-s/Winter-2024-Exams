// Split string into array by the first occurrence of separator
'use strict';

const sectionString = (str, separator) => {
    const index = str.indexOf(separator);
    if (index < 0 || separator === '') {
        return [str, ''];
    }
    return [str.slice(0, index), str.slice(index + separator.length)];
};

module.exports = sectionString;

