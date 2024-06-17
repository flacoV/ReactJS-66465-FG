import React from 'react'
import { FaShippingFast } from "react-icons/fa"
import { RiRefund2Fill, RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const ServiceData = [
    {
        id: 1,
        icon: <FaShippingFast className='text-4xl md:text-5xl' />,
        title: 'Free Shipping',
        description: 'Free shipping on all orders over $180,00'
    },
    {
        id: 2,
        icon: <RiRefund2Fill className='text-4xl md:text-5xl' />,
        title: 'Refund Guaranteed',
        description: '1 year warranty on all your purchases'
    },
    {
        id: 3,
        icon: <RiSecurePaymentFill className='text-4xl md:text-5xl' />,
        title: 'Secure Payment',
        description: 'All payment methods with the highest secure system'
    },
    {
        id: 4,
        icon: <BiSupport className='text-4xl md:text-5xl' />,
        title: '24hs Support',
        description: 'Chat to support anytime you need'
    }
]

const Services = () => {
  return (
    <div>
        <div className='container mt-14 md:mt-20 select-none'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {ServiceData.map((data) => (
                    <div data-aos='fade-down' key={data.id} className='flex items-center flex-col gap-4 text-center'> 
                        {data.icon}
                        <div data-aos='fade-up' >
                            <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold'>{data.title}</h1>
                            <p className='text-gray-500 text-sm'>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services;
