import React from 'react'
import './Mode.css'
import dataContext from '../../context/datacontext';
import { useContext } from 'react';


export default function Mode(props) {


   



  return (
    <div>
        <button className={`modebutton bi bi-${(props.mode==="light")?"moon-stars-fill":"brightness-high"} bg-primary`} onClick={props.changeMode}></button>
       
    </div>
  )
}
