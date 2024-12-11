import React, { useState } from "react";
import { motion } from "motion/react";

import "./profile.css"
import profileSplash from "../Assets/profileAssets/mock_splash.jpg"
import profileIcon from "../Assets/profileAssets/mock_icon.jpg"

const Profile = () => {

    const [pageState, setPageState] = useState("info")
    
    return (
        <div>
            <div className="profileHeader">
                <div className="splash">
                    <img src={profileSplash}/>
                    <div className="icon">
                        <img src={profileIcon}/>
                        <span>username</span>
                    </div>
                    <button className="bookBtn">
                        BOOK
                    </button>
                    <button className="shareBtn">
                        SHARE PROFILE
                    </button>
                    <div className="reviewScore">
                        <img src=""/>
                        <span className="score">5.0</span><span className="reviewCount">(131)</span>
                    </div>
                </div>
            </div>
            <div className="profileNav">
                <button className="infoBtn">INFO</button>
                <button className="servicesBtn">SERVICES</button>
                <button className="reviewsBtn">REVIEWS</button>
            </div>
            <div className="infoPage">
                <div></div>
            </div>
            <div className="servicesPage">
                <div></div>
            </div>
            <div className="reviewsPage">
                <div></div>
            </div>   
        </div>
    );
}

export default Profile;