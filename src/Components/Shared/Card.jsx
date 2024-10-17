import React from 'react';
import cloud from '../../../public/cloudImage.png';

function Card({ image, title, description, price }) {
    return (
        <div className='flex flex-col gap-4 w-[306px] shadow-sm card-layout transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 duration-200 ease-in-out cursor-pointer '> 
            <div className='relative' >
                <img src={cloud} alt="" className='absolute  right-0 p-2 ' />
                <img src={image} alt={title} className='h-[253px] w-full object-cover rounded-[10px]' />

            </div>
            <p className='font-bold text-lg font-onest '>{title}</p>
            <p className='text-[14px] text-gray-500 font-onest '>{description}</p>
            <p className='text-lg font-bold font-onest '>{price}</p>
        </div>
    );
}

export default Card;
