import React from 'react'
import { FaBook, FaChild, FaEye, FaRegStar } from "react-icons/fa6";
import './MainContent.css'
import rectangle from "../../assets/Rectangle 3980 (12).png"


const MainContent = () => {
  return (
    <div className='mainContent' style={{marginTop: "1rem"}}>
        <div className="header">
         <div style={{display:"flex"}}>
            <img style={{width: "30px", borderRadius: "50%"}} src={rectangle} alt="" />
            <p style={{marginLeft: "0.5rem", textAlign: "center"}} className="name">Johnsena</p>
         </div>
         <div style={{marginLeft: "25rem"}}>
             <span> <FaBook /> </span>
             <span  style={{marginLeft: "1rem"}} > <FaChild /> </span>
         </div>
        </div>

        <div>
        <h4 style={{width:"20rem", marginTop: "1rem"}} className='newsTitle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, optio!</h4>
        <img src={rectangle} alt="" />
        <p style={{marginRight: "1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a vel odit, velit ab tempora dolores sapiente dicta expedita molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia labore quae ut quibusdam vero voluptate porro maxime temporibus autem sequi.</p>
        <button className='readButton'>read more</button>
        </div>

        <div className="mainFooter">
            <div>
                <span style={{color: "#FF8C47", marginRight: "0.5rem"}}>  <FaRegStar /> <FaRegStar /> <FaRegStar /> </span>
                <span>  4.5 </span>
            </div>
            <div style={{marginLeft: "20rem"}}>
             <span  style={{marginRight:"0.5rem"}} > <FaEye /> </span>
             <span>450</span>
            </div>
        </div>

    </div>
  )
}

export default MainContent
