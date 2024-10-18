import React from 'react';
import cloud from '../../../public/cloudImage.png';
import building from '../../../public/Building.png';
import cn from 'classnames';

function Card({ image, title, description, price, classNames }) {
    return (
        <div className='relative'>
            <img src={cloud} alt="" className={cn('absolute right-0 p-2')} />
            <img src={building} alt="" className={cn('absolute right-0 p-2')} />
            <img src={image} alt={title} className='h-[253px] w-full object-cover rounded-[10px]' />
            <p className='font-bold text-lg font-onest'>{title}</p>
            <p className='text-[14px] text-gray-500 font-onest'>{description}</p>
            <p className='text-lg font-bold font-onest'>{price}</p>
        </div>
    );
}

export default Card;
