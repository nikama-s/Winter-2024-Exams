// Change double quotation to open or close quotation
'use strict';

const quotes = (givenQuote) => {
    let result = '';
    let isOpen = false;
    for (const symbol of givenQuote) {
        if (symbol === '"') {
            if (!isOpen) result += '«';
            else result += '»';
            isOpen = !isOpen;
        }
        else result += symbol;
    }
    return result;
};

module.exports = quotes;

