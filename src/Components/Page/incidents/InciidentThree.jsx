import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Nav from '../../Shared/Nav';

// Initial state for the form
const initialState = {
    title: '',
    description: ''
};

// Reducer function to update the state based on input changes
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

const IncidentThree = () => {
    const { state, dispatch } = useContext(HandleStateContext);

    const handleTitleChange = (e) => {
        dispatch({ type: 'SET_TITLE', payload: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value });
    };
 
    return (
        <section className='bg-gray-50 py-10 px-4'>
            <div className='flex justify-center'>
                <div className='font-onest flex flex-col gap-6 w-full max-w-[800px]'>
                    {/* Incident Title Section */}
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold text-gray-800'>
                            Let’s give the incident a title?
                        </h1>
                        <p className='text-sm text-gray-500'>
                            Make a title that will easily identify the incidents
                        </p>
                    </div>
                    <input
                        type="text"
                        placeholder='Add title here'
                        value={state.title}
                        onChange={handleTitleChange}
                        className='border border-border-color text-gray w-full lg:max-w-[752px] py-3 px-4 text-sm outline-none focus:border-orange rounded-md input-animation'
                    />

                    {/* Incident Description Section */}
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold text-gray-800'>
                            Describe what happened during the incident?
                        </h1>
                        <p className='text-sm text-gray-500'>
                            Share some information about the incident. The when, where, how.
                        </p>
                    </div>
                    <textarea
                        name="Description"
                        placeholder='Type here'
                        value={state.description}
                        onChange={handleDescriptionChange}
                        className='h-32 text-sm w-full lg:max-w-[752px] resize-none text-gray outline-none border px-4 py-3 border-border-color focus:border-orange input-animation rounded-md'
                    ></textarea>
                </div>
            </div>
        </section>
    );
};

export default IncidentThree;
