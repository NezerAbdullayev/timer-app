export function getCurrentDateTime() {
    const now = new Date();

    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${hours}:${minutes}`;
}

export function getRealTime() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const currentTime = `${hours}:${minutes}:${seconds}`;
        console.log(currentTime);
    }, 1000);
}

