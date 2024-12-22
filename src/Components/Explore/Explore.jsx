import React, { useState } from "react";
import { motion } from "motion/react"
import explore_icon from "../Assets/explore_icon.svg"

import "./explore.css"

const Explore = () => {
    const [searchState, setSearchStatee] = useState()
    return (
        <div className="explorePage">
            <motion.div className="exploreContainer">
                <form action="">
                    <label className="exploreIcon"><img src={explore_icon}/></label>
                    <input className="exploreEntry" placeholder="Search..." />
                </form>
            </motion.div>
        </div>
    );
}

export default Explore;