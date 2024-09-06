import { createContext, useReducer } from 'react';

// initialState
const initialState = {
    worldClock: [
        {
            id: 48378,
            name: 'New York',
            offset: -4,
        },
    ],
};

// reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_CLOCK':
            // eslint-disable-next-line
            const checkClock = state.worldClock.find((clock) => clock.id === action.payload.id);

            return checkClock
                ? state
                : {
                      ...state,
                      worldClock: [...state.worldClock, action.payload],
                  };

        case 'DELETE_CLOCK':
            return {
                ...state,
                worldClock: state.worldClock.filter((clock) => clock.id !== action.payload.id),
            };

        case 'RESET_CLOCKS':
            return initialState;

        default:
            return state;
    }
}

export const WorldClockContext = createContext({ children });

function WorldClockProvider() {
    const { state, dispatch } = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };
    return <WorldClockContext.Provider value={value}>{children}</WorldClockContext.Provider>;
}

export default WorldClockProvider;
