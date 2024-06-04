import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../database/products.json'
import Loader from '../shared/Loader'

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
      <div className="flex flex-col justify-center p-8 m-5 space-y-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200 dark:bg-gray-800 dark:text-white">
        <div className="flex bg-gray-100 p-4 space-x-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
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
              className={`px-4 py-2 rounded-lg ${brand === br ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => handleBrandClick(br)}
            >
              {br}
            </Link>
          ))}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;