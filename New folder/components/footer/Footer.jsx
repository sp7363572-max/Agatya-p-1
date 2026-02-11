import React from "react";
import "./footer.css";
import logo from "../../assets/brands/agatyai.jpeg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section brand">
          <img src={logo} alt="" className="footer-logo" />
          <h2>Agatya</h2>
          <p>
            Delicious vegan & non-veg meals crafted with love and quality
            ingredients.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Non-Veg</a></li>
            <li><a href="#">Desserts</a></li>
            <li><a href="#">Beverages</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@agatya.com</p>
          <p>Phone: +91 12345 6789</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Agatya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

