export function parseDate(dateStr) {

    const [day, month] = dateStr.split(' ');

    const monthNames = [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
    ];
    const monthIndex = monthNames.indexOf(month.toLowerCase());

    if (monthIndex === -1) {
        throw new Error('Invalid month');
    }

    const year = new Date().getFullYear();

    return new Date(year, monthIndex, parseInt(day, 10));
}