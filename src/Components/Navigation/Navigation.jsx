import { div } from "motion/react-client";
import { motion, MotionConfig } from "motion/react";
import { useState } from "react";

import "./navigation.css"
import React from "react";

import home_icon from "../Assets/home_icon.svg"
import explore_icon from "../Assets/explore_icon.svg"
import appointments_icon from "../Assets/appointments_icon.svg"
import earnings_icon from "../Assets/earnings_icon.svg"
import profile_icon from "../Assets/profile_icon.svg"

const navButtonAnimation = {
    initial: { 
        backgroundColor: "#0a0a0a",
        borderRadius: "25px",
    },
    whileHover: {
        scale: 1.1,
        backgroundColor: "#0f0f0f",
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
        backgroundColor: "#ffffff",
        borderRadius: "30px",
    },
    whileHover: {
        backgroundColor: "#e1e1e1",
        borderRadius: "15px",
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

    const [pageState, setPage] = useState("Home");
    

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
                onClick={ () => setPage("home") }
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
                onClick={ () => setPage("explore") }
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
                onClick={ () => setPage("profile") }
                {...navButtonAnimation}>
                    <img src={profile_icon}/>
                </motion.button>
            </div>
            <div
            className="rightContainer">
                <motion.button
                className="logoutButton"
                onClick={ () => setPage("profile") }
                {...buttonAnimation}>
                    Logout
                </motion.button>   
            </div>
        </div>

    );
}

export default Navigation;