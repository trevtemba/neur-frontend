import React, { useState } from "react";
import { motion } from "motion/react";

import "./profile.css"
import profileSplash from "../Assets/profileAssets/mock_splash.jpg"
import profileIcon from "../Assets/profileAssets/mock_icon.jpg"
import starIcon from "../Assets/profileAssets/star_icon.svg"
import { div } from "motion/react-client";
const Profile = () => {

    const [pageState, setPageState] = useState("info")

    const changePage = (buttonId) => {
        setPageState(buttonId);
    }

    return (
        <div className="profilePage">
            <div className="profileContainer">
                <motion.div className="profileHeader">
                    <div className="profileSplash">
                        <img className="splashImg" src={profileSplash}/>
                    </div>
                    <div className="profileIcon">
                        <img className="iconImg" src={profileIcon}/>
                        <span>Camillee_01</span>
                        <span>Hairst</span>
                    </div>
                    <motion.button className="bookBtn">
                        BOOK
                    </motion.button>
                    <motion.button className="shareBtn">
                        SHARE
                    </motion.button>
                    <div className="reviewScore">
                        <img src={starIcon}/>
                        <span className="score">5.0</span><span className="reviewCount">(131)</span>
                    </div>
                </motion.div>
                <motion.div className="profileNav">
                    <motion.button className="profileNavBtn" onClick={ () => changePage("info")}>
                        INFO
                    </motion.button>
                    <motion.button className="profileNavBtn" onClick={ () => changePage("services")}>
                        SERVICES
                    </motion.button>
                    <motion.button className="profileNavBtn" onClick={ () => changePage("reviews")}>
                        REVIEWS
                    </motion.button>
                </motion.div>
                {pageState == "info" && (
                    <motion.div className="infoPage">
                        <div></div>
                    </motion.div>
                )};
                {pageState == "services" && (
                    <motion.div className="servicesPage">
                        <div></div>
                    </motion.div>
                )};
                {pageState == "reviews" && (
                    <motion.div className="reviewsPage">
                        <div></div>
                    </motion.div>
                )};  
            </div>
        </div>
    );
}

export default Profile;