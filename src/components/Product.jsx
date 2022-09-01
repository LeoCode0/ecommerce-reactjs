import React from 'react'
import { useProducts } from "../context/ProductsContext";

import "../styles/product.css";

export const Product = ({ title, price, images, url = "/", description, id}) => {
  const { favProducts, setFavProducts, cartProducts, setCartProducts } = useProducts()

  const addToWishList = () => {
    setFavProducts([
      ...favProducts,
      {
        title,
        price,
        images,
        description,
        id
      }
    ])
  }

  const addToCart = () => {
    setCartProducts([
      ...cartProducts,
      {
        title,
        price,
        images,
        description,
        id
      }
    ])
  }

  return (
    <li className='product' >
      <img className='product--img' src={images[0]} alt={title} />
      <div className='product--details' >
        <h2 className='product--name' >{title}</h2>
        <p className='product--price'>{price} USD</p>
        <p className='product--description'>{description}</p>
        <a className='product--link' href={url}>Ir al producto</a>
        <div>
          <button onClick={addToWishList} >Add to WishList</button>
          <button onClick={addToCart} >Add to car</button>
        </div>
      </div>  
    </li>
  )
}
