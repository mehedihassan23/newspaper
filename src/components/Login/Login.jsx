import React from 'react'
import "./Login.css"
import Navigation from '../../Shared/Navigation/Navigation'
const Login = () => {
  return (
    <div style={{background: "aliceblue"}}>
       <Navigation />
       <div className="loginForm">
          <form>
            <h3 className="loginTitle">Login  your acount</h3>
            <div className="formDiv">
                <label>Email address</label>
                <input type="email" />
            </div>
            <div className="formDiv">
                <label>Password</label>
                <input type="text" />
            </div>
            <input type="submit" />
            <p>Don't have an account? <a className='registerLink' href="/register">Register</a></p>
          </form>
       
       </div>
    </div>
  )
}

export default Login
