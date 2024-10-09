import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css"
import Homepage from "./components/Homepage/Homepage";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <Card title="Accenture" subtitle="custom software engineer" content="React | BEM | Typerscript | tailwind | Next"/>
    </>
  );
}

export default App;
