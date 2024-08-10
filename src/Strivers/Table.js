import React from 'react'
import Tableitem from './Tableitem';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
  
export default  function Table(props) {
  let history=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      history('/login')
    }

  },[])

    console.log = console.warn = console.error = () => {};

  const [searchTerm,setSearchTerm] = useState('');
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
 
  return (
    <>
     <h1 className={`tableheading-${props.mode} Mt-5`}>Day-{props.title}</h1>
     <div className='d-flex  justify-content-center' >  <div className=" input-group  d-flex justify-content-center"  >
    <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
    <input   type="text" className="input form-control" onChange={e=>setSearchTerm(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  </div></div>
  <div >
 <Tableitem searc={searchTerm} mode={props.mode}    title={props.title}  />
    </div>
    </>
  )
}