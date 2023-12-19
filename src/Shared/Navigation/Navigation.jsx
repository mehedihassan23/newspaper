import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import "./Navigation.css"


const Navigation = () => {
     
  return (
    <div className='navigation'>
      <nav className='nav'>
         <NavLink style={{color: "#706F6F", fontSize: "1rem", paddingRight: "0.5rem", textDecoration: "none"}} to="/">Home </NavLink>
         <NavLink style={{color: "#706F6F", fontSize: "1rem", paddingRight: "0.5rem", textDecoration: "none"}}>About </NavLink>
         <NavLink style={{color: "#706F6F", fontSize: "1rem", paddingRight: "0.5rem", textDecoration: "none"}}>Career </NavLink>
      </nav>
      <div className="loginBtn">
           <button className='profile'><CgProfile /></button>
           <button className='login'><a style={{textDecoration: "none", color: "white"}} href="/login">Login</a></button>
      </div>
    </div>
  )
}

export default Navigation
