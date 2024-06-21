import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage} from "./pages/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
