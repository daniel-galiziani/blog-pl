import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" className='loginInput' placeholder='Enter your email...' />
                <label>Password</label>
                <input type="password" className='loginInput' placeholder='Enter your password...' />
                <button className="loginButton">Login</button>
                <button className="registerButton">Register</button>
            </form>
            
        </div>
    )
}

export default Login
