import { div, filter } from "motion/react-client";
import { motion, MotionConfig } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../Contexts/navigationContext";
import { useLogin } from "../Contexts/loginContext";

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
        borderRadius: "15px",
    },
    whileTap: {
        scale: 0.95,
    },
    transition: {
        duration: 0.125,
        ease: "easeInOut",
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
        ease: "easeInOut",
    },
};

const Navigation = () => {
    const { activeButton, goPage } = useNavigation();
    const { loginState } = useLogin();

    const navigate = useNavigate();

    return (
        <div className="topBar">
            <motion.div className="logoContainer">
                neur
            </motion.div>
            <div className="navContainer">
                <motion.button
                    className="navButton"
                    style={{
                        filter: activeButton === "home" ? "invert(1)" : "invert(0)",
                    }}
                    onClick={() => goPage("home", navigate)}
                    {...navButtonAnimation}
                >
                    <img src={home_icon} alt="Home" />
                </motion.button>
                <motion.button
                    className="navButton"
                    style={{
                        filter: activeButton === "appnt" ? "invert(1)" : "invert(0)",
                    }}
                    onClick={() => goPage("appnt", navigate)}
                    {...navButtonAnimation}
                >
                    <img src={appointments_icon} alt="Appointments" />
                </motion.button>
                <motion.button
                    className="navButton"
                    style={{
                        filter: activeButton === "explore" ? "invert(1)" : "invert(0)",
                    }}
                    onClick={() => goPage("explore", navigate)}
                    {...navButtonAnimation}
                >
                    <img src={explore_icon} alt="Explore" />
                </motion.button>
                <motion.button
                    className="navButton"
                    style={{
                        filter: activeButton === "earnings" ? "invert(1)" : "invert(0)",
                    }}
                    onClick={() => goPage("earnings", navigate)}
                    {...navButtonAnimation}
                >
                    <img src={earnings_icon} alt="Earnings" />
                </motion.button>
                <motion.button
                    className="navButton"
                    style={{
                        filter: activeButton === "profile" ? "invert(1)" : "invert(0)",
                    }}
                    onClick={() => goPage("profile", navigate)}
                    {...navButtonAnimation}
                >
                    <img src={profile_icon} alt="Profile" />
                </motion.button>
            </div>
            <div className="rightContainer">
                <motion.button
                    className="loginButton"
                    onClick={() => goPage(loginState == true ? "logout" : "login", navigate)}
                    style={{
                        backgroundColor: loginState == true ? "hsl(0, 0%, 5%)" : "hsl(0, 0%, 95%)",
                        color: loginState == true ? "hsl(0, 0%, 95%)" : "hsl(0, 0%, 5%)",
                    }}
                    initial= {{
                        backgroundColor: loginState == true ? "hsl(0, 0%, 5%)" : "hsl(0, 0%, 95%)",
                        borderRadius: "30px",
                    }}
                    animate= {{
                        backgroundColor: loginState == true ? "hsl(0, 0%, 5%)" : "hsl(0, 0%, 95%)",
                    }}
                    whileHover = {{
                        backgroundColor: loginState == true ? "hsl(0, 0%, 2.5%)" : "hsl(0, 0%, 80%)",
                    }}
                    whileTap = {{
                        scale: 0.95,
                    }}
                    transition = {{
                        duration: 0.1,
                    }}
                >
                    {loginState == true ? "Logout" : "Login"}
                </motion.button>
            </div>
        </div>
    );
};

export default Navigation;