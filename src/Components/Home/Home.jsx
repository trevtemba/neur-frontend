import React from "react";
import { motion, useAnimationControls } from "motion/react";

import "./home.css"
import featuredHero from "../Assets/featured_hero.jpg"

import fi1 from "../Assets/featuredGrid/fi1.jpg"
import fi2 from "../Assets/featuredGrid/fi2.jpg"
import fi3 from "../Assets/featuredGrid/fi3.jpg"
import fi4 from "../Assets/featuredGrid/fi4.jpg"
import fi5 from "../Assets/featuredGrid/fi5.jpg"
import fi6 from "../Assets/featuredGrid/fi6.jpg"
import fi7 from "../Assets/featuredGrid/fi7.jpg"
import fi8 from "../Assets/featuredGrid/fi8.jpg"
import fi9 from "../Assets/featuredGrid/fi8.jpg"
import likeIcon from "../Assets/featuredGrid/like_icon.svg"

const Home = () => {

    const controls = useAnimationControls();

    const handleImgHover = () => {
        controls.start("hovered");
    }
    const handleImgHoverOff = () => {
        controls.start("initial");
    }

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
                <div className="htContainer">
                    <div className="htLeft">
                        <span className="hlTitle">NOVEMBER'S</span>
                        <span className="hlTitleStyled">HIGHTLIGHTS</span>
                    </div>
                    <div className="htRight">
                        <motion.button 
                        className="exploreBtn"
                        initial={{
                            backgroundColor: "#ffffff",
                        }}
                        whileHover={{
                            backgroundColor: "#d1d1d1",
                        }}
                        >
                            EXPLORE MORE
                        </motion.button>
                    </div>
                </div>
                <div
                className="featuredImagesContainer">
                    <div
                    className="column">
                        <div className="photo" onMouseOver={handleImgHover} onMouseLeave={handleImgHoverOff}>
                            <img src={fi1}/>
                            <motion.div 
                            className="overlay"
                            variants={{
                                initial: {
                                    opacity: 0,
                                },
                                hovered: {
                                    opacity: 1,
                                },
                            }}
                            initial="initial"
                            animate={controls}
                            >
                                <button className="likeBtn"><img src={likeIcon}/></button>
                                <button className="userLink">username</button>
                            </motion.div>
                        </div>
                        <div className="photo">
                            <img src={fi2}/>
                        </div>
                        <div className="photo">
                            <img src={fi3}/>
                        </div>
                    </div>
                    <div
                    className="column">
                        <div className="photo">
                            <img src={fi4}/>
                        </div>
                        <div className="photo">
                            <img src={fi5}/>
                        </div>
                        <div className="photo">
                            <img src={fi6}/>
                        </div>
                    </div>
                    <div
                    className="column">
                        <div className="photo">
                            <img src={fi7}/>
                        </div>
                        <div className="photo">
                            <img src={fi8}/>
                        </div>
                        <div className="photo">
                            <img src={fi9}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;