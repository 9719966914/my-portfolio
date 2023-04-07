import React from 'react'
import './Services.css' 
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from '../Cards/Cards';
import Resume from '../../img/ShivamParashar_CSE_GLAU.docx'
import { themeContext } from "../../Context";
import { useContext } from "react";


export default function Services() { 
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services">
        <div className="awesome">
             <span style={{color:darkMode? 'white':''}}>My Awesome </span>
             <span>Services</span>     
             <span>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Velit, deleniti!</span>
            <a href={Resume} download><button className="button s-button">Download resume</button></a>
            <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <div style={{left:'28rem',top:'1rem'}}>
              <Cards emoji = {HeartEmoji}  heading={'MERN stack developer'}  detail ={"MongoDB, ExpressJs, ReactJs, NodeJs"} />
            </div>

            <div style={{left:'8rem', top:"10rem"}}>
              <Cards emoji = {Glasses}  heading={'java Programmer'}  detail ={"Java, Sql,  "} />
            </div>

            <div style={{left:'24rem', top:"18rem"}}>
              <Cards emoji = {Humble}  heading={'Other Skills'}  detail ={"lorem hello world shivam parshar best"} />
            </div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  ) 
}
