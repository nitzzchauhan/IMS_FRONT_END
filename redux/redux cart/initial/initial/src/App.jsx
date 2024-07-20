import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
// import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const addToCart = (product)=>{
    setCart([...cart,product])
  }
 

  return (
    <>
      <h1>Without Redux</h1>
      <ProductList addToCart={addToCart}/>
      <Cart cart={cart} />

    </>
  )
}

export default App
