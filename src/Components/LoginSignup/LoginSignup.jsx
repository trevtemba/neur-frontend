import './LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='container'>
            <dir className='header'>
                <div className='text'>neur</div>
                <div className='underline'></div>
            </dir>
            <div className='inputs'>
                <div className="input">
                    <input type="username" placeholder='Username'/>
                </div>
                <div className="input">
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
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