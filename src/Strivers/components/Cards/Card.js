import React from 'react';
import Carditem from '../Carditems/Carditem'
import data from '../data.json';
import { useNavigate } from 'react-router';
import './Card.css' 
import DataState from '../../../context/DataState';







// let parsedData=await data.json();
function Card(props) {

  console.log("hello")
  
  


  let history=useNavigate();


 const loginControl=async(e)=>{
  // e.preventDefault()

  if(!localStorage.getItem('token')){
        history('/login')

  }
 }
 
  // console.log(props.mode);
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  return (

    <div className='container my-3 d-flex justify-content-between'>
      
    <div className='row'>
        {  data.map((element)=>{
          return<div className='col-lg-4 col-md-6 col sm-12 d-flex justify-content-center' key={element.Day}>
          <DataState>
         <Carditem days={element.Day} mode={props.mode} loginControl={loginControl}  Question={element.questions} />
          </DataState>
        

        
      </div>
        })
      }
        
    </div>
       
    </div>

    
  
  )
}

export default Card
