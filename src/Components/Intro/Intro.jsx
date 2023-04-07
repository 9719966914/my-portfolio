import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';

import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
// import glassesimoji from '../../img/glassesimoji.png';
import FloatinmgDiv from '../FloatingDiv/FloatinmgDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import Shivam from '../../img/shivam.jpeg';

export default function Intro() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode? 'white':''}}>Hello!! I Am</span>
                <span>Shivam Parashar</span>
                <span>Frontend devloper with high level of experience in web designing and development, with new tranding technologies.</span>

            </div>
            <button className="button i-button">Open to work</button>
            <div className="i-icons">
                <a href="https://github.com/9719966914"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/shivam-parashar-7109a2217/"><img src={LinkedIn} alt="" /></a>
                <a href="https://www.instagram.com/shivam_parashar_pandit/"><img src={Instagram} alt="" /></a>
                
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Shivam} alt=""  className='shivamPic'/>
            {/* <img src={glassesimoji} alt="" /> */}
            <div style={{top:'-14%', left:'50%'}}>
                <FloatinmgDiv image={Crown} txt1="Web" txt2="Developer"/>
            </div>
            <div style={{top:'16.2rem' , left:'0rem'}}>
                <FloatinmgDiv image={thumbup} txt1="Competitive" txt2="Programmer"/>
            </div>
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{background:'#C1F5FF', top:'17rem', left: '-9rem' , width:'21rem', height:'11rem'}}></div>
        </div>
    </div>
  )
}
