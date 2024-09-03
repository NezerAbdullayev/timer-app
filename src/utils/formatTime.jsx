export function formatTime(time) {
    const milliseconds = `00${time % 10000}`.slice(-2);
    const seconds = `00${Math.floor(time / 100) % 60}`.slice(-2);
    const minutes = `00${Math.floor(time / 6000) % 60}`.slice(-2);
    const hours = `00${Math.floor(time / 360000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

export function formatReverseDayAndMonth(date) {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const newDate = `${day} ${month}`;
    return newDate;
}

export function currentFormatDate() {
    const curDate = new Date();
    const curFormatDate = formatReverseDayAndMonth(curDate);
    return curFormatDate;
}

export function formatDate(formatValue) {
    if (!formatValue) return currentFormatDate();

    const date = formatValue.$d ? new Date(formatValue.$d) : new Date(formatValue);
    const newDate = formatReverseDayAndMonth(date);

    return newDate ? newDate : currentFormatDate();
}

export function getCurrentHour() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return { hh: hours, mm: minutes };
}

export function realTimeAndHistory() {
    const currentHistory = currentFormatDate();
    const RealTime = getCurrentHour();
    return { curTime: RealTime, history: currentHistory };
}
