import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import utils
import { realTimeAndHistory } from '../utils/formatTime';
import {loadStateFromLocalStorage} from "../utils/loadStateFromLocalStorage"

// Context
export const AlarmsContext = createContext();

// initialState
const initialState = {
    soundMusic: '',
    alarmsList: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ALARM': // eslint-disable-next-line
            const checkAlarmInList = state.alarmsList.some(
                (alarm) =>
                    alarm.history === action.payload.history &&
                    alarm.hour?.hh === action.payload.hour?.hh &&
                    alarm.hour?.mm === action.payload.hour?.mm
            );

            return checkAlarmInList
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
                    alarm.isSound ? { ...alarm, isSound: false, isActive: false } : alarm
                ),
            };

        default:
            return state;
    }
}

// Provider component
function AlarmsProvider({ children }) {
    const [state, dispatch] = useReducer(
        reducer,
        loadStateFromLocalStorage('alarmsState') || initialState
    );
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    function playAlarmSound(sound) {
        if (audioRef.current) {
            audioRef.current.src = sound;
            audioRef.current.play().then(() => setIsPlaying(true));
        }
    }

    // Create the audio object once and use it
    useEffect(() => {
        audioRef.current = new Audio();
    }, []);

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
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }
    }, [state.alarmsList, isPlaying]);

    const handleAudioEnd = () => {
        setIsPlaying(false);
        dispatch({ type: 'RESET_ALARMS_SOUND' });
    };

    // Add event listener to handle when audio ends
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onended = handleAudioEnd;
        }
    }, [audioRef]);

    useEffect(() => {
        // Save state to localStorage whenever it changes
        localStorage.setItem('alarmsState', JSON.stringify(state));
    }, [state]);

    return <AlarmsContext.Provider value={{ state, dispatch }}>{children}</AlarmsContext.Provider>;
}

export default AlarmsProvider;
