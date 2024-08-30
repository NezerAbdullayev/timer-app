import { useContext } from 'react';
import { StopwatchContext } from '../context/StopwatchProvider';

export function useStopwatch() {
    const context = useContext(StopwatchContext);
    if (!context) {
        throw new Error('useStopwatch must be used within a StopwatchProvider');
    }
    return context;
}
