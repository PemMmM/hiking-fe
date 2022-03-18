import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa";
import "../styles/footer.css"



function Footer() {
  return (
    <div className="footer">
      <div className="contact-us">
        --a link to be implemented to contact with site--
      </div>
      <div className="socials">
        <li><FaFacebookSquare /></li>
        <li><FaInstagramSquare /></li>
        <li><FaTwitterSquare /></li>
      </div>

    </div>
  )
}

export default Footer