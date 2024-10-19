import React, { useState } from 'react';

const IncidentOption = ({ image, title }) => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(prev => !prev);  // Toggle the state
    };

    return (
        <div 
            className={`flex gap-[10px] px-[10px] hover:bg-orange   hover:text-white py-[22px] w-[165px] sm:w-[180px] items-center rounded-md border border-[#F4F4F5] cursor-pointer transition-colors duration-300 ${
                click ? 'bg-orange text-[#E4E4E7]' : 'bg-[#E4E4E7]'
            }`}
            onClick={handleClick} 
        >
            <div className='flex gap-[10px]'>
                <img 
                    src={image} 
                    alt={title} 
                    className={`transition-filter duration-300 ${
                        click ? 'filter brightness-0 invert' : ''
                    }`}
                />
                <p className='text-[14px]'>{title}</p>
            </div>
        </div>
    );
};

export default IncidentOption;
