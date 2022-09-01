import React from 'react'

import { useProducts } from "../context/ProductsContext";
import { Product } from "../components/Product";

export const WishList = () => {
  const { favProducts } = useProducts()

  if(favProducts.length === 0){
    return <p>Aún no agregas productos a tu wishlist</p>
  }

  return(
    <div  >
      <h2>WishList</h2>
      <ul className='wishlist' >
        {
          favProducts.map((product) => (
            <Product {...product} />
          ))
        }
      </ul>
    </div>
  )
}
