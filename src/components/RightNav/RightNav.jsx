import React from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import './RightNav.css'
import { CgTwitter } from 'react-icons/cg';


const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <button className='RightNavBtn rbgoogle'> <FaGoogle /> Google</button>
      <button className='RightNavBtn'> <FaGithub /> Github</button>
      <h3>Follow Us On</h3>
      <button className='RightNavBtn'> <FaFacebook /> Facebook </button>
      <button className='RightNavBtn'> <CgTwitter /> Twitter</button>
      <button className='RightNavBtn'> <FaInstagram /> Instagram</button>
    </div>
  )
}

export default RightNav
