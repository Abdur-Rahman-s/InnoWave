import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrMenu, GrClose } from "react-icons/gr";
import cn from 'classnames';
import logo from '../../../public/Logo.png';
import profile from '../../../public/Profile.png';
import bellicon from '../../../public/Belicon.png';
import Cross from '../../../public/Cros.png'
import Button from './Button';

const Nav = ({ title, value, text, classNames, className }) => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const ToggleMenu = () => {
        setIsActive(prevState => !prevState);
    };

    // Navigation links stored as objects
    const navLinks = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Incidents", path: "/incidents" },
        { name: "Locations", path: "/locations" },
        { name: "Activities", path: "/activities" },
        { name: "Documents", path: "/documents" },
        { name: "Cypher AI", path: "/cypher-ai" },
    ];

    const buttonText = () => {
        switch (location.pathname) {
            case '/dashboard':
                return 'Cypher AI';
            case '/incidents':
                return '+ New Incident';
            case '/locations':
                return 'Locations';
            case '/activities':
                return 'Activities';
            case '/documents':
                return 'Documents';
            case '/cypher-ai':
                return 'Cypher AI';
            default:
                return '';
        }
    };

    const linkPath = () => {
        if (location.pathname === '/incidents') {
            return '/new-incident';
        }
        return '';
    };

    return (
        <nav>
            <div className='w-full border-b-[1px] border-border-color bg-nav-color pt-[23px]'>
                <div className='lg:container mx-auto flex justify-between items-center inset-0 px-4 md:px-0 h-[59px] pb-[15px]'>

                    {/* Logo Section */}
                    <div className='Logo'>
                        <img src={logo} alt="Logo" className='w-32' />
                    </div>

                    {/* Dynamic Navigation Links for larger screens */}
                    <div className='hidden md:flex items-center'>
                        <ul className='flex gap-6 text-gray-600'>
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className='nav-link-design'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Profile Section for larger screens */}
                    <div className='hidden lg:flex items-center gap-4'>
                        <div className='relative h-12 w-12 bg-white rounded-full flex'>
                            <img src={bellicon} alt="Bell Icon" className='p-2' />
                        </div>
                        <img src={profile} alt="Profile" className='h-12 w-12 rounded-full' />
                        <div>
                            <p className='font-semibold text-gray'>Usman Zafar</p>
                            <p className='text-sm text-gray'>usmanzafar@gmail.com</p>
                        </div>
                    </div>

                    {/* Menu Icon for smaller screens */}
                    <div className='lg:hidden flex items-center'>
                        <button onClick={ToggleMenu} className='text-2xl'>
                            <GrMenu className='text-xl' />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isActive && (
                <div className='md:hidden fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg p-4 z-50'>
                    <button onClick={ToggleMenu} className='text-2xl absolute top-4 right-4 mt-8'>
                        <GrClose className='text-xl' />
                    </button>
                    <ul className='flex flex-col gap-4 text-gray-600 mt-8'>
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link to={link.path} onClick={ToggleMenu} className='nav-link-design'>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Profile Section for Mobile */}
                    <div className='flex justify-start items-center gap-4 mt-8'>
                        <img src={profile} alt="Profile" className='h-8 w-8 rounded-full' />
                        <div>
                            <p className='font-semibold text-xs md:text-sm'>Usman Zafar</p>
                            <p className='text-xs md:text-sm text-gray-500'>usmanzafar@gmail.com</p>
                        </div>
                    </div>
                </div>
            )}

            {isActive && (
                <div id='Profile' className='md:flex justify-end hidden lg:hidden items-center gap-4 mt-2 absolute right-4 top-20 z-10 animate-bounce-in-right bg-white py-3 px-5 animate-reveal'>
                    <div className='relative'>
                        <img src={bellicon} alt="Bell Icon" className='h-12 w-12 bg-gray-300 p-2 rounded-full' />
                    </div>
                    <div>
                        <img src={profile} alt="Profile" className='h-12 w-12 rounded-full' />
                    </div>
                    <div>
                        <p className='font-semibold'>Usman Zafar</p>
                        <p className='text-sm text-gray-500'>usmanzafar@gmail.com</p>
                    </div>
                </div>
            )}


            <div className={cn('border-b-[1px] border-border-color bg-nav-color pb-[23px]', classNames)}>
                <div id='Dashboard' className='lg:container mx-auto md:flex justify-center md:justify-between items-center pt-8 pb-[23px]'>
                    <div className='text-center md:text-start'>
                        <p className='text-xs text-gray'>{value}</p>
                        <h1 className='text-dark text-[26px] font-bold tracking-[-0.26px] text-orange '>{title}</h1>
                    </div>
                    <div className='md:flex gap-3 px-4'>
                        <input placeholder='Search incident' className='input-design' />
                        <input placeholder='Sort By: Date modified' className='input-design' />
                        <Button className='md:py-3 w-full md:w-auto text-xs rounded-md mt-3'>
                            <Link to={linkPath()}>{buttonText()}</Link>
                        </Button>
                    </div>
                </div>

                
            </div>
            <div className={cn('w-full bg-nav-color pt-[32px] pb-[23px] ' , className)}>
                <div className='font-onest container mx-auto   ' >
                        <div className='flex justify-between items-center' >

                            <div className='flex items-center gap-3 ' >
                                <img src={Cross} alt="" className='h-[41px]  w-[41px] shrink-0  cursor-pointer ' />
                                <div>
                                    <p>Home - Incidents - New Incident</p>
                                    <h1 className='text-[26px] font-bold ' >New Incident</h1>
                                </div>
                            </div>
                            <div className='h-[5px] w-[527px] border border-border-color rounded-[10px] ' style={{ background: 'linear-gradient(90deg, #F2692E 20%, white 20%)' }}></div>
                            <div>
                                <Button className={'bg-white text-[#71717A] font-bold  rounded-md'}>
                                    Back
                                </Button>
                                <Button className={'rounded-md text-xs ml-3'}>
                                    Next step
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
        </nav>
    );
};

export default Nav;
