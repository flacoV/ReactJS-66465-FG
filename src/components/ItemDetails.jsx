import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './shared/Loader';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig.js';
import { FaStar, FaStarHalfAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { CartContext } from './cart/CartContext';



const ItemDetails = () => {
  const { name } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, "products");
        const response = await getDocs(productsRef);
        const productsData = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        const formattedName = name.replace(/-/g, ' ');
        const foundProduct = productsData.find(product => product.name.toLowerCase() === formattedName.toLowerCase());

        if (foundProduct) {
          setProduct(foundProduct);
          setError(false);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (err) {
        console.log('Error fetching product:', err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [name]);

  return (
    <div className='px-5 py-24 dark:bg-gray-900'>
      <div className='container mx-auto shadow-lg'>
        {loading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : product ? (
          <div className='lg:w-4/5 mx-auto flex flex-wrap' key={product.id}>
              <img className='lg:w-1/2 w-full object-cover object-center rounded-x ' src={product.image} alt={product.name} />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>TECH STORE</h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1 dark:text-white'>{product.name}</h1>
              <div className='flex mb-4 items-center'>
                <span className='flex items-center'>
                  <FaStar className='w-4 h-4 text-red-400' />
                  <FaStar className='w-4 h-4 text-red-400' />
                  <FaStar className='w-4 h-4 text-red-400' />
                  <FaStar className='w-4 h-4 text-red-400' />
                  <FaStarHalfAlt className='w-4 h-4 text-red-400' />
                  <span className='text-gray-500 dark:text-gray-300 ml-3'>+277 Reviews</span>
                </span>
                <FaFacebookF className='ml-2 text-gray-400' />
                <FaTwitter className='ml-2 text-gray-400' />
                <BiSolidMessageRounded className='ml-2 text-gray-400' />
              </div>
              <p className='text-gray-600 leading-relaxed'><span className='text-black dark:text-white/50'>Description:</span> {product.description}</p>
              <p className='text-gray-600 py-5'><span className='text-black dark:text-white/50'>Category:</span> {product.category}</p>
              <p className='text-gray-600'><span className='text-black dark:text-white/50'>Stock:</span> {product.stock}</p>
              <hr className='my-4 border-gray-300' />
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900'>${product.price}</span>
                <button className='flex ml-auto text-white bg-gradient-to-r to-emerald-600 from-sky-400 border-0 py-2 px-6 focus:outline-none rounded-xl'
                onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ItemDetails;
