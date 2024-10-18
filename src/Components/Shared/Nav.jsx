import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrMenu, GrClose } from "react-icons/gr";
import cn from 'classnames';
import logo from '../../../public/Logo.png';
import profile from '../../../public/Profile.png';
import bellicon from '../../../public/Belicon.png';
import Cross from '../../../public/Cros.png'
import Button from './Button';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";


const Nav = ({ title, value, text, classNames, className }) => {
    const [isActive, setIsActive] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    function handleActiveLink(linkName) {
        setActiveLink(linkName); // Using prev state to toggle
    }

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


    const pathsWithBorder = {
        '/dashboard': 'Dashboard',
        '/incidents': 'Incidents',
        '/locations': 'Locations',
        '/activities': 'Activities',
        '/documents': 'Documents',
        '/cypher-ai': 'Cypher AI',
    };

    const PreviusPage = () => {
        if (location.pathname === '/get-started') {
            return '/new-incident'
        }
        if (location.pathname === '/next-step') {
            return '/get-started'
        }
        if (location.pathname === '/second-step') {
            return '/next-step'
        }
    }
    useEffect(() => {
        const currentLink = pathsWithBorder[location.pathname];
        if (currentLink) {
            setActiveLink(currentLink); // Set activeLink based on current location
        }
    }, [location.pathname]);
    const incidentLink = () => {
        const location = useLocation();

        if (location.pathname === '/next-step') {
            return '/second-step';
        } else if (location.pathname === '/get-started') {
            return '/next-step';
        }
        else if (location.pathname === '/second-step') {
            return '/finished';
        }
        return '/new-incident';
    };


    const incidentText = () => {
        if (location.pathname === '/second-step') {
            return 'Finished';
        } else {
            return 'Next step';
        }
    };

    return (
        <nav className='font-onest' >
            <div className='w-full border-b-[1px] border-border-color bg-nav-color pt-[23px]'>
                <div className='lg:container mx-auto flex justify-between items-center inset-0 px-4 md:px-0 h-[59px] pb-[15px]'>

                    {/* Logo Section */}
                    <div className='Logo'>
                        <Link to={'/dashboard'} ><img src={logo} alt="Logo" className='w-32' /></Link>
                    </div>

                    {/* Dynamic Navigation Links for larger screens */}
                    <div className='hidden md:flex items-center'>
                        <ul className="flex gap-6 text-gray-600">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`nav-link-design ${activeLink === link.name || pathsWithBorder[location.pathname] === link.name ? 'border-b-2 border-dark' : 'border-none'}`}
                                        onClick={() => handleActiveLink(link.name)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Profile Section for larger screens */}
                    <div className='hidden lg:flex items-center gap-4'>
                        <div className='relative h-12 w-12 bg-white rounded-full flex  '>
                            <div className='h-[10px] w-[10px] rounded-full bg-green-500 absolute left-9 top-1 ' ></div>
                            <img src={bellicon} alt="Bell Icon" className='p-2 absolute left-1 top-1 ' />
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
                <div className='md:hidden fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg p-4 z-50 animate-reveal '>
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
                    <div className='flex justify-start items-center gap-2 mt-8'>
                        <img src={profile} alt="Profile" className='h-8 w-8 rounded-full' />
                        <div>
                            <p className='font-semibold text-xs ms:text-sm'>Usman Zafar</p>
                            <p className='text-[10px] sm:text-sm text-gray-500'>usmanzafar@gmail.com</p>
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
                        <h1 className='text-dark text-[26px] font-bold tracking-[-0.26px] '>{title}</h1>
                    </div>
                    <div className='md:flex gap-3 px-4'>
                        <div className='relative '>
                            <input
                                type="text"
                                placeholder='Pinpoint damage'
                                className='input-design input-animation px-8 '
                            />
                            <span className='absolute text-gray top-3 inset-y-0 left-2 flex items-center text-gray-500'>
                                <HiOutlineMagnifyingGlass />
                            </span>
                        </div>
                        <input placeholder='Sort By: Date modified' className='input-design input-animation px-[10px]' />
                        <Button className='md:py-3 w-full md:w-auto text-xs rounded-md mt-3 shadow-md hover:shadow-lg'>
                            <Link to={linkPath()}>{buttonText()}</Link>
                        </Button>
                    </div>
                </div>


            </div>
            <div className={cn('w-full bg-nav-color pt-8 pb-6', className)}>
                <div className='font-onest lg:container mx-auto'>
                    <div className='flex flex-col   md:flex-row justify-between items-center'>
                        <div className='flex items-center gap-3 mb-4 md:mb-0'>
                            <img src={Cross} alt="" className='h-10 w-10 shrink-0 cursor-pointer transition-transform hover:scale-110' />
                            <div>
                                <p className='text-sm text-gray-500'>Home - Incidents - New Incident</p>
                                <h1 className='text-2xl font-bold leading-tight'>New Incident</h1>
                            </div>
                        </div>

                        <div className='w-[80%] md:w-[30%] lg:w-[527px] h-[5px] border border-border-color rounded-[10px] my-4 md:my-0'>
                            <div className='h-full' style={{ background: 'linear-gradient(90deg, #F2692E 20%, white 20%)' }}></div>
                        </div>

                        <div className='flex gap-3 mt-4 md:mt-0'>
                            <Button className='bg-white font-bold rounded-md py-2 px-4 shadow-md hover:shadow-lg'>
                                <Link to={PreviusPage()} className='text-gray w-full h-full flex items-center justify-center'>
                                    Back
                                </Link>
                            </Button>

                            <Button className='bg-orange-500 text-white rounded-md text-xs py-2 px-4 shadow-md hover:bg-orange'>
                                <Link to={incidentLink()} className='w-full h-full flex items-center justify-center'>
                                </Link>
                                {incidentText()}
                            </Button>


                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Nav;
