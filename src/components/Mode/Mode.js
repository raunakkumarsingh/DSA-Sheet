import React from 'react'
import './Mode.css'


export default function Mode(props) {

    


  return (
    
    <div>
        <button class={`bi btn bi-${(props.mode=="light")?"moon-stars-fill":"brightness-high"} bg-primary`} onClick={props.changeMode}>{props.mode==="dark"?"Dark":"Light"}</button>
        {/* <i class={`bi bi-${(props.mode=="light")?"moon-stars-fill":"bi-brightness-high"} bg-primary`} >light</i> */}
        
        
    </div>
  )
}
