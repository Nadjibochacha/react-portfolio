import React from "react";
import Home from "../../react-port/src/pages/home";
import About from "../../react-port/src/pages/about";
import Contact from "../../react-port/src/pages/contact";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./pages/Projects";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
