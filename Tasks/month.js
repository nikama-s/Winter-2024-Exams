// Get month number
'use strict';

const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
];

const Month = (requiredMonth) => {
    for (let i = 0; i < 12; i++) {
        if (requiredMonth.toLowerCase().startsWith(months[i])) return i + 1;
    }
    return -1;
};

module.exports = Month;

