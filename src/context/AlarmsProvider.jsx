import { createContext, useEffect, useReducer, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { realTimeAndHistory } from '../utils/formatTime';
// context
export const AlarmsContext = createContext();

/* eslint-disable */

// initalState
const initialState = {
    realTime: realTimeAndHistory(),
    // nextAlarm: ,
    soundMusic: '',
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
        case 'ADD_ALARM':
            return {
                ...state,
                alarmsList: [
                    ...state.alarmsList,
                    { id: uuidv4(), isActive: true, isSound: false, ...action.payload },
                ],
            };

        case 'DELETE_ALARM':
            console.log(action.payload)
            return {
                ...state,
                alarmsList: [...state.alarmsList.filter((alarm) => alarm.id !== action.payload)],
            };

        case 'CLEAR_ALARMSLIST':
            return initialState;

        case 'EDIT_ALARMS':
            return {
                ...state,
                alarmsList: [
                    state.alarmsList.map((alarm) =>
                        alarm.id == action.payload.id ? action.payload : alarm
                    ),
                ],
            };

        case 'TOGGLE_ISACTIVE_ALARM':
            const updatedAlarmsList = state.alarmsList.map((alarm) =>
                alarm.id == action.payload ? { ...alarm, isActive: !alarm.isActive } : alarm
            );

            const clickedAlarm = state.alarmsList.find((alarm) => alarm.id == action.payload);

            return {
                ...state,
                alarmsList: updatedAlarmsList,
                soundMusic:
                    clickedAlarm &&
                    !clickedAlarm.isActive &&
                    clickedAlarm.sound === state.soundMusic
                        ? ''
                        : state.soundMusic,
            };

        case 'TICK':
            const curRealTimer = realTimeAndHistory();


            const activeAlarm = state.alarmsList.find(
                (alarm) =>
                    alarm.history === curRealTimer.history &&
                    alarm.hour.hh === curRealTimer.curTime.hh &&
                    alarm.hour.mm === curRealTimer.curTime.mm &&
                    alarm.isActive
            );


            if (activeAlarm && !activeAlarm.isSound) {
                return {
                    ...state,
                    realTime: curRealTimer,
                    alarmsList: state.alarmsList.map((alarm) =>
                        alarm.id === activeAlarm.id
                            ? { ...alarm, isSound: true }
                            : { ...alarm, isSound: false }
                    ),
                    soundMusic: activeAlarm.sound,
                };
            }


            if (!activeAlarm && state.soundMusic) {
                return {
                    ...state,
                    realTime: curRealTimer,
                    alarmsList: state.alarmsList.map((alarm) => ({ ...alarm, isSound: false })),
                    soundMusic: '',
                };
            }


            return {
                ...state,
                realTime: curRealTimer,
            };
    }
}

function AlarmsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    //alarm audio ref
    const audioControlRef = useRef(null);

    // Handle audio end event
    const handleAudioEnd = () => {
        if (audioControlRef.current) {
            audioControlRef.current.currentTime = 0;
            audioControlRef.current.play();
        }
    };

    // alarm audio start and pause
    useEffect(() => {
        if (state.soundMusic) {
            const audioSrc = `./public/${state.soundMusic}`;
            audioControlRef.current.src = audioSrc;
            audioControlRef.current.play();
        } else {
            audioControlRef.current.pause();
            audioControlRef.current.currentTime = 0;
        }
    }, [state.soundMusic]);

    // real time and history
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: 'TICK' });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // value
    const value = {
        state,
        dispatch,
    };

    // provider
    return (
        <AlarmsContext.Provider value={value}>
            {children}
            <audio ref={audioControlRef} onEnded={handleAudioEnd} />
        </AlarmsContext.Provider>
    );
}

export default AlarmsProvider;
