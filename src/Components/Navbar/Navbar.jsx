import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import  logo from '../../img/logo.jpeg'
export default function Navbar() {
  return (
     <div className="n-wrapper">
        <div className="n-left">
            <img src={logo} alt=""  className='logo'/>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
     </div>
  );
}
