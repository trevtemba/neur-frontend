import { div } from "motion/react-client";
import { motion, MotionConfig } from "motion/react";
import { useState } from "react";

import "./navigation.css"
import React from "react";

const buttonAnimation = {
    initial: { color: "#646464" },
    whileHover: {
        scale: 1.05,
        color: "#FFFFFF",
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
        className="container">
                <motion.button
                className="navButton"
                onClick={ () => setPage("home") }
                {...buttonAnimation}>
                    HOME
                </motion.button>
                <motion.button
                className="navButton"
                onClick={ () => setPage("appnt") }
                {...buttonAnimation}>
                    APPOINTMENTS
                </motion.button>                    
                <motion.button
                className="navButton"
                onClick={ () => setPage("explore") }
                {...buttonAnimation}>
                    EXPLORE
                </motion.button>                    
                <motion.button
                className="navButton"
                onClick={ () => setPage("earnings") }
                {...buttonAnimation}>
                    EARNINGS
                </motion.button>
        </div>
    );
}

export default Navigation;