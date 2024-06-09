import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Services from './components/Services'
import Banner from './components/Banner'
import Iphone15 from '../public/assets/banner/iphone15.png'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import ItemDetails from './components/ItemDetails'
import Cart from './components/cart/Cart'
import CartItems from './components/cart/CartItem'

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
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <Category />
              <Services />
              <Banner data={BannerData}/>
            </>
          }/>
          <Route path='/shop' className='dark:bg-gray-900' element={<Shop />} />
          <Route path='/shop/brand/:brand' element={<Shop />} />        
          <Route path='/shop/product/:id' element={<ItemDetails />} />
          </Routes>
        <ItemDetails />
      </BrowserRouter>
    </div>
  )
}

export default App
