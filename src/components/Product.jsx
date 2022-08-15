import React, { useState, useEffect } from 'react'

import "../styles/product.css";

export const Product = ({ title, price, images, url, description}) => {
  console.log(images[0])
  useEffect(() => {
    console.log("Acabamos de subir el producto ", title)
    return () => console.log("Este producto ya no esta disponible", title)
  }, [])

  return (
    <div className='product' >
      <img className='product--img' src={images[0]} alt={title} />
      <div className='product--details' >
        <h2 className='product--name' >{title}</h2>
        <p className='product--price'>{price} USD</p>
        <p className='product--description'>{description}</p>
        <a className='product--link' href={url}>Ir al producto</a>
      </div>
    </div>
  )
}
