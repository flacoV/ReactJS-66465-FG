import React from 'react'
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import DarkMode from './DarkMode'

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
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search' className='search-bar' />
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
