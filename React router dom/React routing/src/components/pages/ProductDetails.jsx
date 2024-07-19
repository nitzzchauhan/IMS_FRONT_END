import {  useParams } from "react-router-dom"


export default function ProductDetails() {
    const params= useParams()
    console.log(params)

  return (
    <div>
     <h1> Product Details </h1> 
      product id {params.id}     


    </div>
  )
}
