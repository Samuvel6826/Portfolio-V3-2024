const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

// Extend dayjs with UTC and timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);

// Format date for Firebase updates
const getFormattedDate = () => {
    return dayjs().tz('Asia/Kolkata').format('DD/MM/YYYY, hh:mm:ss A').toUpperCase();
};

// Export necessary functions for external use
module.exports = {
    getFormattedDate,
};