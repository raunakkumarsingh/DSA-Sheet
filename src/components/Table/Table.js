import React from 'react'
import Tableitem from '../Tableitems/Tableitem';
import './Table.css'




export default function Table(props) {
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  console.log(props.title);
  return (
    <>
     <h1 className={`tableheading-${props.mode} `}>{props.title}</h1>
    <div>
       <Tableitem mode={props.mode} type="Easy"  title={props.title}/>
       <Tableitem mode={props.mode} type="Medium" title={props.title} />
       <Tableitem mode={props.mode} type="Hard" title={props.title} />
     </div>
      
    
    </>
  )
}