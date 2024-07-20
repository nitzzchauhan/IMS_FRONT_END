import React from "react";

export default function Cart({ cart }) {
    return (
        <div>
            
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      );
}


