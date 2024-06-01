import React, { useEffect, useState } from 'react'
import { getData } from './helpers/getData'


const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
        getData()
            .then((resp) => {
                setProducts(resp)
            })
  }, [])

    return (
    <div>ItemListContainer</div>
  )
}

export default ItemListContainer