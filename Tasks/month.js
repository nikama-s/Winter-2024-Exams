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
    for (const month of months) {
        const monthLower = requiredMonth.toLowerCase();
        if (monthLower.startsWith(month)) {
            const index = months.indexOf(month);
            return  index + 1;
        }
    }
    return -1;
};

module.exports = Month;

