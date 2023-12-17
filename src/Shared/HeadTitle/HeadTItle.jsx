import React from 'react'
import './HeadTItle.css'
const HeadTItle = () => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
  return (
    <div>
       <div className='title'>
         <h1>Bangladesh News</h1> 
         <p>The best Journalism in Bangladesh</p>
         <div className="date">
          <p >{currentDate}</p>
         </div>
       </div>
    </div>
  )
}

export default HeadTItle
