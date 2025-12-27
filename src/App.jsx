import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
