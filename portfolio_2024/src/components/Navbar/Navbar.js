import React, {  useState } from "react";
import "./Navbar.modules.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [location,setLocation] = useState("");

    //cant change link color based on current url :(
    // useEffect(()=>{
    //     let newLocation = window.location.pathname;
    //     setLocation(newLocation);
    //     console.log(location)
    // },[location])

    return (
        <div className="navbar-container">
            <Link className="nav-item normal-text"  style={{color:location === "/" &&"#ffacc9"}} to={"/"}>
                <p className="letter letter--1">H</p>
                <p className="letter letter--2">O</p>
                <p className="letter letter--3">M</p>
                <p className="letter letter--4">E</p>
            </Link>
            <Link className="nav-item normal-text" style={{color:location === "/about" &&"#ffacc9"}} to={"/about"}>
                <p className="letter letter--1">A</p>
                <p className="letter letter--2">B</p>
                <p className="letter letter--3">O</p>
                <p className="letter letter--4">U</p>
                <p className="letter letter--5">T</p>
            </Link>
            <Link className="nav-item normal-text" style={{color:location === "/projects" &&"#ffacc9"}} to={"/projects"}>
                <p className="letter letter--1">P</p>
                <p className="letter letter--2">R</p>
                <p className="letter letter--3">O</p>
                <p className="letter letter--4">J</p>
                <p className="letter letter--5">E</p>
                <p className="letter letter--6">C</p>
                <p className="letter letter--7">T</p>
                <p className="letter letter--8">S</p>
            </Link>
            <Link className="nav-item normal-text" style={{color:location === "/contacts" &&"#ffacc9"}} to={"/contacts"}>
                <p className="letter letter--1">C</p>
                <p className="letter letter--2">O</p>
                <p className="letter letter--3">N</p>
                <p className="letter letter--4">T</p>
                <p className="letter letter--5">A</p>
                <p className="letter letter--6">C</p>
                <p className="letter letter--7">T</p>
                <p className="letter letter--8">S</p>
            </Link>
        </div>
    )
}

