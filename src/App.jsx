import { ListOfProducts } from "./components/ListOfProducts";
import { WishList } from "./components/WishList";
import { Cart } from "./components/Cart";

import { ProductsContextProvider } from "./context/ProductsContext";

import "./styles/app.css"

function App() {

  const baseApi = "https://api.escuelajs.co/api/v1"
  const generalProducts = `${baseApi}/products?limit=10&offset=0`
  const clothesApi = `${baseApi}/categories/1/products/?limit=10&offset=0`
  const electronicsApi = `${baseApi}/categories/2/products/?limit=10&offset=0`

  return (
    <div className="App">
      <h1>My Ecommerce 💚</h1>
      <ProductsContextProvider>
        <div className="ProductsLists" >
          <ListOfProducts API={generalProducts}  />
          <ListOfProducts API={clothesApi} />
          <ListOfProducts API={electronicsApi} />
        </div>
        <div>
          <WishList />
          <Cart />
        </div>
      </ProductsContextProvider>
    </div>
  )
}

export default App
