import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdVerified } from "react-icons/md";
import profile1 from '../../public/assets/profilePictures/profile1.png';
import profile2 from '../../public/assets/profilePictures/profile2.png';
import profile3 from '../../public/assets/profilePictures/profile3.png';
import profile4 from '../../public/assets/profilePictures/profile4.png';
import profile5 from '../../public/assets/profilePictures/profile5.png';
import profile6 from '../../public/assets/profilePictures/profile6.png';
import profile7 from '../../public/assets/profilePictures/profile7.png';
import profile8 from '../../public/assets/profilePictures/profile8.png';
import profile9 from '../../public/assets/profilePictures/profile9.png';

const UsersFeedback = () => {
  useEffect(() => {
    Swiper.use([Pagination, Autoplay]);
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });
  }, []);

  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className='max-w-screen-sm text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
            +120k Customers gave their  
            <span className='pl-3 select-none text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
               Feedback
            </span>
          </h1>
          <p className='text-sm text-gray-500 font-medium mb-4 block'>Testimonial</p>
        </div>

        {/* Body Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper w-max">
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Purchased a new gaming console and joystick. The prices were unbeatable, and the delivery was super fast. Very happy with my purchase!
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src={profile2} />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Mary S</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Amazing selection of tech products! Found everything from gaming consoles to PC components. Fast shipping and excellent customer service.
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10 rounded-full " src={profile1} alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Mathew G</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Tech Store has the best deals on phones and computer parts. Quick delivery and very responsive support team. Highly recommended!
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src={profile3} alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Endrick H</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Great variety of PC components and accessories. The website is easy to navigate, and my order arrived on time. Five stars!
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src={profile4} alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Josh J</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Tech Store offers a fantastic range of tech gadgets. I bought a new phone and it arrived in perfect condition. Great service!
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src={profile5} alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Jhon D</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Wide selection of tech products at competitive prices. Bought a phone and some gaming accessories. Fast shipping and good customer service.
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src={profile6} alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Phillip G</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Tech Store's customer service is top-notch. They helped me choose the perfect laptop for work. Very satisfied with my purchase.
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src={profile7} alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Mary O</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      I’ve been buying from Tech Store for years. From phones to PC parts, they never disappoint. Reliable and trustworthy service every time.
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Tara N</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Great selection of gaming accessories. Found the perfect joystick for my flight simulator. Quick delivery and excellent prices!
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src={profile8} alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Lenny Q</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-sky-400 hover:shadow-sm">
                    <div>
                      <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">4.9</span>
                      </div>
                      <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      Great selection of gaming accessories. Found the perfect joystick for my flight simulator. Quick delivery and excellent prices!
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                      <img className="h-10 w-10" src={profile9} alt="avatar" />
                      <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Jax T</h5>
                        <span className="flex text-sm gap-1 items-center leading-4 text-verified"><MdVerified />
                        Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* More slides */}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UsersFeedback;
