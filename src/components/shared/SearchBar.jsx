import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../database/products.json'
import Loader from '../shared/Loader'
import { FaArrowLeft } from "react-icons/fa";


const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, brands, brand, setBrand }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    handleSearch();
  };

  const handleBrandClick = (brand) => {
    setBrand(brand);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="w-full max-w-lg">
      <div className='flex flex-row justify-center p-8 m-5 space-y-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200 dark:bg-gray-800 dark:text-white'>
      <div className="flex flex-col justify-center">
        <div className="flex items-center bg-gray-100 p-4 space-x-4 rounded-lg">
          <a className='font-bold text-gray-500' href="/shop"> 
        <FaArrowLeft />
          </a>
          <input
            className="bg-gray-100 outline-none text-gray-500 flex-grow"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for products..."
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {brands.map((br, index) => (
            <Link 
              key={index} 
              to={`/shop/brand/${br}`}
              className={`px-4 py-2 rounded-lg ${brand === br ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => handleBrandClick(br)}
            >
              {br}
            </Link>
          ))}
        </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;