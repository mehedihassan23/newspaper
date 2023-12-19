import React from 'react'
import "./Register.css"
import Navigation from '../../Shared/Navigation/Navigation'

const Register = () => {
  return (
    <div>
    
 
 
    <div style={{background: "aliceblue"}}>
       <Navigation />
       <div className="loginForm">
          <form>
            <h3 className="loginTitle">Register new acount</h3>
            <div className="formDiv">
                <label>Email address</label>
                <input type="email" />
            </div>
            <div className="formDiv">
                <label>Password</label>
                <input type="text" />
            </div>
            <input type="Submit" value="Register Now" />
            <p> Already have an account? <a className='registerLink' href="/login">Login</a></p>
          </form>
       
       </div>
    </div>
 


    </div>
  )
}

export default Register
