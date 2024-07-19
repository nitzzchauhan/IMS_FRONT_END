import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <NavLink to="123456" style={{marginRight:"10px"}}>Product Id 123456</NavLink>
      <NavLink to="465465132" style={{marginRight:"10px"}}>Product Id 465465132</NavLink>
      <NavLink to="125545645" style={{marginRight:"10px"}}>Product Id 125545645</NavLink>

      <Outlet/>




    </div>
  )
}
