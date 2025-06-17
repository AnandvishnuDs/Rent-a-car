import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Rent A Car</h3>
          <p>Your reliable car rental partner.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={"/"}><a href="#">Home</a></Link></li>
            <li><Link to={"/deal"}><a href="#">Deal</a></Link></li>
            <li><Link to={"/fleet"}><a href="#">Fleet</a></Link></li>
            <li><Link to={"/contact"}><a href="#">Contact</a></Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>📍 Angels Plaza, NH Bypass,
                   TVS Junction, South Kalamassery</p>
          <p>📞 +91 9188393926</p>
          <p>📧 info@rentacar.com</p>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Rent A Car. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer