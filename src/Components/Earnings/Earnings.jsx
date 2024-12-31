import React from "react";
import { motion } from "motion/react";
import "./earnings.css"
import { useLogin } from "../Contexts/loginContext";

const Earnings = () => {

    const { loginState } = useLogin();

    return (
        <div className="earningsPage">
            <div className="earningsContainer">
                {loginState == false && (
                    <>
                        <motion.div className="promptBox"
                        initial = {{
                            y: -15,
                            opacity: 0,
                        }}
                        animate = {{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.25, 1, 0.5, 1],
                        }}
                        exit={{
                            opacity: 0,
                        }}>
                            <span className="promptText">Vendor account needed to view earnings</span>
                            <motion.button 
                            className="loginRedirect"
                            onClick={() => goPage("login", navigate)}
                            whileHover={{
                                backgroundColor: "hsl(0, 0%, 10%)",
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}>
                                Login
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Earnings;