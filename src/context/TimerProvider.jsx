import { createContext, useEffect, useReducer } from 'react';

// Create the context
export const TimerContext = createContext();

// initialState
const initialState = {
    isRunning: false,
    isReset: false,
    time: {
        hh: '00',
        mm: '00',
        ss: '00',
    },
};

// reducer
function reducer(state, action) {
    switch (action.type) {
        case 'START':
            return { ...state, isRunning: true, isReset: true };
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
            return { ...state, time: action.payload };
        default:
            return state;
    }
}

// Create a provider component
export const TimerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let interval = null;

        if (state.isRunning) {
            interval = setInterval(() => {
                const { hh, mm, ss } = state.time;

                if(hh=="00" && mm=="00" && ss=="00"){
                    clearInterval(interval)
                    return
                }

                const totalSeconds = parseInt(hh) * 3600 + parseInt(mm) * 60 + parseInt(ss) - 1;

                const newHours = Math.floor(totalSeconds / 3600)
                    .toString()
                    .padStart(2, '0');
                const newMinutes = Math.floor((totalSeconds % 3600) / 60)
                    .toString()
                    .padStart(2, '0');
                const newSeconds = (totalSeconds % 60).toString().padStart(2, '0');

                if(newHours=="00" && newMinutes=="00" && newSeconds=="00")
                    dispatch({type:"PAUSE"})

                dispatch({
                    type: 'SET_TIME',
                    payload: { hh: newHours, mm: newMinutes, ss: newSeconds },
                });
            }, 1000);
        } else if (!state.isRunning && interval !== null) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [state.isRunning, state.time]);

    return <TimerContext.Provider value={{ state, dispatch }}>{children}</TimerContext.Provider>;
};

export default TimerProvider;
