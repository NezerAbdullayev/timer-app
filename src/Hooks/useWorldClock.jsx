import { useContext } from 'react';
import { WorldClockContext } from '../context/WorldClockProvider';

export function useWorldClock() {
    const contextDate = useContext(WorldClockContext);
    if (!contextDate) {
        throw new Error('useWorldClock must be used within a WorldClockProvider');
    }
    return contextDate;
}
