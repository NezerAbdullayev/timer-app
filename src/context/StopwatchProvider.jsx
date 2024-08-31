import { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

//  context
export const StopwatchContext = createContext();

// reducer initialState

const initialState = {
    isRunning: false,
    time: 0,
    lap: 0,
    lapTime: 0,
    history: [],
};

// reducer

function reducer(state, action) {
    switch (action.type) {
        case 'START':
            return { ...state, isRunning: true };
        case 'PAUSE':
            return { ...state, isRunning: false };
        case 'RESET':
            return { ...state, time: 0, lapTime: 0, lap: 0, history: [...state.history] };
        case 'LAP':
            return {
                ...state,
                history: [
                    ...state.history,
                    { id: uuidv4(), time: state.time, lapTime: state.lapTime, lap: state.lap + 1 },
                ],
                lapTime: 0,
                lap: state.lap+1,
            };
        case 'TICK':
            return { ...state, time: state.time + 1, lapTime: state.lapTime + 1 };
        case 'CLEAR_HISTORY':
            return { ...state, history: [] };
        default:
            return state;
    }
}

function StopwatchProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let interval;

        if (state.isRunning && state.history) {
            interval = setInterval(() => {
                dispatch({ type: 'TICK' });
            }, 10);
        } else if (!state.isRunning && state.time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [state.isRunning, dispatch]);

    const value = {
        state,
        dispatch,
    };

    return <StopwatchContext.Provider value={value}>{children}</StopwatchContext.Provider>;
}

export default StopwatchProvider;
