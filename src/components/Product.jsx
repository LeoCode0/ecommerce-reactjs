import React, { useState, useEffect } from 'react'

import "../styles/product.css";

export const Product = ({ name, price, img, url, shortDescription}) => {

  useEffect(() => {
    console.log("Acabamos de subir el producto ", name)
    return () => console.log("Este producto ya no esta disponible", name)
  }, [])

  return (
    <div className='product' >
      <img className='product--img' src={img} alt={name} />
      <div className='product--details' >
        <h2 className='product--name' >{name}</h2>
        <p className='product--price'>{price} USD</p>
        <p className='product--description'>{shortDescription}</p>
        <a className='product--link' href={url}>Ir al producto</a>
      </div>
    </div>
  )
}
