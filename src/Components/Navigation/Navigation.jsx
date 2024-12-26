import { div, filter } from "motion/react-client";
import { motion, MotionConfig } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./navigation.css"
import React from "react";

import home_icon from "../Assets/home_icon.svg"
import explore_icon from "../Assets/explore_icon.svg"
import appointments_icon from "../Assets/appointments_icon.svg"
import earnings_icon from "../Assets/earnings_icon.svg"
import profile_icon from "../Assets/profile_icon.svg"

const navButtonAnimation = {
    initial: { 
        backgroundColor: "hsl(0, 0%, 5%)",
        borderRadius: "25px",
    },
    whileHover: {
        scale: 1.1,
        backgroundColor: "hsl(0, 0%, 10%)",
        borderRadius: "15px"
    },
    whileTap: {
        scale: 0.95,
    },
    transition: {
        duration: 0.125,
        ease: "easeInOut"
    },
};
const buttonAnimation = {
    initial: { 
        backgroundColor: "hsl(0, 0%, 95%)",
        borderRadius: "30px",
    },
    whileHover: {
        backgroundColor: "hsl(0, 0%, 80%)",
    },
    whileTap: {
        scale: 0.95,
    },
    transition: {
        duration: 0.125,
        ease: "easeInOut"
    },
};

const Navigation = () => {
    const navigate = useNavigate();
    
    const [pageState, setPage] = useState("home");
    const [activeButton, setActiveButton] = useState("");

    const goPage = (buttonId) => {
        if (buttonId === "home") {
            navigate("/home")
        }
        else if (buttonId === "profile") {
            navigate("/profile")
        }
        else if (buttonId === "explore") {
            navigate("/explore")
        }
        else if (buttonId === "login") {
            navigate("/login")
        }
        setActiveButton(buttonId)

    }

    return (
        <div
        className="topBar">
            
            <motion.div 
            className="logoContainer">
                neur
            </motion.div>
            <div
            className="navContainer">
                <motion.button
                className="navButton"
                style={{
                    filter: activeButton === "home" ? "invert(1)" : "invert(0)",
                }}
                onClick={ () => goPage("home") }
                {...navButtonAnimation}>
                    <img src={home_icon}/>
                </motion.button>
                <motion.button
                className="navButton"
                onClick={ () => setPage("appnt") }
                {...navButtonAnimation}>
                    <img src={appointments_icon}/>
                </motion.button>                    
                <motion.button
                className="navButton"
                style={{
                    filter: activeButton === "explore" ? "invert(1)" : "invert(0)",
                }}
                onClick={ () => goPage("explore") }
                {...navButtonAnimation}>
                    <img src={explore_icon}/>
                </motion.button>                    
                <motion.button
                className="navButton"
                onClick={ () => setPage("earnings") }
                {...navButtonAnimation}>
                    <img src={earnings_icon}/>
                </motion.button>
                <motion.button
                className="navButton"
                style={{
                    filter: activeButton === "profile" ? "invert(1)" : "invert(0)",
                }}
                onClick={ () => goPage("profile") }
                {...navButtonAnimation}>
                    <img src={profile_icon}/>
                </motion.button>
            </div>
            <div
            className="rightContainer">
                <motion.button
                className="loginButton"
                onClick={ () => goPage("login") }
                {...buttonAnimation}>
                    Login
                </motion.button>   
            </div>
        </div>

    );
}

export default Navigation;