// Generate random password
'use strict';

let generatePassword = (alphabet, length) => {
  const maxLenght = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const indexLetter = Math.floor(Math.random() * maxLenght);
    key += alphabet[indexLetter];
  }
  return key;
};

module.exports = generatePassword;

