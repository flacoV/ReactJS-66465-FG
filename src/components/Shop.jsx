import React, { useEffect, useState } from 'react';
import { getData } from '../components/helpers/getData.js';
import Loader from '../components/shared/Loader.jsx';
import Button from './shared/Button.jsx';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products: ", error);
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='pt-8 dark:bg-gray-900'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center p-10'>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Browse </span> our products.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Filter by category or brand.</p>
        </div>
        <div className='container products flex justify-center items-center flex-wrap gap-9'>
          {loading ? (<Loader />) : error ? (<div>Error loading products.</div>) : 
          (products.map((product) => (
              <div key={product.id}>
                <div className="card hero-bg-color">
                  <div className="card-border-top"></div>
                  <div className="img">
                    <img src="" alt="" />
                  </div>
                  <span className='text-gray-900 dark:text-white'>{product.name}</span>
                  <p className="job text-gray-500">{product.brand}</p>
                  <button className='bg-black text-white dark:bg-gray-500 dark:text-gray-900'>Details</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;












{/* import React from 'react'
import { getData } from '../components/helpers/getData.js'

const Shop = ( {products} ) => {
  return (
    <div className='pt-8 dark:bg-gray-900'>
        <div className='container'>
            <div className='flex flex-col justify-center items-center p-10'> 
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Browse </span> our products.</h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Filter by category or brand.</p>
        </div>
        <div className='container products'>
            {
                products.map((product) => <h2 key={product.id}>{product.name}</h2>)
            }
        </div>
        </div>
    </div>
  )
}

export default Shop */}