import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from './helpers/getData';
import Loader from './shared/Loader';

const ItemDetails = () => {
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='pt-8 dark:bg-gray-900'>
      <div className='container'>
        <div>
          {loading ? (<Loader />) : error ? (
            <div>Error loading product details</div>
          ) : product ? (
            <div key={product.id}>
              <h1>{product.name}</h1>
              
            </div>
          ) : (null)}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
