import { useState } from "react"
import FormInput from "./FormInputs/FormInput";
import "./authForm.css"
import React from "react";

import user_icon from "../Assets/user_icon.svg"
import email_icon from "../Assets/email_icon.svg"
import password_icon from "../Assets/password_icon.svg"
import passConfirm_icon from "../Assets/passConfirm_icon.svg"

const AuthForm = () => {

    const [selectState, setState] = useState("Have an account?")

    const handleHover = (thingy) => {
        setState(thingy === 0 ? "Login" : "Have an account?"); 
    }
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label: <img src={user_icon}/>
        },
        {
            id:2,
            name:"email",
            type:"text",
            placeholder:"Email",
            label:<img src={email_icon}/>
        },
        {
            id:3,
            name:"password",
            type:"password",
            placeholder:"Password",
            label:<img src={password_icon}/>
        },
        {
            id:4,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            label:<img src={passConfirm_icon}/>
        },
    ];

    const onChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value })
    }

    console.log(values);
    
    return (
        <div className="auth">
            <form>
                <div className="title">
                    <h1>neur</h1>
                    <h2>empowering entrepreneurs</h2>
                </div>

                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <div className="formButtons">
                    <button>Sign up</button>
                    <button 
                        onMouseEnter={() => handleHover(0)} 
                        onMouseLeave={() => handleHover(1)}>
                            {selectState}
                    </button>
                </div>
            </form>
        </div>

    );
}

export default AuthForm;