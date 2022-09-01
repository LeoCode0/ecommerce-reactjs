import { createContext, useState, useEffect, useContext } from "react";

const ProductsContext = createContext({})

export const ProductsContextProvider = ({ children }) => {
  const [favProducts, setFavProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ProductsContext.Provider value={{ favProducts, setFavProducts, cartProducts, setCartProducts}} >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductsContext)
  if(context === undefined){
    return false
  }

  return context
}
