import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { realTimeAndHistory } from '../utils/formatTime';

// Context
export const AlarmsContext = createContext();

// initialState
const initialState = {
    alarmsList: [
        {
            id: 4335353,
            hour: { hh: '03', mm: '14' },
            history: '27 Aug',
            sound: 'iphone_alarm.mp3',
            isActive: true,
            isSound: false,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ALARM': // eslint-disable-next-line
            const checkAlarm = state.alarmsList.some(
                (alarm) =>
                    alarm.history === action.payload.history &&
                    alarm.hour?.hh === action.payload.hour?.hh &&
                    alarm.hour?.mm === action.payload.hour?.mm
            );

            return checkAlarm
                ? state
                : {
                      ...state,
                      alarmsList: [
                          ...state.alarmsList,
                          { id: uuidv4(), isActive: true, isSound: false, ...action.payload },
                      ],
                  };

        case 'DELETE_ALARM':
            return {
                ...state,
                alarmsList: state.alarmsList.filter((alarm) => alarm.id !== action.payload),
            };

        case 'TOGGLE_ISACTIVE_ALARM':
            return {
                ...state,
                alarmsList: state.alarmsList.map((alarm) =>
                    alarm.id === action.payload ? { ...alarm, isActive: !alarm.isActive } : alarm
                ),
            };

        case 'RESET_ALARMS_SOUND':
            return {
                ...state,
                alarmsList: state.alarmsList.map((alarm) =>
                    alarm.isSound ? { ...alarm, isSound: false } : alarm
                ),
            };

        default:
            return state;
    }
}

// Provider component
function AlarmsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioControlRef = useRef(null);

    const playAlarmSound = (sound) => {
        if (audioControlRef.current) {
            audioControlRef.current.src = sound;
            audioControlRef.current.play().then(() => setIsPlaying(true));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const { curTime, history: curHistory } = realTimeAndHistory();
            const activeAlarm = state.alarmsList.find(
                (alarm) =>
                    alarm.history === curHistory &&
                    alarm.hour?.hh === curTime.hh &&
                    alarm.hour?.mm === curTime.mm &&
                    alarm.isActive &&
                    !alarm.isSound
            );

            if (activeAlarm && !isPlaying) {
                dispatch({ type: 'RESET_ALARMS_SOUND' });
                activeAlarm.isSound = true;
                playAlarmSound(`./public/${activeAlarm.sound}`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [state.alarmsList, isPlaying]);

    useEffect(() => {
        if (isPlaying) {
            const activeAlarm = state.alarmsList.find((alarm) => alarm.isActive && alarm.isSound);
            if (!activeAlarm) {
                audioControlRef.current.pause();
                audioControlRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }
    }, [state.alarmsList, isPlaying]);

    const handleAudioEnd = () => {
        setIsPlaying(false);
        dispatch({ type: 'RESET_ALARMS_SOUND' });
    };

    return (
        <AlarmsContext.Provider value={{ state, dispatch }}>
            {children}
            <audio ref={audioControlRef} onEnded={handleAudioEnd} />
        </AlarmsContext.Provider>
    );
}

export default AlarmsProvider;
