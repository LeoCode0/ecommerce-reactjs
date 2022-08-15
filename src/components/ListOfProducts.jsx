import { Product } from "./Product";

import "../styles/listOfProducts.css"

export const ListOfProducts = ({ data }) => {
  return(
    <ul className="listOfProducts" >
      {data.map(item => <Product {...item} key={item.id} />)}
    </ul>
  )
}
