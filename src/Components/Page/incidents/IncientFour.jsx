import React from 'react';
import mapImage from '../../../../public/map.png';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export function IncidentFour() {
    return (
        <section className='container mx-auto py-10'>
            <div className='flex justify-center relative '>
                <div className='flex flex-col gap-4'>
                    <div  >
                        <form className='absolute top-36  ml-12 '>
                            <div className='relative '>
                                <input
                                    type="text"
                                    className='border border-border-color rounded-md bg-[#F4F4F5] px-6 py-2  text-sm pr-10 focus:outline-none focus:border-orange-500'
                                    placeholder='Enter incident address or GPS'
                                />
                                <span className='absolute inset-y-0 left-2 flex items-center text-gray-500'>
                                    <HiOutlineMagnifyingGlass />
                                </span>
                            </div>
                            <div className='relative mt-2 '>
                                <input
                                    type="text"
                                    className='border border-border-color rounded-md bg-[#F4F4F5] px-6 py-2  text-sm pr-10 focus:outline-none focus:border-orange-500'
                                    placeholder='Pinpoint damage'
                                />
                                <span className='absolute inset-y-0 left-2 flex items-center text-gray-500'>
                                    <HiOutlineMagnifyingGlass />
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col gap-2 rounded-lg p-6 lg:max-w-2xl w-full '>
                        <h1 className='text-3xl font-bold text-start text-gray-800'>Where’s the incident?</h1>
                        <p className='text-sm text-gray-500 text-start'>
                            Enter a GPS, address, or pinpoint on the map. Try to be as accurate as possible, or click:
                            <span className='font-semibold text-orange-500'> Jurisdiction Wide</span>
                        </p>
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
            </div>
        </section>
    );
}
