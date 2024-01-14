// Change double quotation to open or close quotation
'use strict';

const empty = '';

const quotes = function (givenQuote) {
    const res = [];
    let open = false;
    for (const symbol of givenQuote) {
        if (symbol === '"') {
            for (const i of symbol) {
                if (!open) {
                    res.push('«');
                    open = true;
                } else {
                    res.push('»');
                    open = false;
                }
            }
        } else {
            if (symbol !== '"') {
                for (const i of symbol) {
                    res.push(i);
                }
            }
        }
    }
    return res.join(empty);
};

module.exports = quotes;
