// Change double quotation to open or close quotation
'use strict';

const quotes = (givenQuote) => {
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
            for (const i of symbol) {
                res.push(i);
            }

        }
    }
    return res.join('');
};

module.exports = quotes;
