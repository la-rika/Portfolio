import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css"
import Homepage from "./components/Homepage/Homepage";
import Timeline from "./components/Timeline/Timeline";

const App = () => {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <Timeline/>
    </>
  );
}

export default App;
