import { useState } from "react";
import { ListOfProducts } from "./components/ListOfProducts";
import { CreateProduct } from "./components/CreateProduct";

import "./styles/app.css"

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Platzi jacket",
      price: "25",
      shortDescription: "A nice jacket",
      img: "https://picsum.photos/400",
      url: "/" 
    },
  ])


  return (
    <div className="App">
      <CreateProduct currentItems={items} changeItems={setItems} />
      <ListOfProducts items={items} />
    </div>
  )
}

export default App
