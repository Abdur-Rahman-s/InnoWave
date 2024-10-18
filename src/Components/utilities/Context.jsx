import { createContext, useReducer } from 'react';

export const HandleStateContext = createContext();

const initialState = {
    Value: '',
    description: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, Value: action.payload };
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload };
        default:
            return state;
    }
};

// Move handleSubmit inside the provider
const handleSubmit = (Value, description) => {
    console.log("Submitting with:", Value, description);
};
handleSubmit()
export const HandleStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <HandleStateContext.Provider value={{ state, dispatch, handleSubmit }}>
            {children}
        </HandleStateContext.Provider>
    );
};
