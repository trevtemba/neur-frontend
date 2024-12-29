import React, { useState } from "react";
import { color, motion } from "motion/react";
import { useLogin } from "../Contexts/loginContext";
import { useNavigation } from "../Contexts/navigationContext";
import { useNavigate } from "react-router-dom";
import "./profile.css"
import profileSplash from "../Assets/profileAssets/mock_splash.jpg"
import profileIcon from "../Assets/profileAssets/mock_icon.jpg"
import reviewerIcon from "../Assets/profileAssets/mockreviewer_icon.jpg"

import starIcon from "../Assets/profileAssets/star_icon.svg"
import emptyStarIcon from "../Assets/profileAssets/empty_star_icon.svg"

import shareIcon from "../Assets/profileAssets/share_icon.svg"
import editIcon from "../Assets/profileAssets/edit_icon.svg"
import likeIcon from "../Assets/featuredGrid/like_icon.svg"
import addIcon from "../Assets/profileAssets/add_icon.svg"

import arrowLIcon from "../Assets/profileAssets/arrow_back.svg"
import arrowRIcon from "../Assets/profileAssets/arrow_forward.svg"

import unavailable_icon from "../Assets/profileAssets/unavail_icon.svg"

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
    const [serviceSelectState, setServiceSelectState] = useState()
    const [dateSelectState, setDateSelectState] = useState()
    const [timeSelectState, setTimeSelectState] = useState()
    const [editState, setEditState] = useState("")
    
    const { loginState } = useLogin();

    const { activeButton, goPage } = useNavigation();
    const navigate = useNavigate();

    const selectedDate = {
        month: "",
        year: "",
        day: "",
        time: "",
    }

    const changePage = (buttonId) => {
        setPageState(buttonId);
    }

    const changeServiceSelection = (buttonId) => {
        setServiceSelectState(buttonId);
    }

    const changeTimeSelection = (buttonId) => {
        setTimeSelectState(buttonId);
        if (buttonId == month) {
            selectedDate.month = buttonId;
        }
        else if (buttonId == year) {
            selectedDate.year = buttonId;
        }
        else if (buttonId == day) {
            selectedDate.day = buttonId;
        }
        else if (buttonId == time) {
            selectedDate.time = buttonId;
        }
    }

    const changeEditSect = (sectId) => {
        if (editState == sectId) {
            setEditState("");
        }
        else {
            setEditState(sectId);
        }
    }
    const profileNavBtn = {
        initial: {
            color: "rgb(153, 153, 153)",
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

    const genericBtn = {
        initial: {
            filter: "invert(0)",
            backgroundColor: "hsl(0, 0%, 5%)"
        },
        whileHover: {
            backgroundColor: "hsl(0, 0%, 10%)"
        },
        transition: {
            filter: { duration: 0.1},
        },
    };

    const dateBtn = {
        initial: {
            filter: "invert(0)",
            backgroundColor: "hsl(0, 0%, 0%)"
        },
        whileHover: {
            backgroundColor: "hsl(0, 0%, 5%)"
        },
        transition: {
            filter: { duration: 0.1},
        },
    };



    return (
        <div className="profilePage">
            <div className="profileContainer">
                {loginState == false && (
                    <>
                        <motion.div className="promptBox"
                        initial = {{
                            y: -15,
                            opacity: 0,
                        }}
                        animate = {{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.25, 1, 0.5, 1],
                        }}
                        exit={{
                            opacity: 0,
                        }}>
                            <img className="promptIcon"src={unavailable_icon}/>
                            <span className="promptText">Login to view your profile</span>
                            <motion.button 
                            className="loginRedirect"
                            onClick={() => goPage("login", navigate)}
                            whileHover={{
                                backgroundColor: "hsl(0, 0%, 10%)",
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}>
                                Login
                            </motion.button>
                        </motion.div>
                    </>
                )}

                {loginState == true && (
                    <>
                        <motion.div className="profileHeader"
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
                        }}>
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
                            <motion.button className="bookBtn"
                            initial={{
                                backgroundColor: "#009f79",
                            }}
                            whileHover={{
                                backgroundColor: "#00dfa9",
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}>
                                BOOK
                            </motion.button>
                            <motion.button className="favBtn"
                                initial={{
                                    background: "transparent",
                                    color: "#ffffff"
                                }}
                                whileHover={{
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}>
                                FAVORITE
                            </motion.button>
                            <motion.button className="shareBtn"
                            initial={{
                                backgroundColor: "hsl(0, 0%, 5%)",
                            }}
                            whileHover={{
                                scale: 1.025,
                                backgroundColor: "hsl(0, 0%, 20%)",
                            }}>
                                <img src={shareIcon} />
                            </motion.button>
                            <div className="reviewScore">
                                <img className="revIcon" src={starIcon}/>
                                <span className="score">5.0</span><span className="reviewCount">/ 131</span>
                            </div>
                        </motion.div>
                        <motion.div className="profileNav"
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
                                <motion.div className="infoPage"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 1, 0.5, 1]
                                }}
                                exit={{
                                    opacity: 0,
                                }}>
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
                                    <div className="clientSect">
                                        <div className="subHeader">Clients<button className="editBtn" onClick={() => changeEditSect("client")}><img src={editIcon}/></button></div>
                                        <div className="clientGrid">
                                            <motion.div className="photo">
                                                <img src={fi6}/>
                                                <motion.div className="overlay">
                                                    <motion.button className="likeBtn" whileHover={{scale: 1.05,}}><img src={likeIcon}/></motion.button>
                                                    <motion.button className="serviceLink"
                                                    onClick={() => changePage("services")}
                                                    whileHover={{
                                                        scale: 1.025,
                                                    }}
                                                    >
                                                        <span>Get this</span>
                                                    </motion.button>
                                                </motion.div>
                                            </motion.div>
                                            {editState == "client" && (
                                                <motion.div className="addPhoto">
                                                    <motion.button className="addBtn">
                                                        <img className="addIcon" src={addIcon}/>
                                                    </motion.button>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                    
                                </motion.div>
                            )}
                            {pageState == "services" && (
                                <motion.div className="servicesPage"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 1, 0.5, 1]
                                }}
                                exit={{
                                    opacity: 0,
                                }}>
                                    <div className="serviceSect">
                                        <div className="subHeader">Services<button className="editBtn"><img src={editIcon}/></button></div>
                                        <div className="serviceList">
                                            <motion.button 
                                            className="service" onClick={ () => setServiceSelectState(1)}
                                            {...genericBtn}
                                            animate={{ filter: serviceSelectState == 1 ? "invert(1)" : "invert(0)" }}>
                                                <div className="textSect">
                                                    <span className="name">Starter Locs</span>
                                                    <span className="duration">3+ hours</span>
                                                    <span className="desc">Two-strand starter locs (full head of hair)</span>
                                                </div>
                                                <div className="priceSect">
                                                    <span className="symbol">$</span><span className="price">160</span>
                                                </div>
                                            </motion.button>
                                            <motion.button
                                            className="service" onClick={ () => setServiceSelectState(2)}
                                            {...genericBtn}
                                            animate={{ filter: serviceSelectState == 2 ? "invert(1)" : "invert(0)" }}>
                                                <div className="textSect">
                                                    <span className="name">Retwist</span>
                                                    <span className="duration">3+ hours</span>
                                                    <span className="desc">Two-strand retwist (wash and maintenance included)</span>
                                                </div>
                                                <div className="priceSect">
                                                    <span className="symbol">$</span><span className="price">100</span>
                                                </div>
                                            </motion.button>
                                            <motion.button
                                            className="service" onClick={ () => setServiceSelectState(3)}
                                            {...genericBtn}
                                            animate={{ filter: serviceSelectState == 3 ? "invert(1)" : "invert(0)" }}>
                                                <div className="textSect">
                                                    <span className="name">Box braids</span>
                                                    <span className="duration">3+ hours</span>
                                                    <span className="desc">Full head of box braids (blow dry included)</span>
                                                </div>
                                                <div className="priceSect">
                                                    <span className="symbol">$</span><span className="price">60</span>
                                                </div>
                                            </motion.button>
                                            <motion.button
                                            className="service" onClick={ () => setServiceSelectState(4)}
                                            {...genericBtn}
                                            animate={{ filter: serviceSelectState == 4 ? "invert(1)" : "invert(0)" }}>
                                                <div className="textSect">
                                                    <span className="name">Two-strand twists</span>
                                                    <span className="duration">3+ hours</span>
                                                    <span className="desc">Full head of two-strand twists (blow-dry included)</span>
                                                </div>
                                                <div className="priceSect">
                                                    <span className="symbol">$</span><span className="price">60</span>
                                                </div>
                                            </motion.button>
                                        </div>
                                    </div>
                                    <div className="scheduleSect">
                                        <div className="subHeader">Schedule<button className="editBtn"><img src={editIcon}/></button></div>
                                        <div className="dateSelection">
                                            <div className="monthSelect">
                                                <motion.button className="leftSelect"><img src={arrowLIcon}/></motion.button>
                                                <div className="monthLabel">
                                                    <span className="prev">November 2024</span>
                                                    <span className="curr">December 2024</span>
                                                    <span className="next">January 2025</span>
                                                </div>
                                                <motion.button className="rightSelect"><img src={arrowRIcon}/></motion.button>
                                            </div>
                                            <div className="daySelect">
                                                <motion.button className="leftSelect"><img src={arrowLIcon}/></motion.button>
                                                <div className="weekChart">
                                                    <div className="dayLabel">
                                                        <div className="dow">Sun</div>
                                                        <div className="dow">Mon</div>
                                                        <div className="dow">Tue</div>
                                                        <div className="dow">Wed</div>
                                                        <div className="dow">Thu</div>
                                                        <div className="dow">Fri</div>
                                                        <div className="dow">Sat</div>
                                                    </div>
                                                    <div className="dayBtns">
                                                        <div className="dayFrame">
                                                            <motion.button className="dayBtn" onClick={ () => setDateSelectState(1)}
                                                            {...dateBtn}
                                                            animate={{ filter: dateSelectState == 1 ? "invert(1)" : "invert(0)" }}>
                                                                8
                                                            </motion.button>
                                                        </div>
                                                        <div className="dayFrame">
                                                            <motion.button className="dayBtn" onClick={ () => setDateSelectState(2)}
                                                            {...dateBtn}
                                                            animate={{ filter: dateSelectState == 2 ? "invert(1)" : "invert(0)" }}>
                                                                9
                                                            </motion.button>
                                                        </div>
                                                        <div className="dayFrame">
                                                            <motion.button className="dayBtn" onClick={ () => setDateSelectState(3)}
                                                            {...dateBtn}
                                                            animate={{ filter: dateSelectState == 3 ? "invert(1)" : "invert(0)" }}>
                                                                10
                                                            </motion.button>
                                                        </div>
                                                        <div className="dayFrame">
                                                            <motion.button className="dayBtn" onClick={ () => setDateSelectState(4)}
                                                            {...dateBtn}
                                                            animate={{ filter: dateSelectState == 4 ? "invert(1)" : "invert(0)" }}>
                                                                11
                                                            </motion.button>
                                                        </div>
                                                        <div className="dayFrame">
                                                            <motion.button className="dayBtn" onClick={ () => setDateSelectState(5)}
                                                            {...dateBtn}
                                                            animate={{ filter: dateSelectState == 5 ? "invert(1)" : "invert(0)" }}>
                                                                12
                                                            </motion.button>
                                                        </div>
                                                        <div className="dayFrame">
                                                            <motion.button className="dayBtn" onClick={ () => setDateSelectState(6)}
                                                            {...dateBtn}
                                                            animate={{ filter: dateSelectState == 6 ? "invert(1)" : "invert(0)" }}>
                                                                13
                                                            </motion.button>
                                                        </div>
                                                        <div className="dayFrame">
                                                            <motion.button className="dayBtn" onClick={ () => setDateSelectState(7)}
                                                            {...dateBtn}
                                                            animate={{ filter: dateSelectState == 7 ? "invert(1)" : "invert(0)" }}>
                                                                14
                                                            </motion.button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <motion.button className="rightSelect"><img src={arrowRIcon}/></motion.button>
                                            </div>
                                        </div>
                                        <div className="timeSelect">
                                            <motion.button className="leftSelect"><img src={arrowLIcon}/></motion.button>
                                            <div className="timeGrid">
                                                <motion.button className="timeBtn" onClick={ () => setTimeSelectState(1) }
                                                {...genericBtn}
                                                animate={{ filter: timeSelectState == 1 ? "invert(1)" : "invert(0)" }}
                                                >
                                                    5:30 PM
                                                </motion.button>
                                                <motion.button className="timeBtn" onClick={ () => setTimeSelectState(2) }
                                                {...genericBtn}
                                                animate={{ filter: timeSelectState == 2 ? "invert(1)" : "invert(0)" }}
                                                >
                                                    6:00 PM
                                                </motion.button>
                                                <motion.button className="timeBtn" onClick={ () => setTimeSelectState(3) }
                                                {...genericBtn}
                                                animate={{ filter: timeSelectState == 3 ? "invert(1)" : "invert(0)" }}
                                                >
                                                    6:30 PM
                                                </motion.button>
                                                <motion.button className="timeBtn" onClick={ () => setTimeSelectState(4) }
                                                {...genericBtn}
                                                animate={{ filter: timeSelectState == 4 ? "invert(1)" : "invert(0)" }}
                                                >
                                                    7:00 PM
                                                </motion.button>
                                                <motion.button className="timeBtn" onClick={ () => setTimeSelectState(5) }
                                                {...genericBtn}
                                                animate={{ filter: timeSelectState == 5 ? "invert(1)" : "invert(0)" }}
                                                >
                                                    7:30 PM
                                                </motion.button>
                                                <motion.button className="timeBtn" onClick={ () => setTimeSelectState(6) }
                                                {...genericBtn}
                                                animate={{ filter: timeSelectState == 6 ? "invert(1)" : "invert(0)" }}
                                                >
                                                    8:00 PM
                                                </motion.button>
                                                <motion.button className="timeBtn" onClick={ () => setTimeSelectState(7) }
                                                {...genericBtn}
                                                animate={{ filter: timeSelectState == 7 ? "invert(1)" : "invert(0)" }}
                                                >
                                                    8:30 PM
                                                </motion.button>    
                                            </div>
                                            <motion.button className="rightSelect"><img src={arrowRIcon}/></motion.button>
                                    </div>
                                    <div className="bookSect">
                                        <motion.button className="selectedBooking"
                                        {...genericBtn}
                                        whileTap={{
                                            filter: "invert(1)",
                                        }}
                                        >
                                                <span>{selectedDate.month}</span>
                                                <span>{selectedDate.year}</span>
                                                <span>{selectedDate.day}</span>
                                                <span>{selectedDate.time}</span>
                                                
                                        </motion.button>   

                                        <motion.button className="bookBtn2"
                                        {...genericBtn}
                                        whileTap={{
                                            filter: "invert(1)",
                                        }}
                                        >
                                                <span>BOOK</span>
                                                <img src={arrowRIcon}/>
                                        </motion.button>    
                                    </div>

                                    </div>
                                </motion.div>
                            )}
                            {pageState == "reviews" && (
                                <motion.div className="reviewPage"
                                                        initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 1, 0.5, 1]
                                }}
                                exit={{
                                    opacity: 0,
                                }}>
                                    <div className="reviewList">
                                        <div className="review">
                                            <img className="profilePic" src={reviewerIcon}/>                                
                                            <div className="reviewInfo">
                                                
                                                <div className="reviewerInfo">
                                                    <span className="reviewerName">tre_temba</span>
                                                    <span className="reviewerRole">Customer</span>
                                                    <span className="reviewDate">10/16/2024</span>
                                                </div>

                                                <div className="reviewSection">
                                                    <span className="reviewDesc">Loved this service!</span>
                                                    <div className="starRating">
                                                        <img className="starImg2" src={starIcon}/>
                                                        <img className="starImg2" src={starIcon}/>
                                                        <img className="starImg2" src={starIcon}/>
                                                        <img className="starImg2" src={starIcon}/>
                                                        <img className="starImg2" src={emptyStarIcon}/>
                                                    </div>
                                                </div>

                                                <span className="reportBtn">Report Content</span>
                                            </div>
                                        </div>
                                        <div className="review">   
                                            <img className="profilePic" src={reviewerIcon}/>                                
                                            <div className="reviewInfo">
                                                
                                                <div className="reviewerInfo">
                                                    <span className="reviewerName">tre_temba</span>
                                                    <span className="reviewerRole">Customer</span>
                                                    <span className="reviewDate">10/16/2024</span>
                                                </div>

                                                <div className="reviewSection">
                                                    <span className="reviewDesc">Loved this service!</span>
                                                    <div className="starRating">
                                                        <img className="starImg2" src={starIcon}/>
                                                        <img className="starImg2" src={starIcon}/>
                                                        <img className="starImg2" src={starIcon}/>
                                                        <img className="starImg2" src={starIcon}/>
                                                        <img className="starImg2" src={emptyStarIcon}/>
                                                    </div>
                                                </div>

                                                <span className="reportBtn">Report Content</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                    </>
                )};
            </div>
        </div>
    );
}

export default Profile;