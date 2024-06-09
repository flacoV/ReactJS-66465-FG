import React from 'react'
import Button from './shared/Button'
import Image1C from '../../public/assets/category/pinkLogitech.png'
import Image2C from '../../public/assets/category/rtx490.png'
import Image3C from '../../public/assets/category/macbook.png'

const Category = () => {
  return (
    <div className='py-8 dark:bg-gray-900'>
        <div className='container'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primera Columna */}
            <div className='py-10 pl-5 bg-gradient-to-br from-lightPink/90 to-lightPink/20 text-white rounded-3xl 
            relative h-[320px] flex items-end'>
                <div>
                  <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold  mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2 pb-2'>Logitech</p>
                    <Button
                      text= "Browse"
                      bgColor={"bg-lightPalette1"}
                      textColor={"text-white"}
                    />
                  </div>
                </div>
                <img src={Image1C} alt=""
                className='w-[320px] absolute bottom-0 left-10'
                />
              </div>
              {/* Segunda Columna */}
              <div className='py-10 pl-5 bg-gradient-to-br from-primary/90 to-brGreen/10 text-white rounded-3xl 
            relative h-[320px] flex items-end overflow-hidden'>
                <div>
                  <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Evolve</p>
                    <p className='text-2xl font-semibold  mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2 pb-2'>RTX Series</p>
                    <Button
                      text= "Browse"
                      bgColor={"bg-darkGreen"}
                      textColor={"text-white"}
                    />
                  </div>
                </div>
                <img src={Image2C} alt=""
                className='w-[320px] absolute overflow-hidden top-0 left-10'
                />
              </div>
              {/* Tercera Columna */}
              <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-secondary/90 to-secondary/10 text-white rounded-3xl 
            relative h-[320px] flex items-end overflow-hidden'>
                <div>
                  <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Explore</p>
                    <p className='text-2xl font-semibold  mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2 pb-2'>Macos</p>
                    <Button
                      text= "Browse"
                      bgColor={"bg-white"}
                      textColor={"text-gray-900"}
                    />
                  </div>
                </div>
                <img src={Image3C} alt=""
                className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-0'
                />
              </div>
              </div>
          </div>     
        </div>
  )
}

export default Category