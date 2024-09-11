import { useContext } from 'react';
import { AlarmsContext } from '../context/AlarmsProvider';

export function useAlarms() {
    const alarms = useContext(AlarmsContext);
    if (!alarms) {
        throw new Error('useStopwatch must be used within a AlarmsProvider');
    }
    return alarms;
}
