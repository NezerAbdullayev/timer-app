import { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { currentFormatDate } from '../utils/formatTime';
import { loadStateFromLocalStorage } from '../utils/loadStateFromLocalStorage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastPopup from '../components/ToastPopup';

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
                audio: false,
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

        case 'RESET_MUSIC':
            return {
                ...state,
                audio: false,
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

    useEffect(() => {
        let intervalId;

        if (state.isRunning) {
            intervalId = setInterval(() => {
                dispatch({ type: 'TICK' });
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [state.isRunning]);

    useEffect(() => {
        // Save state to localStorage whenever it changes
        const objectHistory = { history: [...state.timerHistory] };
        localStorage.setItem('timerState', JSON.stringify(objectHistory));
    }, [state.timerHistory]);

    useEffect(() => {
        if (state.audio) {
            const audio = new Audio('./public/morning_flower.mp3');
            audio.play();

            toast(
                <ToastPopup dispatch={dispatch} message={"helllo world"} />,
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
                dispatch({ type: 'RESET_MUSIC' });
            }, 1000 * 30);

            // Clean up function to stop audio and clear timeout
            return () => {
                audio.pause();
                audio.currentTime = 0;
                clearTimeout(timerId);
                dispatch({ type: 'RESET_MUSIC' });
            };
        }
    }, [state.audio]);

    return <TimerContext.Provider value={{ state, dispatch }}>{children}</TimerContext.Provider>;
};

export default TimerProvider;
