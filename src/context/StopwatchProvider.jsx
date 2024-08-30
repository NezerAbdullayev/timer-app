import { createContext, useReducer } from 'react';

//  context
export const StopwatchContext = createContext();

// reducer initialState

const initialState = {
    time: 0,
    isRunning: false,
    laps: [],
    history: [],
};

// reducer

function reducer(state, action) {
    switch (action.type) {
        case 'START':
            return { ...state, isRunning: true };
        case 'STOP':
            return { ...state, isRunning: false };
        case 'RESET':
            return { ...state, time: 0, laps: [], history: [...state.history, state.laps] };
        case 'LAP':
            return { ...state, laps: [...state.laps, state.time] };
        case 'TICK':
            return { ...state, time: state.time + 1 };
        case 'CLEAR_HISTORY':
            return { ...state, history: [] };
        default:
            return state;
    }
}

function StopwatchProvider({ chideren }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };

    return <StopwatchContext.Provider value={value}>{chideren}</StopwatchContext.Provider>;
}

export default StopwatchProvider;
