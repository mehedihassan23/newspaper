import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = () => {
  return (
    <div>
       <h2>All Category</h2>
       <Link style={{color: "gray", display: "block", textDecoration: "none", marginTop: "1rem"}} to="/nationalnews">National News</Link>
       <Link style={{color: "gray", display: "block", textDecoration: "none", marginTop: "1rem"}} to="/internationalnews">International News</Link>
       <Link style={{color: "gray", display: "block", textDecoration: "none", marginTop: "1rem"}} to="/sports">Sports</Link>
       <Link style={{color: "gray", display: "block", textDecoration: "none", marginTop: "1rem"}} to="/entertainment">Entertainment</Link>
       <Link style={{color: "gray", display: "block", textDecoration: "none", marginTop: "1rem"}} to="/allnews">All News</Link>
    </div>
  )
}

export default LeftNav
