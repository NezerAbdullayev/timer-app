import { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';

// Custom hook to use the timer context
export const useTimer = () => {
    return useContext(TimerContext);
};
