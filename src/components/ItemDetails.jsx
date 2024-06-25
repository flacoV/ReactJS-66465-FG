import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './shared/Loader';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig.js';

const ItemDetails = () => {
  const { name } = useParams(); // Obtén el nombre del producto desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          setError(null);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Error loading product details.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [name]);

  return (
    <div className='pt-8 dark:bg-gray-900'>
      <div className='container flex justify-center'>
        <div>
          {loading ? (
            <Loader />
          ) : error ? (
            <div>{error}</div>
          ) : product ? (
            <div className='min-h-[450px] sm:min-h-[550px] min-w-[550px] sm:min-w-[650px]' key={product.id}>
              <div className='bg-secondary'>
                <h1>{product.name}</h1>
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
              </div>
              <div>
                <img src={product.image} alt={product.name} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
