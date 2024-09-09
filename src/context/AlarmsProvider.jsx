import { createContext, useEffect, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import utils
import { realTimeAndHistory } from '../utils/formatTime';
import { loadStateFromLocalStorage } from '../utils/loadStateFromLocalStorage';
import { toast } from 'react-toastify';
import ToastPopup from '../components/ToastPopup';

// Context
export const AlarmsContext = createContext();

// initialState
const initialState = {
    soundMusic: '',
    audio: false,
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

        case 'RESET_MUSIC':
            return {
                ...state,
                audio: false,
                soundMusic: '',
                alarmsList: state.alarmsList.map((alarm) =>
                    alarm.isSound ? { ...alarm, isSound: true, isActive: false } : alarm
                ),
            };

        case 'TOGGLE_ISACTIVE_ALARM': // eslint-disable-next-line
            const { isSound } = state.alarmsList.find((alarm) => alarm.id === action.payload);
            return {
                ...state,
                audio: isSound ? false : state.audio,
                soundMusic: isSound ? '' : state.soundMusic,
                alarmsList: state.alarmsList.map((alarm) =>
                    alarm.id === action.payload ? { ...alarm, isActive: !alarm.isActive } : alarm
                ),
            };

        case 'START_ALARM':
            return {
                ...state,
                audio: true,
                soundMusic: action.payload.sound,
                alarmsList: state.alarmsList.map((alarm) =>
                    alarm.id === action.payload.id ? { ...action.payload, isSound: true } : alarm
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
    // useReducer
    const [state, dispatch] = useReducer(
        reducer,
        loadStateFromLocalStorage('alarmsState') || initialState
    );
    // state
    const [isPlaying, setIsPlaying] = useState(false);

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

            if (activeAlarm && activeAlarm.isActive && !isPlaying) {
                setIsPlaying(true);
                dispatch({ type: 'START_ALARM', payload: activeAlarm });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [state.alarmsList, isPlaying]);

    useEffect(() => {
        if (state.audio && state.soundMusic) {
            const audio = new Audio(`/audio/${state.soundMusic}`);
            audio.play();

            toast(
                <ToastPopup
                    dispatch={dispatch}
                    message={'Alarm is ringing!'}
                    setIsPlaying={setIsPlaying}
                />,
                {
                    position: 'top-center',
                    autoClose: 30000,
                    hideProgressBar: false,
                    newestOnTop: false,
                    closeOnClick: false,
                    rtl: false,
                    pauseOnFocusLoss: true,
                    draggable: true,
                    pauseOnHover: true,
                    theme: 'colored',
                    style: { top: '100px' },
                }
            );

            // Stop the audio after 30 seconds
            const timerId = setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
                setIsPlaying(false);
                dispatch({ type: 'RESET_MUSIC' });
            }, 1000 * 30);

            // Clean up function to stop audio and clear timeout
            return () => {
                audio.pause();
                audio.currentTime = 0;
                clearTimeout(timerId);
                setIsPlaying(false);
                dispatch({ type: 'RESET_MUSIC' });
            };
        }
    }, [state.audio, state.soundMusic]);

    useEffect(() => {
        // Save state to localStorage whenever it changes
        localStorage.setItem('alarmsState', JSON.stringify(state));
    }, [state]);

    return <AlarmsContext.Provider value={{ state, dispatch }}>{children}</AlarmsContext.Provider>;
}

export default AlarmsProvider;
