import React from 'react'
import Tableitem from '../Tableitems/Tableitem';
import './Table.css'
import Searchbar from '../Tableitems/Searchbar';
import data from  '../data.json'
import { useContext,useEffect, useState } from "react";
import dataContext from '../../context/datacontext';
import { useNavigate } from 'react-router';





  
export default function Table(props) {
  const context=useContext(dataContext);
  const {ques,getData}=context;

  useEffect(()=>{
    // if(localStorage.getItem('token')){
      getData();
      
      // }
    },[])
    console.log(ques);


  let history=useNavigate();
  if(!localStorage.getItem('token')){
    history('/login')
  }

  const [searchTerm,setSearchTerm] = useState('');
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  console.log(props.title);
  let parseddata =data.filter((auto)=> auto.Title.includes(props.title));
  console.log(parseddata);
  let lparsed=parseddata;

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
     <h1 className={`tableheading-${props.mode} `}>{props.title}</h1>
     <div className='d-flex justify-content-center'>  <div className="input-group input-group-lg d-flex justify-content-center" >
    <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
    <input type="text" className="form-control" onChange={e=>setSearchTerm(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  </div></div>
     
     {lparsed.map((element) => {
   
       if(element.EasyQuestion && element.MediumQuestion && element.hardQuestion)
       return <><Tableitem searc={searchTerm} mode={props.mode} type="Easy"  title={props.title}/>
        <Tableitem searc={searchTerm} mode={props.mode} type="Medium" title={props.title} />
        <Tableitem searc={searchTerm} mode={props.mode} type="Hard" title={props.title} />
        </>
      else if(!element.EasyQuestion && element.MediumQuestion && element.hardQuestion)
       return <>
        <Tableitem mode={props.mode} type="Medium" title={props.title} />
        <Tableitem mode={props.mode} type="Hard" title={props.title} />
        </>
      else if(element.EasyQuestion && !element.MediumQuestion && element.hardQuestion)
       return <><Tableitem mode={props.mode} type="Easy"  title={props.title}/>
        <Tableitem mode={props.mode} type="Hard" title={props.title} />
        </>
      else if(element.EasyQuestion && element.MediumQuestion && !element.hardQuestion)
       return <><Tableitem mode={props.mode} type="Easy"  title={props.title}/>
        <Tableitem mode={props.mode} type="Medium" title={props.title} />
        </>
      else if(element.EasyQuestion && !element.MediumQuestion && !element.hardQuestion)
       return <><Tableitem mode={props.mode} type="Easy"  title={props.title}/>
        </>
      else if(!element.EasyQuestion && element.MediumQuestion && !element.hardQuestion)
       return <>
        <Tableitem mode={props.mode} type="Medium" title={props.title} />
        </>
      else if(!element.EasyQuestion && !element.MediumQuestion && element.hardQuestion)
       return <>
        <Tableitem mode={props.mode} type="Hard" title={props.title} />
        </>
      else if(!element.EasyQuestion && !element.MediumQuestion && !element.hardQuestion)
       return <>
        </>
       
          })}
    
    </>
  )
}