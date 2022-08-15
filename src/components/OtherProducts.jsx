import React from 'react'

import { useApi } from "../hooks/useApi";
import { ListOfProducts } from "./ListOfProducts";

export const OtherProducts = () => {
  const API = "https://api.escuelajs.co/api/v1/categories/5/products/?limit=10&offset=0"
  const { data, loading, error} = useApi(API)

  if(loading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>{error.message}</p>
  }

  return (
    <ListOfProducts data={data} />
  )
}
