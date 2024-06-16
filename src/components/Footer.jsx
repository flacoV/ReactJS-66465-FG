import React from 'react'
import { FaCopyright } from "react-icons/fa";
import { FaLocationArrow } from 'react-icons/fa6';


const FooterLinks = [
    {
        title: 'Home',
        link: '/#',
    },
    {
        title: 'About',
        link: '/about',
    },
    {
        title: 'Contact',
        link: '/contact',
    },
    {
        title: 'News',
        link: '/news',
    },
]

const FooterLinks2 = [
    {
        title: 'Disccounts',
        link: '/#',
    },
    {
        title: 'Join Us',
        link: '/#',
    },
    {
        title: 'Refunds',
        link: '/#',
    },
    {
        title: 'Support',
        link: '/#',
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container'>
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/*Company Details */}
                <div className='py-8 px-4'>
                    <a href="#" className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                        Tech Store
                    </a>
                    <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sed.
                        laudantium reprehenderi
                    </p>
                    <p className='text-gray-600 mt-4 flex items-center'>
                        Copyright TECH STORE 2024
                        <FaCopyright className='mx-0.5'/>
                    </p>
                    <a href="" className='inline-block bg-gradient-to-r to-emerald-600 from-sky-400 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                        Contact Us
                    </a>
                </div>
                {/* Footer Links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-500 dark:text-gray-600 hover:text-black duration-300 hover:dark:text-white'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Other Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks2.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-500 dark:text-gray-600 hover:text-black duration-300 hover:dark:text-white'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <div>
                            <div className='flex items-center gap-3 flex-col text-gray-500 dark:text-gray-600'>
                                <h1 className='text-xl font-bold sm:text-left mb-3 text-black dark:text-white'>
                                    Reach the Office
                                </h1>
                            <div className='flex items-center gap-1'>
                                <FaLocationArrow />
                                <p>Cupertino, CA 95014</p>
                            </div>
                            <p>United States</p>
                            <p>+1 965-239-0523 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer