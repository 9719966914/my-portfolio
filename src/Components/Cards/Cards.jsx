import React from 'react'
import './Cards.css'
export default function Cards(props) {
  return (
    <div className="card">
        <img src={props.emoji} alt="" />
        <span>{props.heading}</span>
        <span>{props.detail}</span>
        <button className="c-button">Learn more</button>
    </div>
  )
}
