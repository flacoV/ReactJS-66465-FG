import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    handleSearch()
}
  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex items-center p-8 m-5 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200 dark:bg-gray-800 dark:text-white">
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className="bg-gray-100 outline-none text-gray-500"
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="bg-gray-800 py-3 px-5 text-white dark:bg-gray-500 font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
