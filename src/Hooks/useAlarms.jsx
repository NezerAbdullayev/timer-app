import { useContext } from 'react';
import {AlarmsContext} from '../context/AlarmsProvider';

export function useAlarms() {
    const alarms = useContext(AlarmsContext);

    if (alarms) return alarms;
}
