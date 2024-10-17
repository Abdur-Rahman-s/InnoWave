import React from 'react';
import Camera from '../../../public/Camera.png';
import Url from '../../../public/Url.svg';
import Image from '../../../public/Image.svg';
import Button from '../Shared/Button';

const ChatBox = () => {
    return (
        <>
            <h1 className="text-[18px] font-bold rounded-t-xl bg-orange text-white px-[15px] py-[25px]">Chat with Cypher</h1>

            <div className='px-[15px]'>
                <div className='flex flex-col'>
                    <p className='messege'>Lorem ipsum dolar sit general sac mascho werho</p>
                    <p className='messege2'>Lorem ipsum dolar sit general sac mascho werho</p>
                    <p className='messege2'>Lorem ipsum dolar sit general sac mascho werho</p>
                    <p className='messege'>Lorem ipsum dolar sit general sac mascho werho</p>
                </div>

                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Enter your question..."
                        className="
                        w-full 
                        px-4 
                        py-2 
                        border
                        outline-none 
                        border-gray
                        rounded-lg 
                        bg-[#F3F4F6] 
                        focus:border-orange
                        placeholder-gray-500"
                    />
                </div>

                <div className="flex justify-between items-center mt-4 pb-[23px] ">
                    <div className="flex space-x-4">
                        <img src={Camera} alt="Camera" className="cursor-pointer" />
                        <img src={Image} alt="Image" className="cursor-pointer" />
                        <img src={Url} alt="Link" className="cursor-pointer" />
                    </div>

                    <Button className="rounded-full">
                        Send
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ChatBox;
