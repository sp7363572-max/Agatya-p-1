// import { useState } from 'react'
// import './App.css'
// import Navigation from './components/navbar/Navigation'
// import Home from './components/homepage/Home'
// import Footer from './components/footer/Footer'
// import Brand from './components/brands/Brand'

// function App() {
//  return (
//     <>
//     <Navigation/>
//     <Home/>
//     <Brand/>
//     <Footer/>
//     </>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homepage/Home";
import BlogPage from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navbar/Navigation";
import Brand from "./components/brands/Brand";


function App() {
  return (
    <BrowserRouter>
  <div>
      <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/about" element={<About/>} /> */}
            {/* <Route path="/products" element={<Product />} /> */}
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Brand/>
     <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
