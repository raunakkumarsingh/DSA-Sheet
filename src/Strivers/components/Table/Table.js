import React from 'react'
import Tableitem from '../Tableitems/Tableitem';
import './Table.css'
import data from  '../data.json'
import { useContext,useEffect, useState } from "react";
import dataContext from '../../../context/datacontext';
import { useNavigate } from 'react-router';






  
export default  function Table(props) {
  let history=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      history('/login')
    }

  },[])
  const context=useContext(dataContext);
  const {ques,getDataStriver,showAlert}=context;

  // useEffect(()=>{
  //     getDataStriver();
  //   },[localStorage.getItem('token')]);
    // console.log(ques);

// Remove all warninng from the Console 
    console.log = console.warn = console.error = () => {};

  const [searchTerm,setSearchTerm] = useState('');
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  // console.log(props.title);
  // console.log(data);
  // let parseddata = data.filter((auto)=> auto.Day.includes(props.title));
  // console.log(parseddata);
  // console.log(props.title);
  // let lparsed=parseddata;
  

  // const SearchBar = (props) => {
    // const handleChange = (e) => {
    //   // props.onSearch(e.target.value);
    //   lparsed =lparsed.filter((auto)=>auto.Title.includes(props.title));
    //   lparsed= data.filter((val)=>{
    //     if(searchTerm === ""){
    //       return val
    //     }
    //     else if(val.Url.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
    //       return val;
    //     }
    //   });

    // };
  // }
  
  // const search=(searchTerm)=>{
    // data.filter((auto)=>auto.Title.includes(props.title));
    // lparsed= data.filter((val)=>{
    //   if(searchTerm == ""){
    //     return val
    //   }
    //   else if(val.Url.includes(searchTerm)){
    //     return val;
    //   }
    // });
  
  // console.log(parseddata[0].EasyQuestion);
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