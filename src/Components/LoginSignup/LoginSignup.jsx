import './LoginSignup.css'

import user_icon from "../Assets/user_icon.svg"
import password_icon from "../Assets/password_icon.svg"
import email_icon from "../Assets/email_icon.svg"

const LoginSignup = () => {
    return (
        <div className='container'>
            <dir className='header'>
                <div className='text'>neur</div>
                <div className='underline'></div>
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
            <div className="forgot-password">Forgot Password?</div>
            <div className="submit-container">
                <div className="submitl">Login</div>
                <div className="submits">Sign Up</div>
            </div>
        </div>
    )
}

export default LoginSignup