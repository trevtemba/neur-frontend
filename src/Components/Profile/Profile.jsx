import React, { useState } from "react";
import { motion } from "motion/react";

import "./profile.css"
import profileSplash from "../Assets/profileAssets/mock_splash.jpg"
import profileIcon from "../Assets/profileAssets/mock_icon.jpg"

const Profile = () => {

    const [pageState, setPageState] = useState("info")

    const changePage = (buttonId) => {
        setPageState(buttonId);
    }

    return (
        <div>
            <motion.div className="profileHeader">
                <div className="splash">
                    <img src={profileSplash}/>
                    <div className="icon">
                        <img src={profileIcon}/>
                        <span>username</span>
                    </div>
                    <motion.button className="bookBtn">
                        BOOK
                    </motion.button>
                    <motion.button className="shareBtn">
                        SHARE PROFILE
                    </motion.button>
                    <div className="reviewScore">
                        <img src=""/>
                        <span className="score">5.0</span><span className="reviewCount">(131)</span>
                    </div>
                </div>
            </motion.div>
            <motion.div className="profileNav">
                <motion.button className="infoBtn" onClick={changePage("info")}>
                    INFO
                </motion.button>
                <motion.button className="servicesBtn" onClick={changePage("services")}>
                    SERVICES
                </motion.button>
                <motion.button className="reviewsBtn" onClick={changePage("reviews")}>
                    REVIEWS
                </motion.button>
            </motion.div>
            {pageState === "info" && (
                <motion.div className="infoPage">
                    <div></div>
                </motion.div>
            )};
            {pageState === "services" && (
                <motion.div className="servicesPage">
                    <div></div>
                </motion.div>
            )};
            {pageState === "reviews" && (
                <motion.div className="reviewsPage">
                    <div></div>
                </motion.div>
            )};  
        </div>
    );
}

export default Profile;