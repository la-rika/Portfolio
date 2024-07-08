import React from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer/>
    </>
  );
}

export default App;
