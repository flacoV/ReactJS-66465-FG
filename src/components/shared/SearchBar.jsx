import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, categories, category, setCategory, onCategoryClick }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSearchSubmit} className="w-full max-w-lg">
      <div className='flex flex-row justify-center p-8 m-5 space-y-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200 dark:bg-gray-800 dark:text-white'>
        <div className="flex flex-col justify-center">
          <div className="flex items-center bg-gray-100 p-4 space-x-4 rounded-lg">
            <Link className='font-bold text-gray-500' to="/shop">
              <FaArrowLeft />
            </Link>
            <input
              className="bg-gray-100 outline-none text-gray-500 flex-grow"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for products..."
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${category === cat ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => onCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
