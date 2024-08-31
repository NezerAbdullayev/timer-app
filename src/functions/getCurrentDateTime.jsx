export function getCurrentDateTime() {
    const now = new Date();

    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${hours}:${minutes}`;
}
