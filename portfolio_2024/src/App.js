import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css"
import Homepage from "./Homepage";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
