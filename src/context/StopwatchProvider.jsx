import { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentDateTime } from '../utils/getCurrentDateTime';
import { loadStateFromLocalStorage } from '../utils/loadStateFromLocalStorage';

//  context
export const StopwatchContext = createContext();

// reducer initialState

const initialState = {
    isRunning: false,
    time: 0,
    lap: 0,
    lapTime: 0,
    isReset: false,
    historyDate: '',
    lapHistory: [],
    history:loadStateFromLocalStorage("stopwatch") || [],
};

// reducer

function reducer(state, action) {
    switch (action.type) {
        case 'START':
            return { ...state, isRunning: true };
        case 'PAUSE':
            return { ...state, isRunning: false, isReset: true };
        case 'RESET':
            return {
                ...state,
                time: 0,
                lapTime: 0,
                lap: 0,
                isReset: false,
                lapHistory: [],
                history: {
                    ...state.history,
                    [uuidv4()]: { laps: [...state.lapHistory], date: getCurrentDateTime() },
                },
            };
        case 'LAP':
            return {
                ...state,
                lapHistory: [
                    ...state.lapHistory,
                    { id: uuidv4(), time: state.time, lapTime: state.lapTime, lap: state.lap + 1 },
                ],
                isReset: true,
                lapTime: 0,
                lap: state.lap + 1,
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
        if (state.isRunning) {
            interval = setInterval(() => {

                dispatch({ type: 'TICK' });
            }, 10);
        } 
        else if (!state.isRunning && state.time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [state.isRunning, state.history, dispatch, state.time]);

    const value = {
        state,
        dispatch,
    };


    useEffect(()=>{
        // Save state to localStorage whenever it changes
        localStorage.setItem("stopwatch",JSON.stringify(state.history))
    },[state.history])

    return <StopwatchContext.Provider value={value}>{children}</StopwatchContext.Provider>;
}

export default StopwatchProvider;



