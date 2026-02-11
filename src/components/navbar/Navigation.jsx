import React from 'react'
import './nav.css'
import logo from "../../assets/brands/agatyai.jpeg"
import { RiContactsFill, RiHeartFill, RiHome6Line, RiInfoI, RiNewsLine, RiPhoneFill, RiRestaurant2Fill } from '@remixicon/react';
import { RiAlertLine } from '@remixicon/react';
 
function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ position: "relative", zIndex: "10" }}
    >
      <div className="container-fluid"style={
        {
          backgroundcolor: "#ffffff"   
        }
      }>

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Agatya Logo"
            className="logo"   
          />

        </a>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="/">Home < RiHome6Line  /></a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About
              < RiInfoI size={25} /></a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/product"
                role="button"
                data-bs-toggle="dropdown"
              >
                Product 
                < RiRestaurant2Fill  />
              </a>
              <ul className="dropdown-menu"></ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog 
              < RiNewsLine  /></a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us 
              < RiContactsFill  /></a>
            </li>
          </ul>

          {/* Right button */}
          <div className="d-flex align-items-center gap-3 justify-content-center">
            <button
              className="btn dd fw-bold px-4 text-light"
              style={{ backgroundColor: "#ffff"}}
            >
           < RiPhoneFill   color="rgba(98,54,15,1)" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navigation
