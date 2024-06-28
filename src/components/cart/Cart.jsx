import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className='px-5 py-24 dark:bg-gray-900'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-semibold mb-4 dark:text-white'>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className='text-gray-500 dark:text-gray-300'>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((product) => (
              <div key={product.id} className='flex items-center justify-between border-b border-gray-300 py-4'>
                <img className='w-20 h-20 object-cover object-center rounded' src={product.image} alt={product.name} />
                <div className='flex flex-col ml-4'>
                  <h3 className='text-gray-900 dark:text-white text-lg'>{product.name}</h3>
                  <p className='text-gray-600 dark:text-gray-400'>Price: ${product.price}</p>
                  <div className="flex items-center">
                    <button
                      className='text-red-500 dark:text-red-400 mt-2 hover:underline'
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className='text-blue-500 dark:text-blue-400 mt-2 hover:underline'
                      onClick={() => addToCart(product)} 
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className='mt-8'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
