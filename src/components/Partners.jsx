import React from 'react'
import brand1 from '../../public/assets/partners/apple.png'
import brand2 from '../../public/assets/partners/nvidia.png'
import brand3 from '../../public/assets/partners/msi.png'
import brand4 from '../../public/assets/partners/xbox.png'
import brand5 from '../../public/assets/partners/logitech.png'

const Partners = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10 '>
        <div className='container '>
            <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
                <img src={brand1} alt="" className='w-[90px] dark:invert' />
                <img src={brand2} alt="" className='w-[90px] dark:invert' />
                <img src={brand3} alt="" className='w-[90px] dark:invert' />
                <img src={brand4} alt="" className='w-[90px] dark:invert' />
                <img src={brand5} alt="" className='w-[90px] dark:invert' />
            </div>
        </div>
    </div>
  )
}

export default Partners