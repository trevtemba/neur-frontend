import { useState } from "react"
import FormInput from "./FormInputs/FormInput";
import "./authForm.css"
import React from "react";

import user_icon from "../Assets/user_icon.svg"
import email_icon from "../Assets/email_icon.svg"
import password_icon from "../Assets/password_icon.svg"

const AuthForm = () => {

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
            label:<img src={password_icon}/>
        },
    ];

    const onChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value })
    }

    console.log(values);
    
    return (
        <div className="auth">
            <form>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}

                <label>
                    <input name="agree" type="checkbox" required/>
                    I agree to the Terms and Conditions
                </label>
                <br></br>
                <button>Submit</button>
            </form>
        </div>

    );
}

export default AuthForm;