import React from 'react'
import { FaFacebookF } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Social(){
  <>
  <div className="social-container">
    <ul className="social-list">
      <li className="social-list-item"><FaXTwitter className="social-icon" id="twitter" /></li>
      <li className="social-list-item"><FaLinkedinIn className="social-icon"  id="linkedin" /></li>
      <li className="social-list-item"><FaGoogle className="social-icon" id="google" /></li>
      <li className="social-list-item"><FaFacebookF className="social-icon" id="facebook"/></li>
  </ul>
    </div>
  </>
}


