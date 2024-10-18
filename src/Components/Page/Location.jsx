import React from 'react';
import { TiLocation } from "react-icons/ti";
import Card from '../Shared/Card';
import LocationCard from '../Shared/LocationCard';

function Location() {
    return (
        <section className='container mx-auto px-4 md:px-6 lg:px-0'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-[94px] mt-8 md:mt-10'>
                <div id='first_Child' className='flex flex-col gap-10 md:w-2/3'>

                    <div className='flex flex-col gap-6 justify-center border-b border-border-color pb-[40px] '>
                        <div className='flex items-center gap-5'>
                            <div className='h-9 w-9 rounded-full text-gray bg-[#F4F4F5] flex items-center justify-center shadow-lg'>
                                <TiLocation className='text-xl' />
                            </div>
                            <div>
                                <p className='text-sm text-gray leading-6'>Location</p>
                                <h1 className='text-lg md:text-xl font-bold leading-6'>Tulare County, Los Angeles, CA 23415</h1>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div className='h-9 w-9 rounded-full text-gray bg-[#F4F4F5] flex items-center justify-center shadow-lg'>
                                <img src={'../../../public/Vector.png'} alt="" />
                            </div>
                            <div  >
                                <p className='text-sm text-gray leading-6'>Approx. Cost:</p>
                                <h1 className='text-xl font-bold leading-6'>$60,607,456.00</h1>
                            </div>
                        </div>
                    </div>
                    
                    {/* Description  */}
                    <div className='flex flex-col gap-3  border-b border-border-color pb-[48px] ' >
                        <h1 className='text-lg md:text-xl font-bold leading-6' >Description</h1>
                        <p className='text-sm text-gray leading-6'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <h1 className='text-sm font-bold leading-6'>Locations</h1>
                        <p className='text-sm leading-6 underline hover:text-blue-500 transition-colors'><a href="#">See all</a></p>
                    </div>

                    <div className='image-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b pb-10 border-border-color'>
                        {Array(4).fill().map((_, index) => (
                            <div key={index}>
                                <Card
                                    image={`/Build_${index % 2 + 1}.png`} // Dynamically card add
                                    title={'Whitechapel Rd.'}
                                    description={'Tulare County, Los Angeles, CA 23415'}
                                    price={'$1,456,654.00'}
                                    classNames='text-xs gap-[11px]'
                                />
                            </div>
                        ))}
                    </div>

                    {/* Activities Section */}
                    <div className='flex flex-col gap-5 border-b border-border-color pb-10'>
                        {/* Activities Section */}
                        <div className='flex justify-between'>
                            <h1 className='text-xl sm:text-base md:text-lg font-bold leading-6'>Activities</h1>
                            <p className='text-sm sm:text-base md:text-lg leading-6 underline hover:text-blue-500 transition-colors'>
                                <a href="#">See all</a>
                            </p>
                        </div>
                        <LocationCard
                            image={'/public/Build_1.png'}
                            Title={'Activity name'}
                            heading={'Location name . 16.12212, -122.1424'}
                            Price={'$1,456,654.00'}
                        />
                        <LocationCard
                            image={'/public/Build_1.png'}
                            Title={'Activity name'}
                            heading={'Location name . 16.12212, -122.1424'}
                            Price={'$1,456,654.00'}
                        />
                    </div>

                    {/* Documents Section */}
                    <div className='flex flex-col gap-5 border-b border-border-color pb-10'>
                        <div className='flex justify-between'>
                            <h1 className='text-sm sm:text-base md:text-lg font-bold leading-6'>Documents</h1>
                            <p className='text-sm sm:text-base md:text-lg leading-6 underline hover:text-blue-500 transition-colors'>
                                <a href="#">See all</a>
                            </p>
                        </div>
                        <LocationCard
                            image={'/public/Build_1.png'}
                            Title={'Document name'}
                            heading={'Location name . 16.12212, -122.1424'}
                            Price={'$1,456,654.00'}
                        />
                        <LocationCard
                            image={'/public/Build_1.png'}
                            Title={'Document name'}
                            heading={'Location name . 16.12212, -122.1424'}
                            Price={'$1,456,654.00'}
                        />
                    </div>

                </div>

                {/* Incident Map Section */}
                <div className='flex flex-col gap-5 cursor-pointer md:w-1/3'>
                    <p className='text-gray text-sm'>Incident Map</p>
                    <img src={'/Location.png'} alt="map" className='rounded-lg shadow-lg object-cover w-full h-64' />
                    <p className='text-sm text-gray'>Start 19.1232, -118.233 &nbsp;&nbsp; End 19.3245, -119.2323</p>
                </div>
            </div>
        </section>
    );
}

export default Location;
