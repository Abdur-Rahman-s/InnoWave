import React from 'react';
import Image_1 from '../../../../public/Frame.png';
import Image_2 from '../../../../public/Frame-1.png';
import Image_3 from '../../../../public/Frame-2.png';
import Step from '../../../../public/Step.png';
import Button from '../../Shared/Button'
import Nav from '../../Shared/Nav'
import { Link } from 'react-router-dom';
function IncidentsOne() {
    // Corrected cardItem array
    const cardItems = [
        { Image: Image_1, title: 'What type of incident?', description: 'Choose the category that best describes the incident.' },
        { Image: Image_2, title: 'Tell us about the incident?', description: 'Let’s connect the dots and see where to start.' },
        { Image: Image_3, title: 'Where did the incident occur?', description: 'Lorem ipsum dolar sit general sac mascho werho' }
    ];

    return (
        <section >
            
            <div className='py-10 flex flex-col gap-[33px] ' >
                <div className='flex flex-col text-center justify-center '>
                    <h1 className='font-bold text-[32px] tracking-[-0.32px] font-onest mb-4'>Let’s get started</h1>
                    <p className='leading-[26px] text-gray-500 font-onest md:w-[468px] mx-auto'>
                        Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene
                    </p>
                </div>
                <div className='flex justify-center' >
                    <img src={Step} alt="" />
                </div>
                <div className='flex flex-wrap gap-[55px]  justify-center'>
                    {cardItems.map((item, index) => (
                        <div key={index} className='w-[235px] bg-[#F4F4F5] rounded-[10px] p-[20px] flex gap-[68px] flex-col  shadow-lg'>
                            <div>
                                <img src={item.Image} alt={item.title} className='h-[54px] w-[54px] ' />
                            </div>
                            <div className='flex flex-col gap-[22px]   '>
                                <h3 className='text-xl font-onest font-bold'>{item.title}</h3>
                                <p className='text-sm text-gray-600'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-20 ' >
                    <Button className={'font-bold leading-normal rounded-md '} ><Link to='/get-started' >Get started</Link></Button>
                </div>
            </div>
        </section>
    );
}

export default IncidentsOne;
