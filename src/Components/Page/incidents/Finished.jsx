import React from 'react';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

function Finished() {
    return (
        <section className='container mx-auto h-screen flex justify-center items-center flex-col gap-5'>
            {/* Rotating Icon */}
            <div className='h-[250px] w-[250px] rounded-full border-8 border-orange-500 flex justify-center items-center   '>
                <IoCheckmarkDoneCircleOutline className='h-36 w-36 text-orange-500' />
            </div>
            <p className='text-2xl text-orange animate-text-pop'>Finished!</p>
        </section>
    );
}

export default Finished;
