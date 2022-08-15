import { Product } from "./Product";

import "../styles/listOfProducts.css"

export const ListOfProducts = ({ items }) => {
  return(
    <ul className="listOfProducts" >
      {items.map(item => <Product {...item} key={item.id} />)}
    </ul>
  )
}
