import { createContext, useEffect, useReducer } from 'react';
import { loadStateFromLocalStorage } from '../utils/loadStateFromLocalStorage';

export const WorldClockContext = createContext();

// initialState
const initialState = {
    worldClock: [],
};

// reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_CLOCK':
            return {
                ...state,
                worldClock: [...state.worldClock, action.payload],
            };

        case 'DELETE_CLOCK':
            return {
                ...state,
                worldClock: state.worldClock.filter((clock) => clock.id !== action.payload),
            };

        case 'RESET_CLOCKS':
            return initialState;

        default:
            return state;
    }
}

function WorldClockProvider({ children }) {
    const [state, dispatch] = useReducer(
        reducer,
        loadStateFromLocalStorage('worldClockState') || initialState
    );

    useEffect(() => {
        localStorage.setItem('worldClockState', JSON.stringify(state));
    }, [state]);

    return (
        <WorldClockContext.Provider value={{ state, dispatch }}>
            {children}
        </WorldClockContext.Provider>
    );
}

export default WorldClockProvider;
