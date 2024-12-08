import React from "react";
import { motion } from "motion/react";

import "./home.css"
import featuredHero from "../Assets/featured_hero.jpg"

const Home = () => {
    return (
        <div className="homePage">
            <div
            className="pageContainer">

                <div
                className="featuredContainer">
                    <img className="featuredHero" src={featuredHero}/>
                    <span className="subTitle">THIS MONTH'S</span>
                    <span className="mainTitle">FEATURED</span>
                    <span className="bottomTitle">STYLIST:</span>
                    <span className="nameTitle">Linda Stuart</span>
                    <span className="textBody">
                        <span className="personName">Linda</span> has been killing it this week!
                        Earning over 50 favorites this week, her spot on this months
                        featured is well deserved!
                    </span>
                    <div className="featuredButtons">
                        <motion.button 
                        className="bookButton"
                        initial={{
                            backgroundColor: "#009f79",
                        }}
                        whileHover={{
                            backgroundColor: "#00dfa9",
                        }}>
                            BOOK
                        </motion.button>
                        <motion.button 
                        className="favoriteButton"
                            initial={{
                            background: "transparent",
                            color: "#ffffff"
                        }}
                        whileHover={{
                            backgroundColor: "#ffffff",
                            color: "#000000",
                        }}>
                            FAVORITE
                        </motion.button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;