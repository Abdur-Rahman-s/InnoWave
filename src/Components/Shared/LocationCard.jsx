import React from 'react';

function LocationCard({ heading, Title, Price, image }) {
    return (
        <div className='w-full h-[108px] bg-[#F4F4F5] flex items-center font-onest rounded-[10px]'>
            <div className='px-[10px] py-[15px] flex gap-[17px]'>
                <div>
                    <img src={image} alt="" className='h-[78px] w-[78px] rounded-[10px]' />
                </div>
                <div>
                    <h1 className='text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-[20px] sm:leading-[26px] md:leading-[30px]'>
                        {heading}
                    </h1>
                    <p className='text-gray text-[12px] sm:text-[14px] md:text-[16px]'>
                        {Title}
                    </p>
                    <p className='text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-[20px] sm:leading-[26px] md:leading-[30px]'>
                        {Price}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LocationCard;
