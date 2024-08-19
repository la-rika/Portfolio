import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { About } from "./pages/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Homepage />} />
            <Route path="/contacts" element={<Homepage />} />
          </Route>
        </Routes>
      <Footer />
    </>
  );
}

export default  App;
