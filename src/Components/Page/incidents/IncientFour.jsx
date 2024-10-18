import React from 'react';
import mapImage from '../../../../public/mapImage.png';

export function IncidentFour() {
    return (
        <section className='container mx-auto py-10'>
            <div className='flex justify-center'>
                <div className='flex flex-col gap-4  rounded-lg p-6 lg:max-w-2xl w-full'>
                    <div className='flex flex-col gap-2  '>
                        <h1 className='text-3xl font-bold text-start text-gray-800 ml-8 '>Where’s the incident?</h1>
                        <p className='text-sm text-gray-500 text-start ml-8'>
                            Enter a GPS, address, or pinpoint on the map. Try to be as accurate as possible, or click: 
                            <span className='font-semibold text-orange-500'> Jurisdiction Wide</span>
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <img src={mapImage} alt="Map Illustration" className='w-full h-auto max-w-[600px] rounded-lg shadow-sm' />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300'>
                            Jurisdiction Wide
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
