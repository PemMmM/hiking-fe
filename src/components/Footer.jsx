import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa";
import "../styles/footer.css"



function Footer() {
  return (
    <div className="box">
    <div className="footer">
      <div className="contact-us">
      </div>
      <div className="socials">
        <li><FaFacebookSquare /></li>
        <li><FaInstagramSquare /></li>
        <li><FaTwitterSquare /></li>
      </div>
      </div>
    </div>
  )
}

export default Footer