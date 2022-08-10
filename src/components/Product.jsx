import React, { useState, useEffect } from 'react'


export const Product = ({ name, price, img, url, shortDescription}) => {

  useEffect(() => {
    console.log("Acabamos de subir el producto ", name)
    return () => console.log("Este producto ya no esta disponible", name)
  }, [])

  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{price}</p>
        <p>{shortDescription}</p>
        <a href={url}>Ir al producto</a>
      </div>
      <img src={img} alt={name} />
    </div>
  )
}
