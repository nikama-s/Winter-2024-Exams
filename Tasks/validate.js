// Validate person name
'use strict';

const isValid = (name) => {
    if (typeof name !== 'string') return false;
    if (name.length === 0) return false;
    if (!name.includes(' ')) return false;
    {
        for (const symbol of name) {
            if (symbol === ' ') continue;
            if (
                symbol.toLowerCase().charCodeAt(0) >= 97 &&
                symbol.toLowerCase().charCodeAt(0) <= 122
            ) {
            } else {
                return false;
            }
        }
        return true;
    }
};

module.exports = isValid;

