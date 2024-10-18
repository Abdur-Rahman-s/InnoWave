import React from 'react';
import Card from '../Shared/Card';

function Location() {
    return (
        <section className='container mx-auto'>
            <div className='flex gap-[94px] mt-[40px]'>
                <div id='first_Child' className='flex flex-col gap-[15px]'>
                    <div className='flex justify-between'>
                        <h1 className='text-[14px] font-bold leading-[22px]'>Locations</h1>
                        <p className='text-[14px] leading-[22px]'><a href="#">See all</a></p>
                    </div>

                    <div className='image-section grid grid-cols-3 grid-rows-2 gap-6 border-b pb-[40px] border-border-color'>
                        {Array(4).fill().map((_, index) => (
                            <div key={index}>
                                <Card
                                    image={`/Build_${index % 2 + 1}.png`} // Dynamically using Build_1 or Build_2
                                    title={'Whitechapel Rd.'}
                                    description={'Tulare County, Los Angeles, CA 23415'}
                                    price={'$1,456,654.00'}
                                    classNames='text-xs gap-[11px]'
                                />
                            </div>
                        ))}
                    </div>
                    
                    <div>

                        
                    </div>
                    
                </div>

                <div className='flex flex-col gap-5 cursor-pointer'>
                    <p className='text-gray text-[14px]'>Incident Map</p>
                    <img src={'/Location.png'} alt="map" />
                    <p className='text-[14px] text-gray'>Start 19.1232, -118.233 &nbsp;&nbsp; End 19.3245, -119.2323</p>
                </div>
            </div>
        </section>
    );
}

export default Location;
