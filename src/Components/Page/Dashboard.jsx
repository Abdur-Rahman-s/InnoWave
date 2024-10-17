import React, { useState } from 'react';
import Gallery from '../Shared/Gallery';
import ChatBox from '../Shared/ChatBox';
import { GrClose } from "react-icons/gr";

const Dashboard = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle); // Toggles the value of the state
    };

    return (
        <section className='bg-[#FAFAFA]'>
            <div id='Dashboard' className=' lg:container mx-auto'>
                <Gallery />

                {/* Chat Box Section - slide and scale animation based on toggle */}
                <div
                    className={`fixed bottom-0 right-2 sm:right-8 w-[331px] transition-all duration-500 ease-in-out ${
                        toggle ? 'scale-100 opacity-100 -translate-y-28' : 'scale-0 opacity-0 translate-y-4'
                    } origin-bottom-right`}
                >
                    <div className="bg-[#F4F4F5] rounded-lg shadow-lg">
                        <ChatBox />
                    </div>
                </div>

                {/* Toggle Button */}
                <div className='fixed flex justify-center items-center text-4xl text-white bottom-8 right-2 sm:right-8 h-[77px] w-[77px] bg-orange rounded-full shadow-lg cursor-pointer'>
                    <button onClick={handleToggle}>
                        {toggle ? <GrClose /> : 'C'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
