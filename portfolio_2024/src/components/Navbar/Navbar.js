import React from "react";
import "./Navbar.modules.scss";

export const Navbar = () => {
    const handleNavigation = (path) => () => {
        window.location.href=path;
    }

    return (
        <div className="navbar-container">
            <div className="nav-item fancy-text " onClick={()=>{handleNavigation("/")}}>
                <p className="letter letter--1">H</p>
                <p className="letter letter--2">O</p>
                <p className="letter letter--3">M</p>
                <p className="letter letter--4">E</p>
            </div>
            <div className="nav-item fancy-text" onClick={()=>{handleNavigation("/about")}}>
                <p className="letter letter--1">A</p>
                <p className="letter letter--2">B</p>
                <p className="letter letter--3">O</p>
                <p className="letter letter--4">U</p>
                <p className="letter letter--5">T</p>
            </div>
            <div className="nav-item fancy-text">
                <p className="letter letter--1">P</p>
                <p className="letter letter--2">R</p>
                <p className="letter letter--3">O</p>
                <p className="letter letter--4">J</p>
                <p className="letter letter--5">E</p>
                <p className="letter letter--6">C</p>
                <p className="letter letter--7">T</p>
                <p className="letter letter--8">S</p>
            </div>
            <div className="nav-item fancy-text">
                <p className="letter letter--1">C</p>
                <p className="letter letter--2">O</p>
                <p className="letter letter--3">N</p>
                <p className="letter letter--4">T</p>
                <p className="letter letter--5">A</p>
                <p className="letter letter--6">C</p>
                <p className="letter letter--7">T</p>
                <p className="letter letter--8">S</p>
            </div>
        </div>
    )
}

