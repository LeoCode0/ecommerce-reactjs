import { useState } from "react";
import { ListOfProducts } from "./components/ListOfProducts";
import { CreateProduct } from "./components/CreateProduct";
import { OnlyImages } from "./components/OnlyImages";
import { OtherProducts } from "./components/OtherProducts";

import { ComponentWithAPI } from "./hocs/ComponentWithAPI";
const GeneralProducts = ComponentWithAPI(ListOfProducts)
const Clothes = ComponentWithAPI(ListOfProducts)
const Images = ComponentWithAPI(OnlyImages)
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

  // const myArrCute = [1,2,3,4,5]
  // console.log(myArrCute.map(num => num *2))
  // console.log(myArrCute.map(num => num *3))


  // Array.prototype.mapFake = function (callback){
  //   let newArray = []
  //   console.log(this)
  //   for (let index = 0; index < this.length; index++) {
  //     const element = this[index];
  //     newArray.push(callback(element))
  //   }

  //   return newArray
  // }

  // console.log(myArrCute.mapFake((num) => num * 4))
  // const arr2 = [3,67,1]
  // console.log(arr2.mapFake(num => num - 2))

  // function calculator(operation){
  //   switch (operation) {
  //     case "SUM":
  //       return function (a){
  //         return function(b){
  //           return a + b
  //         }
  //       }
  //     case "SUB":
  //       return function (a){
  //         return function(b){
  //           return a - b
  //         }
  //       }
  //   }
  // }

  // const sum = calculator("SUM")
  // const sumPlusTen = sum(10)

  // const finalResult = sumPlusTen(20)
  // console.log(finalResult)

  const base_api = "https://api.escuelajs.co/api/v1/products?limit=10&offset=0"
  const clothes_api = "https://api.escuelajs.co/api/v1/categories/1/products/?limit=10&offset=0"
  const electronics_api = "https://api.escuelajs.co/api/v1/categories/2/products/?limit=10&offset=0"

  return (
    <div className="App">
      <CreateProduct currentItems={items} changeItems={setItems} />
      {/* <ListOfProducts items={items} /> */}
      {/* <ListOfProducts items={items} /> */}
      {/* <ListOfProducts items={items} /> */}
      <GeneralProducts API={base_api} />
      <Clothes API={clothes_api} />
      <Images API={electronics_api} />
      <OtherProducts />
    </div>
  )
}

export default App
