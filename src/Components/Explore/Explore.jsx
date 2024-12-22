import React, { useState } from "react";
import { motion } from "motion/react"
import explore_icon from "../Assets/explore_icon.svg"

import "./explore.css"

const Explore = () => {
    const [searchState, setSearchStatee] = useState()
    return (
        <div className="explorePage">
            <motion.div className="exploreContainer"
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
                }}>
                <form action="">
                    <label className="exploreIcon"><img src={explore_icon}/></label>
                    <input className="exploreEntry" placeholder="Search..." />
                </form>
            </motion.div>
        </div>
    );
}

export default Explore;