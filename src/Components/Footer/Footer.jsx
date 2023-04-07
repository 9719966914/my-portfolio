import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
export default function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt=""  style={{width:'100%'}}/>
        <div className="f-content">
        <div className="i-icons">
                <a href=""><img src={Github} alt="" /></a>
                <a href=""><img src={LinkedIn} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
