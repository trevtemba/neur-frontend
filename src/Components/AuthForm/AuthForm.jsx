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
            errorMsg: "Usernames can be 3 to 20 characters long",
            pattern: "^[A-za-z0-9]{3,16}$",
            label: <img src={user_icon}/>,
            required: true,
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMsg: "Must be a valid email address",
            label:<img src={email_icon}/>,
            required: true,
        },
        {
            id:3,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMsg: "Password must include at least 1: letter, number, and special character",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            label:<img src={password_icon}/>,
            required: true,
        },
        {
            id:4,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMsg: "Passwords don't match",
            pattern: values.password,
            label:<img src={passConfirm_icon}/>,
            required: true,
        },
    ];

    const onChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { confirmPassword, ...dataToSend} = values;
        console.log("Data being sent:", dataToSend);
        try {
            const response = await fetch("http://localhost:8080/users/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            console.log("got response");
            if (response.ok) {
                const result = await response.json();
                console.log("Success", result);
                alert("Form submitted successfully!")
            } else {
                console.log("Error: ", response.statusText);
                alert("Form submission failed!");
            }
        } catch (error) {
            console.error("Error: ", error);
            alert("Form submission failed!");
        }
    };
    
    return (
        <div className="auth">
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <h1>neur</h1>
                    <h2>empowering entrepreneurs</h2>
                </div>

                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <div className="formButtons">
                    <button type="submit">Sign up</button>
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