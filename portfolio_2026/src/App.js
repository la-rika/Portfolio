import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css"
import Homepage from "./Homepage";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <Container className={"mb-0"}>
        <p className="text-light-pink">contacts section work in progress : )</p>
      </Container>
      {/* <Contacts/> */}
      <Footer />
    </>
  );
}

export default App;
