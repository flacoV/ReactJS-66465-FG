import React, { useEffect, useState } from 'react';
import Loader from '../components/shared/Loader.jsx';
import SearchBar from './shared/SearchBar.jsx';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig.js';

const Shop = () => {
  const { category: categoryParam } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, "products");
        const response = await getDocs(productsRef);
        const productsData = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setProducts(productsData);
        setFilteredProducts(productsData);


        const uniqueCategories = [...new Set(productsData.map(product => product.category))];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
    } else {
      setCategory('');
    }
  }, [categoryParam]);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!category || product.category === category)
    );
    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!category || product.category === category)
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    navigate(`/shop/category/${category}`);
  };

  return (
    <div className='pt-8 dark:bg-gray-900'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center p-10'>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Browse </span> our products.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Filter by category</p>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            categories={categories}
            category={category}
            setCategory={setCategory}
            onCategoryClick={handleCategoryClick}
          />
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <div>Error loading products.</div>
        ) : (
          <div className='container products flex justify-center items-center flex-wrap gap-9'>
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl dark:bg-gray-800">
                  <div className="card-border-top"></div>
                  <div className="img flex">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <span className='text-gray-900 dark:text-white'>{product.name}</span>
                  <p className="job font-bold text-gray-500">{product.category}</p>
                  <div className='w-400 flex justify-center p-6'>
                    <Link
                      to={`/shop/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`}
                      className='inline-block rounded-xl px-6 pb-2 pt-2.5 p-6 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out bg-gradient-to-r to-emerald-600 from-sky-400'
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
