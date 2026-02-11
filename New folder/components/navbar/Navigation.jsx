import React from 'react'
import './nav.css'
import logo from "../../assets/brands/agatyai.jpeg"

function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ position: "relative", zIndex: "1" }}
    >
      <div className="container-fluid">

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
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/product"
                role="button"
                data-bs-toggle="dropdown"
              >
                Product
              </a>
              <ul className="dropdown-menu"></ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>

          {/* Right button */}
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn fw-bold px-4 text-light"
              style={{ backgroundColor: "#62360f" }}
            >
              INQUIRE NOW
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navigation
