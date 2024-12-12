import React, { useState } from "react";
import { motion } from "motion/react";

import "./profile.css"
import profileSplash from "../Assets/profileAssets/mock_splash.jpg"
import profileIcon from "../Assets/profileAssets/mock_icon.jpg"
import starIcon from "../Assets/profileAssets/star_icon.svg"
import shareIcon from "../Assets/profileAssets/share_icon.svg"
import editIcon from "../Assets/profileAssets/edit_icon.svg"

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
                    </div>
                    <div className="infoBox">
                            <span className="profileUsn">Camillee_01</span>
                            <span className="roleName">Hair stylist</span>
                    </div>
                    <motion.button className="bookBtn">
                        BOOK
                    </motion.button>
                    <motion.button className="favBtn">
                        FAVORITE
                    </motion.button>
                    <motion.button className="shareBtn">
                        <img src={shareIcon} />
                    </motion.button>
                    <div className="reviewScore">
                        <img className="revIcon" src={starIcon}/>
                        <span className="score">5.0</span><span className="reviewCount">/ 131</span>
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
                <div className="tabContainer">
                    {pageState == "info" && (
                        <motion.div className="infoPage">
                            <div className="aboutSect">
                                <div className="subHeader">About <button className="editBtn"><img src={editIcon}/></button></div>
                                <div className="aboutText">
                                    <p>
                                        My name is Camille, and I've been doing hair for 3 years now!<br />
                                        If you like my previous work, be sure to book an appointment with me!<br />
                                        <br />
                                        Follow me on IG: @camille_marie
                                    </p>
                                </div>
                            </div>
                            <div className="availSect">
                                Availability
                            </div>
                            <div className="clientSect">
                                Clients
                            </div>
                            
                        </motion.div>
                    )}
                    {pageState == "services" && (
                        <motion.div className="servicesPage">
                            <div></div>
                        </motion.div>
                    )}
                    {pageState == "reviews" && (
                        <motion.div className="reviewsPage">
                            <div></div>
                        </motion.div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Profile;