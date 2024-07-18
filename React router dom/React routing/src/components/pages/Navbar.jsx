
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
        </ul>
    </div>
  )
}
