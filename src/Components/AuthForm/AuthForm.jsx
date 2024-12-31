import { useState } from "react"
import { useLogin } from "../Contexts/loginContext";
import FormInput from "./FormInputs/FormInput";
import "./authForm.css"
import React from "react";
import { motion, AnimatePresence } from "framer-motion"

import user_icon from "../Assets/user_icon.svg"
import email_icon from "../Assets/email_icon.svg"
import password_icon from "../Assets/password_icon.svg"
import passConfirm_icon from "../Assets/passConfirm_icon.svg"
import verification_icon from "../Assets/verification_icon.svg"
import api from "../Config/axios";

const AuthForm = () => {

    const [formState, setForm] = useState("Login"); // Register, Login, Verification, Forgot Password, Success
    const [selectState, setState] = useState("Have an account?");

    const { handleLoginState, setUser } = useLogin();

    const handleHover = (thingy) => {
        setState(thingy === 0 ? "Login" : "Have an account?"); 
    }

    const toggleForm = (type) => {
        setForm(type);
        handleHover(1);
    }
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
        verificationCode:"",
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
        {
            id:5,
            name:"verificationCode",
            type:"text",
            placeholder:"Verification code",
            errorMsg: "Incorrect code",
            pattern: "^[0-9]{6}$",
            label:<img src={verification_icon}/>,
            required: true,
        },
    ];

    const onChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const { verificationCode, confirmPassword, ...dataToSend} = values;
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
                setForm("Login");
            } else {
                console.log("Error: ", response.statusText);
                alert("Form submission failed!");
            }
        } catch (error) {
            console.error("Error: ", error);
            alert("Form submission failed!");
        }
    };
    
    const handleLogin = async (e) => {
        e.preventDefault();

        const { verificationCode, email, confirmPassword, ...dataToSend} = values;
        console.log("Data being sent:", dataToSend);
        try {
            const response = await fetch("http://localhost:8080/users/login", {
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

                //Storing token
                localStorage.setItem("accessToken", result.accessToken);
                setForm("Verification");
            } else {
                console.log("Error: ", response.statusText);
                alert("Form submission failed!");
            }
        } catch (error) {
            console.error("Error: ", error);
            alert("Form submission failed!");
        }
    };
    
    const submitVerification = async (e) => {
        e.preventDefault();

        const { username, password, email, confirmPassword, ...dataToSend} = values;
        console.log("Data being sent:", dataToSend);
        try {
            const response = await api.post("/users/verify", dataToSend);

            console.log("got response");
            if (response.status == 200) {
                const result = await response.data;
                handleLoginState("login");
                setUser(result)
                console.log("Successful login!");
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
        <AnimatePresence>
            <motion.div 
                className="auth"
                initial={{
                    y: 0,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
                exit={{
                    opacity: 0,
                }}
            >
                <motion.div className="title"
                initial={{
                    y: -15,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    ease: [0.25, 1, 0.5, 1]
                }}
                exit={{
                    opacity: 0,
                }}
                >
                    <h1>neur</h1>
                    <h2>empowering entrepreneurs</h2>
                </motion.div>
                <div className="authContainer">
                    {/* <AnimatePresence> */}
                        {formState == "Login" && (
                            <motion.form 
                                className="loginForm" 
                                initial={{
                                    opacity: 0,
                                    x: -25,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 1, 0.5, 1]
                                }}
                                exit={{
                                    opacity: 0,
                                    x: 25,
                                }}
                                onSubmit={handleLogin}
                            >
                                {inputs
                                    .filter((item) => item.id === 1 || item.id === 3)
                                    .map((input) => (
                                        <FormInput 
                                        key={input.id}
                                        {...input}
                                        value={values[input.name]}
                                        onChange={onChange}/>
                                ))}
                                <div className="formButtons">
                                    <button type="submit">Login</button>
                                    <button onClick={ () => toggleForm("Register") }>
                                        Create new account
                                    </button>
                                </div>
                            </motion.form>
                        )};
                    {/* </AnimatePresence> */}

                    {/* <AnimatePresence> */}
                        {formState == "Register" && (
                            <motion.form 
                                className="registerForm" 
                                initial={{
                                    opacity: 0,
                                    x: 25,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 1, 0.5, 1]
                                }}
                                exit={{
                                    opacity: 0,
                                    x: 25,
                                }}
                                onSubmit={handleRegister}
                            >
                                {inputs
                                .filter((item) => item.id !== 5)
                                .map((input) => (
                                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                                ))}
                                <div className="formButtons">
                                    <button type="submit">Sign up</button>
                                    <button 
                                        onClick={ () => toggleForm("Login")  }
                                        onMouseEnter={() => handleHover(0)} 
                                        onMouseLeave={() => handleHover(1)}>
                                            {selectState}
                                    </button>
                                </div>
                            </motion.form>
                        )}; 
                    {/* </AnimatePresence> */}
                    
                    {/* <AnimatePresence> */}
                        {formState == "Verification" && (
                            <motion.form 
                                className="loginForm"
                                initial={{
                                    opacity: 0,
                                    x: 25,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 1, 0.5, 1]
                                }}
                                exit={{
                                    opacity: 0,
                                    x: 25,
                                }}
                                onSubmit={submitVerification}
                            >
                                {inputs
                                    .filter((item) => item.id === 5)
                                    .map((input) => (
                                        <FormInput 
                                        key={input.id}
                                        {...input}
                                        value={values[input.name]}
                                        onChange={onChange}/>
                                ))}
                                <div className="formButtons">
                                    <button type="submit">Submit</button>
                                    <button>
                                        Resend code
                                    </button>
                                </div>
                            </motion.form>
                        )};

                    {/* </AnimatePresence> */}
                </div>
                <motion.button className="devLogin"
                whileHover={{
                    backgroundColor: "hsl(0, 0%, 70%)",
                }}
                whileTap={{
                    scale: 0.95,
                }}
                onClick={() => handleLoginState("login")}
                >
                    mock-login
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
}

export default AuthForm;