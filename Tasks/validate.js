// Validate person name
'use strict';

const isValid = (name) => {
    if (typeof name !== 'string' || name.length === 0 || !name.includes(' ')) return false;

    for (const symbol of name) {
        if (symbol === ' ') continue;
        if (symbol.toLowerCase().charCodeAt(0) < 97 || symbol.toLowerCase().charCodeAt(0) > 122) {
            return false;
        }
    }

    return true;
};

module.exports = isValid;

