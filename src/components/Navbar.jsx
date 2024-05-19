import React from 'react'
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { HiTrendingUp } from "react-icons/hi";
import { BsFire } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import DarkMode from './DarkMode'


const dropDownLinks = [
    {
        id: 1,
        icon: <HiTrendingUp />,
        name: 'Trending Products',
        link: '/#'
    },
    {
        id: 2,
        icon: <BsFire />,
        name: 'Best Sellig',
        link: '/#'
    },
    {
        id: 3,
        icon: <IoStar />,
        name: 'Top Rated',
        link: '/#'
    },
]

const Navbar = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className="container flex justify-between items-center">
                    <div className='flex items-center gap-4'>
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            Tech Store
                        </a>
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4 '>
                                <li><a href="" className='inline-block px-4 font-semibold text-gray-400 hover:text-black dark:hover:text-white duration-200'>Home</a></li>
                                <li><a href="" className='inline-block px-4 font-semibold text-gray-400 hover:text-black dark:hover:text-white duration-200'>Shop</a></li>
                                <li><a href="" className='inline-block px-4 font-semibold text-gray-400 hover:text-black dark:hover:text-white duration-200'>About</a></li>
                                <li><a href="" className='inline-block px-4 font-semibold text-gray-400 hover:text-black dark:hover:text-white duration-200'>Blog</a></li>
                                <li className='relative cursor-pointer group'>
                                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-400 dark:hover:text-white py-2'>
                                        Quick Links
                                        <span>
                                            <IoIosArrowDropdownCircle className='group-hover:rotate-180 duration-300' />
                                        </span>                                    
                                    </a>
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                        <ul className='space-y-2'>
                                            {
                                                dropDownLinks.map((data, index) => (
                                                    <li className=' flex items-center text-gray-400 hover:text-black dark:hover:text-white dark:hover:bg-brWhite/20 duration-200 hover:bg-primary/20 rounded-md p-1'>
                                                            {data.icon}
                                                        <a className='text-gray-400 hover:text-black rounded-md dark:hover:text-white duration-200 inline-block w-full p-2 font-semibold'
                                                        href={data.link}>
                                                             {data.name}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search a product' className='search-bar' />
                            <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
                        </div>
                        <button className='relative p-3'>
                            <FaCartShopping className='text-xl text-grey-600 dark:text-grey-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                3
                            </div>
                        </button>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
