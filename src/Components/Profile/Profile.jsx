import React, { useState } from "react";
import { motion } from "motion/react";

import "./profile.css"
import profileSplash from "../Assets/profileAssets/mock_splash.jpg"
import profileIcon from "../Assets/profileAssets/mock_icon.jpg"
import starIcon from "../Assets/profileAssets/star_icon.svg"
import shareIcon from "../Assets/profileAssets/share_icon.svg"
import editIcon from "../Assets/profileAssets/edit_icon.svg"
import likeIcon from "../Assets/featuredGrid/like_icon.svg"
import nextIcon from "../Assets/profileAssets/next_icon.svg"

import fi1 from "../Assets/featuredGrid/fi1.jpg"
import fi2 from "../Assets/featuredGrid/fi2.jpg"
import fi3 from "../Assets/featuredGrid/fi3.jpg"
import fi4 from "../Assets/featuredGrid/fi4.jpg"
import fi5 from "../Assets/featuredGrid/fi5.jpg"
import fi6 from "../Assets/featuredGrid/fi6.jpg"
import fi7 from "../Assets/featuredGrid/fi7.jpg"
import fi8 from "../Assets/featuredGrid/fi8.jpg"
import fi9 from "../Assets/featuredGrid/fi8.jpg"
import { div, style } from "motion/react-client";
const Profile = () => {

    const [pageState, setPageState] = useState("info")

    const changePage = (buttonId) => {
        setPageState(buttonId);
    }

    const profileNavBtn = {
        initial: {
            color: "hsl(0, 0%, 60%)",
            borderBottomColor: "hsl(0, 0%, 0%)",
        },
        whileHover: {
            color: "hsl(0, 0%, 100%)",
        },
        transition: {
            borderBottomColor: { duration: 0.1},
            color: { duration: 0.25},
        },
    };

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
                    <motion.button className="profileNavBtn" onClick={ () => changePage("info")} 
                    {...profileNavBtn}
                    animate={{
                        borderBottomColor: pageState === "info" ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 0%)",
                        color: pageState === "info" ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 60%)",
                    }}
                    >
                        INFO
                    </motion.button>
                    <motion.button className="profileNavBtn" onClick={ () => changePage("services")}
                    {...profileNavBtn}
                    animate={{
                        borderBottomColor: pageState === "services" ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 0%)",
                        color: pageState === "services" ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 60%)",
                    }}
                    >
                        SERVICES
                    </motion.button>
                    <motion.button className="profileNavBtn" onClick={ () => changePage("reviews")}
                    {...profileNavBtn}
                    animate={{
                        borderBottomColor: pageState === "reviews" ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 0%)",
                        color: pageState === "reviews" ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 60%)",
                    }}
                    >
                        REVIEWS
                    </motion.button>
                </motion.div>
                <div className="tabContainer">
                    {pageState == "info" && (
                        <motion.div className="infoPage">
                            <div className="aboutSect">
                                <div className="subHeader">About<button className="editBtn"><img src={editIcon}/></button></div>
                                <div className="aboutText">
                                    <p>
                                        My name is Camille, and I've been doing hair for 3 years now!<br />
                                        If you like my previous work, be sure to book an appointment with me!<br />
                                        <br />
                                        Follow me on IG: @camille_marie
                                    </p>
                                </div>
                            </div>
                            {/* <div className="availSect">
                                <div className="subHeader">Availability<button className="editBtn"><img src={editIcon}/></button></div>
                                <div className="availChart">
                                    <div className="chartHeader">
                                        <div className="dow">Sun</div>
                                        <div className="dow">Mon</div>
                                        <div className="dow">Tue</div>
                                        <div className="dow">Wed</div>
                                        <div className="dow">Thu</div>
                                        <div className="dow">Fri</div>
                                        <div className="dow">Sat</div>
                                    </div>
                                    <div className="datesFrame">
                                        <button className="dateBtn">
                                            <span className="dayLab">08</span>
                                            <span className="monthLab">Dec</span>
                                        </button>
                                        <button className="dateBtn">
                                            <span className="dayLab">09</span>
                                            <span className="monthLab">Dec</span>
                                        </button>
                                        <button className="dateBtn">
                                            <span className="dayLab">10</span>
                                            <span className="monthLab">Dec</span>
                                        </button>
                                        <button className="dateBtn">
                                            <span className="dayLab">11</span>
                                            <span className="monthLab">Dec</span>
                                        </button>
                                        <button className="dateBtn">
                                            <span className="dayLab">12</span>
                                            <span className="monthLab">Dec</span>
                                        </button>
                                        <button className="dateBtn">
                                            <span className="dayLab">13</span>
                                            <span className="monthLab">Dec</span>
                                        </button>
                                        <button className="dateBtn">
                                            <span className="dayLab">14</span>
                                            <span className="monthLab">Dec</span>
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                            <div className="clientSect">
                                <div className="subHeader">Clients<button className="editBtn"><img src={editIcon}/></button></div>
                                <div className="clientGrid">
                                    <motion.div className="photo">
                                        <img src={fi6}/>
                                        <motion.div className="overlay">
                                            <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                            <motion.button className="serviceLink"
                                            whileHover={{
                                                scale: 1.025,
                                            }}
                                            >
                                                <span>Get this</span>
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                </div>
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