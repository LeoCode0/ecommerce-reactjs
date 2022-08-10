import { Product } from "./Product";

export const ListOfProducts = ({ items }) => {
  return(
    items.map(item => <Product {...item} key={item.id} />)
  )
}
