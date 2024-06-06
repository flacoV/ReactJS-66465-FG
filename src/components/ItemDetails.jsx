import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Asegúrate de importar useParams si estás utilizando el ID de la URL
import { getData } from './helpers/getData'; // Importa correctamente el método getData
import Loader from './shared/Loader';

const ItemDetails = () => {
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const [product, setProduct] = useState(null); // Cambia a null ya que solo esperamos un producto
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then((data) => {
        const foundProduct = data.find(product => product.id === id); // Encuentra el producto por su ID
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setError(error);
      });
  }, [id]);

  return (
    <div className='pt-8 dark:bg-gray-900'>
      <div className='container'>
        <div>
          {loading ? (<Loader />) : error ? (<div>Error loading product details</div>) : product ? (
            <div key={product.id}>
              <h1>{product.name}</h1>
              {/* ... other product details ... */}
            </div>
          ) : (
            <p>Product not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;