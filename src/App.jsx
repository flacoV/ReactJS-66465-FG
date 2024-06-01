import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Services from './components/Services'
import Banner from './components/Banner'
import Iphone15 from './assets/banner/iphone15.png'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Router, Routes } from 'react-router-dom'


const BannerData = {
  discount: '40% OFF',
  title: 'Looking Good',
  date: '30 May to 30 Jul',
  image: Iphone15,
  title2: 'Bionic Chip A16',
  title3: 'Winter Sale',
  title4: 'Explore the resent AI assisted search and image processing',
  bgColor: '#cec0ae',
};

const App = () => {
  return (
    <div className=' bg-white dark:bg-gray-900 
    dark:text-white duration-200'>
      <BrowserRouter>
        <Navbar />\

          <Routes>
            <Route path="/" />
          </Routes>


        <Hero />
        <Category />
        <Services />
        <Banner data={BannerData}/>
        <ItemListContainer />
      </BrowserRouter>  
    </div>
  )
}

export default App
