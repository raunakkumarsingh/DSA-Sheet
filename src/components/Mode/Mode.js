import React from 'react'
import './Mode.css'


export default function Mode(props) {
  return (
    <div>
        <button className={`bi btn bi-${(props.mode==="light")?"moon-stars-fill":"brightness-high"} bg-primary`} onClick={props.changeMode}>{props.mode==="dark"?"Dark":"Light"}</button>
       
    </div>
  )
}
