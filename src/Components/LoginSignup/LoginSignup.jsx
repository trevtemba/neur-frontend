import './LoginSignup.css'

import user_icon from "../Assets/user_icon.svg"
import password_icon from "../Assets/password_icon.svg"
import email_icon from "../Assets/email_icon.svg"
import { useState } from 'react'

const LoginSignup = () => {

    const [action,setAction] = useState("Sign up");

    return (
        <div className='container'>
            <dir className='header'>
                <div className='title'>neur</div>
                <div className='slogan'>empowering entrepreneurs</div>
            </dir>
            <div className='inputs'>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="username" placeholder='Username'/>
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action==="Login"?<div className="forgot-password">Forgot Password?</div>:<div></div>}
            <div className="submit-container">
                <div className={action==="Login"?"loginLgn":"loginSu"} onClick={()=>{setAction("Submitted")}}>Create Account</div>
                <div className={action==="Sign up"?"signupSu":"signupLgn"} onClick={()=>{setAction("Login")}}>Have an account? Login</div>
            </div>
        </div>
    )
}

export default LoginSignup