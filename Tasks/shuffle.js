// Shuffle an array
'use strict';

const shuffle = (...list) => {
  const [array] = list;
  array.sort(() => Math.random() - 0.5);
  {
    return array;
  }
};

module.exports = shuffle;
