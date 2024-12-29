import React from "react";
import { motion } from "motion/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useNavigation } from "../Contexts/navigationContext";

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
import linkIcon from "../Assets/featuredGrid/link_icon.svg"

const Home = () => {

    const { activeButton, goPage } = useNavigation();
    const navigate = useNavigate();
    
    return (
        <div className="homePage">
            <div
            className="pageContainer">

                <motion.div
                className="featuredContainer"
                initial={{
                    x: -15,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    ease: [0.25, 1, 0.5, 1]
                }}
                exit={{
                    opacity: 0,
                }}
                >
                    <img className="featuredHero" src={featuredHero}/>
                    <span className="subTitle">THIS MONTH'S</span>
                    <span className="mainTitle">FEATURED</span>
                    <span className="bottomTitle">STYLIST:</span>
                    <span className="nameTitle">Linda Stuart</span>
                    <span className="textBody">
                        <span className="personName">Linda</span> has been killing it this week!
                        Earning over 50 favorites this week, her spot on November's
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
                </motion.div>
                <motion.div className="htContainer"
                initial={{
                    x: 15,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    ease: [0.25, 1, 0.5, 1]
                }}
                exit={{
                    opacity: 0,
                }}
                >
                    <div className="htLeft">
                        <span className="hlTitle">NOVEMBER'S</span>
                        <span className="hlTitleStyled">HIGHTLIGHTS</span>
                    </div>
                    <div className="htRight">
                        <motion.button 
                        className="exploreBtn"
                        onClick={() => goPage("explore", navigate)}
                        initial={{
                            backgroundColor: "#ffffff",
                        }}
                        whileHover={{
                            backgroundColor: "#d1d1d1",
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        >
                            EXPLORE MORE
                        </motion.button>
                    </div>
                </motion.div>
                <motion.div
                className="featuredImagesContainer"
                initial={{
                    opacity: 0,
                }}
                animate={{

                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    ease: [0.25, 1, 0.5, 1]
                }}
                exit={{
                    opacity: 0,
                }}
                >
                    <div
                    className="column">
                        <motion.div className="photo">
                            <img src={fi1}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>lindas_locs
                                </motion.button>
                            </motion.div>
                        </motion.div>
                        <div className="photo">
                            <img src={fi2}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>carterr04
                                </motion.button>
                            </motion.div>
                        </div>
                        <div className="photo">
                            <img src={fi3}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>nilah_nails
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                    <div
                    className="column">
                        <div className="photo">
                            <img src={fi4}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>lindas_locs
                                </motion.button>
                            </motion.div>
                        </div>
                        <div className="photo">
                            <img src={fi5}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>lindas_locs
                                </motion.button>
                            </motion.div>
                        </div>
                        <div className="photo">
                            <img src={fi6}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>brooks_braids
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                    <div
                    className="column">
                        <div className="photo">
                            <img src={fi7}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>nilah_nails
                                </motion.button>
                            </motion.div>
                        </div>
                        <div className="photo">
                            <img src={fi8}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>lindas_locs
                                </motion.button>
                            </motion.div>
                        </div>
                        <div className="photo">
                            <img src={fi9}/>
                            <motion.div className="overlay">
                                <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                <motion.button className="userLink"
                                whileHover={{
                                    scale: 1.025,
                                }}
                                >
                                    <img src={linkIcon}/>lindas_locs
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
                <div className="fadeOverlay">

                </div>
            </div>
        </div>
    );
}

export default Home;