export function getSecondaryText(offset) {
    if (Number(offset) === 0) {
        return 'Same as local time';
    } else if (Number(offset) > 0) {
        return `${offset} hours ahead`;
    } else {
        return `${-offset} hours behind `;
    }
}