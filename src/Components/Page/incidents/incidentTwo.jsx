import React, { useState } from 'react';
import IncidentOption from '../../Shared/IncidentOption';
import { options } from '../../utilities/options';
import InciidentThree from './InciidentThree';

function IncidentTwo() {
    return (
        <section className="flex flex-col gap-6 container mx-auto p-4">
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-[#09090B] font-bold leading-tight text-center'>
                    Which of these best describes the incident?
                </h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
                    {options.map((option, index) => (
                        <IncidentOption key={index} image={option.image} title={option.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IncidentTwo;
