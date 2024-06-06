import React, { useEffect, useState } from 'react';
import { getData } from '../components/helpers/getData.js';
import Loader from '../components/shared/Loader.jsx';
import SearchBar from './shared/SearchBar.jsx';
import { Link } from 'react-router-dom';


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [brand, setBrand] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getData()
        .then(data => {
          setProducts(data);
          setFilteredProducts(data);
          setLoading(false);  // Set loading to false after successful fetch
          const uniqueBrands = [...new Set(data.map(product => product.brand))];
          setBrands(uniqueBrands);
        })
        .catch(error => {
          console.error("Error fetching products: ", error);
          setError(error);
          setLoading(false);
        });
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!brand || product.brand === brand)
    );
    setFilteredProducts(filtered);
  }, [searchTerm, brand, products]);

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!brand || product.brand === brand)
    );
    setFilteredProducts(filtered);
  };

  const handleBrandClick = (brand) => {
    setBrand(brand);
  }


  return (
    <div className='pt-8 dark:bg-gray-900'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center p-10'>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Browse </span> our products.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Filter by category or brand</p>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            brands={brands}
            brand={brand}
            setBrand={setBrand}
          />
        </div>
        <div className='container products flex justify-center items-center flex-wrap gap-9'>
        {loading ? (<Loader />) : error ? (<div>Error loading products.</div>) :
            (filteredProducts.map((product) => (
              <div key={product.id}>
                <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl dark:bg-gray-800">
                  <div className="card-border-top"></div>
                  <div className="img">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <span className='text-gray-900 dark:text-white'>{product.name}</span>
                  <p className="job text-gray-500">{product.brand}</p>
                  <div className='w-400 flex justify-center p-2'>
                  <Link
                  to={`/product/{product.name}`}
                  className='inline-block rounded-3xl px-6 pb-2 pt-2.5 text-xs font-medium 
                  uppercase leading-normal
                text-white shadow-primary-3 transition 
                  duration-150 ease-in-out'
                  >
                  Details
                  </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;