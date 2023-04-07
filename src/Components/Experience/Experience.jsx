import React from 'react'
import './Experience.css'
import {FaAward, FaBomb,} from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'


export default function Experience() {
  return (
     <div className="experience">
        <div className="achievement">
            <div className="circle">
                130+
            </div>
            <span><span><FaAward className='silver_bedge'/></span>Problem Solved</span>
            <span>CodeChef</span>

        </div>

        <div className="achievement">
            <div className="circle">5+</div>
            <span><span><FaBomb/> </span> Completed</span> 
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">
                90+
            </div>
            <span><span className='FaCode'><FaCode/></span> Problem Solved</span>
            <span>LeetCode</span>
        </div>
     </div>
  )
}
