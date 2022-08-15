import React from 'react'

import "../styles/createProduct.css";

export const CreateProduct = ({ currentItems, changeItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formInfo = {
      name: e.target.name.value,
      id: e.target.id.value,
      price: e.target.price.value,
      img: e.target.img.value,
      shortDescription: e.target.description.value,
      url: "/"
    }
    changeItems([...currentItems, formInfo])
  }

  const deleteItems = () => {
    changeItems([])
  }

  return (
    <form onSubmit={handleSubmit} className="product-form" >
      <input type="text" name="id" placeholder='write an id' />
      <input type="text" placeholder='Name' name='name' />
      <input type="number" placeholder='Value' name='price' />
      <textarea name="description" id="" cols="30" rows="10" placeholder='Description'></textarea>
      <input type="text" placeholder='img url' name='img' />
      <button type="submit" >Upload</button>
      <button onClick={deleteItems}>Delete</button>
    </form>
  )
}
