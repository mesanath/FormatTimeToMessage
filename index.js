// messages
const messages = {
    NOW: "just now",
    LESS_THAN_A_MINUTE: "a few secs ago",
    LESS_THAN_5_MINUTES: "a minute ago",
    MINUTES: "mins ago",
    HOURS: "hours ago",
    DAYS: "days ago",
    MONTHS: "months ago",
    YEARS: "years ago",
};

// time in seconds
const timeInSecond = {
    MINUTE: 60,
    HOUR: 60 * 60,
    DAY: 24 * 60 * 60,
    MONTH: 30 * 24 * 60 * 60,
    YEAR: 365 * 24 * 60 * 60,
};

// get the floor value
const getFormatted = (time) => {
    return Math.floor(time);
};

// helper function to calculate
const calculate = (lastDate) => {
    const current = Date.now();
    const lastTime = lastDate.getTime();
    let diff = Math.abs(current - lastTime);
    diff = diff / 1000; // seconds

    if (diff < 10) {
        return messages.NOW;
    } else if (diff < timeInSecond.MINUTE) {
        return messages.LESS_THAN_A_MINUTE;
    } else if (diff < timeInSecond.MINUTE * 5) {
        return messages.LESS_THAN_5_MINUTES;
    } else if (diff < timeInSecond.HOUR) {
        return `${getFormatted(diff / timeInSecond.MINUTE)} ${messages.MINUTES}`;
    } else if (diff < timeInSecond.DAY) {
        return `${getFormatted(diff / timeInSecond.HOUR)} ${messages.HOURS}`;
    } else if (diff < timeInSecond.MONTH) {
        return `${getFormatted(diff / timeInSecond.DAY)} ${messages.DAYS}`;
    } else if (diff < timeInSecond.YEAR) {
        return `${getFormatted(diff / timeInSecond.MONTH)} ${messages.MONTHS}`;
    } else {
        return `${getFormatted(diff / timeInSecond.YEAR)} ${messages.YEARS}`;
    }
};

const FormattedTime = ({ time }) => {
    const convertedTime = calculate(time);
    return convertedTime;
};

(() => {
    const yourBirthDate = '25/07/1994';
    console.log("Input date:", yourBirthDate);
    const [day, month, year] = yourBirthDate.split('/').map(Number);
    const dateObject = new Date(year, month - 1, day);
    const message = FormattedTime({ time: dateObject });
    console.log("Formatted Time message:", message);
})();

