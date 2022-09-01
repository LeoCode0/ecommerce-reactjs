import React from 'react'

import { useProducts } from "../context/ProductsContext";
import { Product } from "../components/Product";

export const Cart = () => {
  const { cartProducts } = useProducts()
  if(cartProducts.length === 0){
    return <p>Aún no agregas productos a tu Carrito</p>
  }

  return(
    <div>
      <h2>WishList</h2>
      <ul className='wishlist' >
        {
          cartProducts.map(item => <Product {...item} />)
        }
      </ul>
    </div>
  )
}
