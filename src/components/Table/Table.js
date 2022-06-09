import React from 'react'
import Tableitem from '../Tableitems/Tableitem';
import './Table.css'




export default function Table(props) {
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  return (
    <>
     <h1 className={`tableheading-${props.mode} `}>{props.title}</h1>
    <div>
       <Tableitem mode={props.mode} type="Easy" />
       <Tableitem mode={props.mode} type="Medium" />
       <Tableitem mode={props.mode} type="Hard"/>
     </div>
      
    
    </>
  )
}