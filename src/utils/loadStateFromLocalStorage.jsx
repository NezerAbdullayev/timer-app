// Load initial state from localStorage
export function loadStateFromLocalStorage(storageKey) {
    const savedState = localStorage.getItem(storageKey);
    if (!savedState || savedState === null || savedState == 'undefined') return false;
    return JSON.parse(savedState);
}
