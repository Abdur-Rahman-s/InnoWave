import { createContext, useReducer } from 'react';

export const HandleStateContext = createContext();


const initialState = {
    title: '',
    description: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload };
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload };
        default:
            return state;
    }
};

export const HandleStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <HandleStateContext.Provider value={{ state, dispatch }}>
            {children}
        </HandleStateContext.Provider>
    );
};
