import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getRealTime } from '../utils/getCurrentDateTime';
// context
export const AlarmsContext = createContext();

// initalState
const initialState = {
    realTime: '',
    alarmsList: [
        {
            id: 4335353,
            hour: { hh: '03', mm: '14' },
            history: '27 Aug',
            sound: 'run.az/kecdi',
            isActive: true,
        },
    ],
};

// id: '4321',
// hour: { hh: '03', mm: '14' },
// isActive: false,
// history: '27 Aug',

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ALARM':
            return {
                ...state,
                alarmsList: [
                    ...state.alarmsList,
                    { id: uuidv4(), isActive: true, ...action.payload },
                ],
            };
        case 'DELETE_ALARM':
            return {
                ...state,
                alarmsList: [state.alarmsList.filter((alarm) => alarm.id != action.payload)],
            };

        case 'CLEAR_ALLALARMS':
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
            console.log(action.payload);
            return {
                ...state,
                alarmsList: [
                    ...state.alarmsList.map((alarm) =>
                        alarm.id == action.payload
                            ? { ...alarm, isActive: alarm.isActive == true ? false : true }
                            : alarm
                    ),
                ],
            };
    }
}

function AlarmsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };

    return <AlarmsContext.Provider value={value}>{children}</AlarmsContext.Provider>;
}

export default AlarmsProvider;
