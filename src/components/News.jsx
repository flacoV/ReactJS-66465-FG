import React from 'react'
import Heading from './shared/Heading'
import Img1 from '../../public/assets/news/news1.jpg'
import Img2 from '../../public/assets/news/news2.jpg'
import Img3 from '../../public/assets/news/news3.jpg'

const NewsData = [
    {
        title: 'VR Quest implements AI functions',
        subtitle:'In the last VR Quest update the company announce what we call the future, all handle assisted by AI and more ',
        published: '12 June 2024',
        image: Img1,
    },
    {
        title: 'How to create your ideal setup',
        subtitle:'The prestigious company NVIDIA talks a little more on how to choose all your gamings parts for you to create your ideal set up',
        published: '13 June 2024',
        image: Img2,
    },{
        title: 'How to choose your smartwatch',
        subtitle:'Explore the functions and comforts of each smartwatch so you can choose the best one that suits you.',
        published: '15 June 2024',
        image: Img3,
    }
]

const News = () => {
  return (
    <div>
        <div className='container'>
            {/*Header Section */}
            <Heading title={'Recent News'}
            subtitle={'Stay tunned to our news for unique discounts'} />

            {/* News Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/*Cards Section */}
                {
                    NewsData.map((data) => (
                        <div>
                            {/* Image Section */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} alt=""
                                    className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                                />
                            </div>
                            {/* Content Section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-400'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-500 dark:text-gray-300'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default News