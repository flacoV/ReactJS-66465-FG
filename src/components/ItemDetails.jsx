import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from './helpers/getData';
import Loader from './shared/Loader';

const ItemDetails = () => {
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    getData()
      .then((data) => {
        const foundProduct = data.find(product => product.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
          setError(null); // Clear error state if product found
        } else {
          setError('Product not found');
        }
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching product:', error);
        setError('Error loading product details.');
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='pt-8 dark:bg-gray-900'>
      <div className='container flex justify-center '>
        <div>
          {loading ? (
            <Loader />
          ) : error ? (
            console.log('error')
          ) : product ? (
            <div className='min-h-[450px] 
            sm:min-h-[550px] min-w-[550px] sm:min-w-[650px] ' key={product.id}>
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
