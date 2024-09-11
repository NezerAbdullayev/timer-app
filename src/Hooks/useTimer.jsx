import { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';

// Custom hook to use the timer context
export const useTimer = () => {
    const timer = useContext(TimerContext);
    if (!timer) {
        throw new Error('useWorldClock must be used within a TimerProvider');
    }
    return timer;
};
