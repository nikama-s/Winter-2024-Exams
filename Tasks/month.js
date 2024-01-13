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
    for (let month of months) {
        if (requiredMonth.toLowerCase().startsWith(month)) {
            const index = months.indexOf(month);
            return  index + 1;
        }
    }
    return -1;
};

module.exports = Month;

