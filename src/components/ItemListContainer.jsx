import React, { useEffect, useState } from 'react'
import { getData } from './helpers/getData'
import Shop from './Shop';


const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
        getData()
            .then((resp) => {
                setProducts(resp)
            })
  }, [])

    return (
    <div>
      <Shop products={products} />
    </div>
  )
}

export default ItemListContainer