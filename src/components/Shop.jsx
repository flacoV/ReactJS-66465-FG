import React, { useEffect, useState } from 'react';
import { getData } from '../components/helpers/getData.js';
import Loader from '../components/shared/Loader.jsx';
import SearchBar from './shared/SearchBar.jsx';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData()
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error("Error fetching products: ", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filtrar productos cuando cambien searchTerm o category
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!category || product.category === category)
    );
    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);

  const handleSearch = () => {
    // Realizar el filtrado de productos aquí
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!category || product.category === category)
    );
    setFilteredProducts(filtered);
  };

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
            category={category}
            setCategory={setCategory}
            categories={categories}
            handleSearch={handleSearch}
          />
        </div>
        <div className='container products flex justify-center items-center flex-wrap gap-9'>
          {loading ? (<Loader />) : error ? (<div>Error loading products.</div>) :
            (filteredProducts.map((product) => (
              <div key={product.id}>
                <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl dark:bg-gray-800">
                  <div className="card-border-top"></div>
                  <div className="img">
                    <img src="" alt="" />
                  </div>
                  <span className='text-gray-900 dark:text-white'>{product.name}</span>
                  <p className="job text-gray-500">{product.brand}</p>
                  <button className='bg-black text-white dark:bg-gray-500'>Details</button>
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