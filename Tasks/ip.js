// Split string by the first occurrence of separator
'use strict';

const Parseip = (i) => {
    let a = [];
    if (i === '') return;
    else {
        let B = i.split('.');
        if (B.length != 4) return;
        let j = 0;
        for (const b of B) {
            a[j] = parseInt(b);
            if (isNaN(a[j])) return;
            j++;
        }
    }
    return a;
};

module.exports = Parseip;
