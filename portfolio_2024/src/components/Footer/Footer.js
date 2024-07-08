import React from "react";
import "./Footer.modules.scss"

export const Footer = () => {
    return (
        <div className="footer-container">
            <hr className="line-footer"></hr>
            <div className="content  normal-text">
                <p >@Lara Misia Forlani</p>
                <div className="content__contacts">
                    <p>email</p>
                    <p>linkedin</p>
                    <p>cv download</p>
                </div>
            </div>
        </div>
    )
}