import React, { createContext, useReducer } from 'react';

const initialState = {
    title: '',
    description: ''
};

const HandleStateContext = createContext();

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

const HandleStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <HandleStateContext.Provider value={{ state, dispatch }}>
            {children}
        </HandleStateContext.Provider>
    );
};

export { HandleStateContext, HandleStateProvider };
