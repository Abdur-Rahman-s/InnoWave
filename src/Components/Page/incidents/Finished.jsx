import React, { useState, useEffect } from 'react';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

function Finished() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 900); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='container mx-auto h-screen flex justify-center items-center flex-col gap-5'>
            <div className='h-[250px] w-[250px] rounded-full border-8 border-orange flex justify-center items-center animate-rotateY'>
                <IoCheckmarkDoneCircleOutline className='h-36 w-36 text-orange' />
            </div>
            {showText && (
                <p className='text-2xl text-orange animate-text-pop animate-pulse  '>
                    Finished!
                </p>
            )}
        </section>
    );
}

export default Finished;
