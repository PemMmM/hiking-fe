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
        <li>Facebook<FaFacebookSquare /></li>
        <li>instagram <FaInstagramSquare /></li>
        <li>twitter <FaTwitterSquare /></li>
      </div>

    </div>
  )
}

export default Footer