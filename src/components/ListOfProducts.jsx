import { Product } from "./Product";
import { useApi } from "../hooks/useApi";

import "../styles/listOfProducts.css"

export const ListOfProducts = ({ API }) => {
  const { data, loading} = useApi(API)
  if(loading){
    return <p>Loading...</p>
  }
  
  return(
    <ul className="listOfProducts" >
      {data.map(item => <Product {...item} key={item.id} />)}
    </ul>
  )
}
