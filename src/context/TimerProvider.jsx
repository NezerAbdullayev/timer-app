import { createContext, useEffect, useReducer, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { currentFormatDate } from '../utils/formatTime';
import { loadStateFromLocalStorage } from '../utils/loadStateFromLocalStorage';

// Create the context
export const TimerContext = createContext();

// initialState
const initialState = {
    isRunning: false,
    isReset: false,
    audio: false,
    time: {
        hh: '00',
        mm: '00',
        ss: '00',
    },
    timerHistory: loadStateFromLocalStorage('timerState')?.history || [],
};

// reducer
function reducer(state, action) {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                isRunning: true,
                isReset: true,
            };
        case 'PAUSE':
            return { ...state, isRunning: false };
        case 'RESET':
            return {
                ...state,
                isRunning: false,
                isReset: false,
                time: { hh: '00', mm: '00', ss: '00' },
            };

        case 'SET_TIME':
            return { ...state, time: { ...state.time, ...action.payload } };

        case 'RESET_HISTORY':
            return {
                ...state,
                timerHistory: [],
            };

        case 'DELETE_HISTORY_ITEM':
            return {
                ...state,
                timerHistory: [
                    ...state.timerHistory.filter(
                        (historyItem) => historyItem.id !== action.payload
                    ),
                ],
            };

        case 'ADD_TO_HISTORY':
            return {
                ...state,
                timerHistory: [
                    ...state.timerHistory,
                    {
                        id: uuidv4(),
                        date: currentFormatDate(),
                        startTime: { ...state.time },
                    },
                ],
            };

        case 'TICK':
            let { hh, mm, ss } = state.time;
            ss = parseInt(ss) - 1;

            if (ss < 0) {
                ss = 59;
                mm = parseInt(mm) - 1;

                if (mm < 0) {
                    mm = 59;
                    hh = parseInt(hh) - 1;

                    if (hh < 0) {
                        hh = '00';
                        mm = '00';
                        ss = '00';
                        return {
                            ...state,
                            isRunning: false,
                            isReset: false,
                            time: { hh, mm, ss },
                            audio: true,
                        };
                    }
                }
            }

            return {
                ...state,
                time: {
                    hh: hh.toString().padStart(2, '0'),
                    mm: mm.toString().padStart(2, '0'),
                    ss: ss.toString().padStart(2, '0'),
                },
            };

        default:
            return state;
    }
}

// Create a provider component
export const TimerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const timerRef = useRef(null);

    useEffect(() => {
        if (state.isRunning) {
            console.log('claisdi');
            timerRef.current = setInterval(() => {
                dispatch({ type: 'TICK' });
            }, 1000);
            console.log(state.time);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [state.isRunning, state.time]);

    useEffect(() => {
        // Save state to localStorage whenever it changes
        const objectHistory = { history: [...state.timerHistory] };
        localStorage.setItem('timerState', JSON.stringify(objectHistory));
    }, [state.timerHistory]);

    return <TimerContext.Provider value={{ state, dispatch }}>{children}</TimerContext.Provider>;
};

export default TimerProvider;
