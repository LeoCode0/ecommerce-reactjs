import { useState } from "react";
import { ListOfProducts } from "./components/ListOfProducts";
import { CreateProduct } from "./components/CreateProduct";

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
      <ListOfProducts items={items} />
      <CreateProduct currentItems={items} changeItems={setItems} />
    </div>
  )
}

export default App
