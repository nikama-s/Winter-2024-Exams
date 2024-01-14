// Change double quotation to open or close quotation
'use strict';

const quotes = (givenQuote) => {
    const result = [];
    let open = false;
    for (const symbol of givenQuote) {
        if (symbol === '"') {
            if (!open) {
                result.push('«');
                open = true;
            } else {
                result.push('»');
                open = false;
            }
        }
        else {
            result.push(symbol);
        }
    }
    return result.join('');
};

module.exports = quotes;
