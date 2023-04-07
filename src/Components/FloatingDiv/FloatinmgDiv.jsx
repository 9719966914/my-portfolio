import React from 'react'
import '../FloatingDiv/FloatingDiv.css';

export default function FloatinmgDiv(props) {
  return (
     <div className="floatingdiv">
        <img src={props.image} alt="" />
        <span>{props.txt1}<br />{props.txt2}</span>
     </div>
  )
}
