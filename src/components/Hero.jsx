import React from 'react'
import Slider from 'react-slick'
import Image1 from '../assets/hero/greenHs.png'
import Image2 from '../assets/hero/macbookPro.png'
import Image3 from '../assets/hero/ps5sm.png'
import Image4 from '../assets/hero/rtx4090.png'
import Button from './shared/Button'
import { FaApple } from "react-icons/fa";



const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: 'Razer Gaming',
        title: 'Wireless',
        title2: 'Headphone',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
        id: 2,
        img: Image2,
        icon: <FaApple />,
        subtitle: 'Apple',
        title: 'Macbook Pro',
        title2: 'M2 Chip',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
        id: 3,
        img: Image3,
        subtitle: 'Sony',
        title: 'Play Station 5',
        title2: 'SpiderMan',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
        id: 4,
        img: Image4,
        subtitle: 'Nvidia',
        title: '4090',
        title2: 'RTX Series',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
]

const Hero = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "easi-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };

  return (
    <div className='pt-8 dark:bg-gray-900'>
        <div className='container'>
        <div className='flex flex-col justify-center items-center p-10'> 
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Buy quicker,</span> buy smarter.</h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Tech Store were gaming comes true.</p>
        </div>
        <div className='overflow-hidden rounded-3xl min-h-[550px] 
        sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
            {/* Seccion del Hero */}
        <div className='container pb-8 sm:pb-0'>
        <Slider { ...settings}>
            {
             HeroData.map((data) => (
                <div key={data.id}>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                     {/* Seccion del contenido */}
                        <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 
                        text-center sm:text-left order-2 sm:order-1
                        relative z-10 '>
                            <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h2>
                            <h2 className='text-5xl uppercase text-white dark:text-white/5
                            sm:text-[80px] md;text-[100px] xl:text-[150px] font-bold'>{data.title2}</h2>
                            <div>
                                <Button text='Shop Now' 
                                bgColor='bg-primary' 
                                textcolor='text-white' 
                                />
                            </div>
                        </div>
                     {/* Seccion de la imagen */}
                     <div className='order-1 sm:order-2'>
                        <div>
                            <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 
                            object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40' />
                        </div>
                     </div>
                    </div>
                </div>
             ))
            }
        </Slider>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero