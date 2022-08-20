import React from 'react';
import Carditem from '../Carditems/Carditem'
import data from '../data.json';
import { useNavigate } from 'react-router';
import './Card.css' 
import DataState from '../../../context/DataState';
import Progressbar from '../Progress/Progressbar';









// let parsedData=await data.json();
function Card(props) {
  
  


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
    <>
    <Progressbar mode={props.mode}/>
    <div className='container my-3 d-flex justify-content-between'>
      
    <div className='row'>
        {  data.map((element)=>{
          return<div className='col-lg-4 col-md-6 col sm-12 d-flex justify-content-center' key={element.Title}>
          <DataState>
         <Carditem title={element.Title} mode={props.mode} loginControl={loginControl}  TotalQuestion={element.Totalquestion} EasyQuestion={element.EasyQuestion} MediumQuestion={element.MediumQuestion} hardQuestion={element.hardQuestion}/>
          </DataState>
        

        
      </div>
        })
      }
        
    </div>
       
    </div>

    
    </>
  )
}

export default Card
