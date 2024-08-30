import { createContext, useReducer } from 'react';

// context
export const AlarmsContext = createContext;

// initalState
const initialState = {
    alarms: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'newAlarms':
            state=[...state,action.payload]
    }
}

function AlarmsProvoder({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };

    return (
        <AlarmsContext.Provider value={value}>
            {children}
        </AlarmsContext.Provider>
    );
}

export default AlarmsProvoder;
