import React from "react";
import "./Homepage.modules.scss"
import profilePic from "../../images/profile.png"

export const Homepage = () => {
    return (
        <div className="homepage-container">
            <img src={profilePic} alt="profile" className="profile-pic" />
            <div className="profile-text fancy-text">
                <h1 className="profile-text__big white">Lara Misia Forlani</h1>
                <div className="normal-text ">
                    <a href="/projects" className="profile-text__little white">full stack developer</a>
                    <div className="underline"></div>
                </div>

            </div>
        </div>
    )
}
