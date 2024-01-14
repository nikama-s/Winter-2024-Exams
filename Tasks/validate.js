// Validate person name
'use strict';

const isValid = (name) => {
    if (typeof name !== 'string' || name.length === 0 || !name.includes(' ')) return false;

    for (const symbol of name) {
        if (symbol === ' ') continue;
        const symbolCode = symbol.toLowerCase().charCodeAt(0);
        if (symbolCode < 97 || symbolCode > 122) {
            return false;
        }
    }

    return true;
};

module.exports = isValid;

