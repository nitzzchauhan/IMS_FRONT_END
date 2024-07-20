import React from "react";

export default function ProductList({addToCart}) {
    const products = [{
        id: 1,
        name: "Motorola FUSION PLUS",
        description: "Motorola FUSION PLUS",
        price: 20000,
    },{
        id: 2,
        name: "MOUSE PAD",
        description: "MOUSE PAD",
        price: 200,
    },{
        id: 3,
        name: "BUTTER",
        description: "BUTTER",
        price: 200,
    },{
        id: 4,
        name: "MILK",
        description: "MILK",
        price: 100,
    }]
  return (
    <div>      
      <h1>Product List</h1>
      <ul>
        {
            
                products.map((product) => (
                  <li key={product.id}>
                    {product.name}
                     ===
                    ${product.price}
                    <button onClick={()=>addToCart(product)}>Add to cart</button>
                  </li>
        
                ))
              
        }
      
      </ul>
    </div>
  );
}
