// Get day number
'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (currentDay) => {
    for (let day of days) {
        if (currentDay.startsWith(day.toLowerCase())) {
            const index = days.indexOf(day);
            return index + 1;
        }
    }
    return -1;
};

module.exports = parseDay;

