import React from "react";
import "./home.css"

const Home = () => {
    return (
        <div className="homePage">
            <div
            className="pageContainer">

                <div
                className="featuredContainer">
                    <span className="subTitle">This Months</span>
                    <span className="mainTitle">FEATURED</span>
                    <span className="textBody">
                        Linda Stuart has been killing it this week!
                        Earning over 50 favorites this week, her spot on this months
                        featured is well deserved!
                    </span>
                    <label><img src="" alt="" /></label>
                    <div className="featuredButtons">
                        <button className="bookButtons">Book</button>
                        <button className="favoriteButtons">Favorite</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;