import React from 'react'
import './Mode.css'

export default function Mode(props) {
  return (
    <div>
        <button className={`modebutton bi bi-${(props.mode==="light")?"moon-stars-fill":"brightness-high"} bg-primary`} onClick={props.changeMode}></button>
       
    </div>
  )
}
