import React from "react";
import "./home.css"
import featuredHero from "../Assets/featured_hero.jpeg"

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
                    <span className="bottomTitle">STYLIST</span>
                    <span className="textBody">
                        <span className="personName">Linda Stuart</span> has been killing it this week!
                        Earning over 50 favorites this week, her spot on this months
                        featured is well deserved!
                    </span>
                    <div className="featuredButtons">
                        <button className="bookButton">BOOK</button>
                        <button className="favoriteButton">FAVORITE</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;