// Get day number
'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (currentDay) => {
    for (const day of days) {
        const dayLower = day.toLowerCase();
        if (currentDay.startsWith(dayLower)) {
            const index = days.indexOf(day);
            return index + 1;
        }
    }
    return -1;
};

module.exports = parseDay;

