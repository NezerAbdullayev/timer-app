export function formatTime(time) {
    const milliseconds = `00${time % 10000}`.slice(-2);
    const seconds = `00${Math.floor(time / 100) % 60}`.slice(-2);
    const minutes = `00${Math.floor(time / 6000) % 60}`.slice(-2);
    const hours = `00${Math.floor(time / 360000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
