// Generate random password
'use strict';

let generatePassword = (alphabet, length) => {
    const maxLenght = alphabet.length;
    let key = '';
    for (let i = 0; i < length; i++) {
        const index = Math.random() * maxLenght;
        const flooredIndex = Math.floor(index);
        key += alphabet[flooredIndex];
    }
    return key;
};

module.exports = generatePassword;

