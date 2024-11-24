import './LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='container'>
            <dir className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </dir>
            <div className='inputs'>
                <div className="input">
                    <input type="username" />
                </div>
                <div className="input">
                    <input type="email" />
                </div>
                <div className="input">
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span>Click here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}

export default LoginSignup