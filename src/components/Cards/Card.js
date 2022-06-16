import React from 'react';
import Carditem from '../Carditems/Carditem'
import data from '../data.json';


import './Card.css' 






// let parsedData=await data.json();
function Card(props) {
 
  console.log(props.mode);
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  return (


    
     
    <div className='container my-3 d-flex justify-content-between'>
      
    <div className='row'>
        {  data.map((element)=>{
          return<div className='col-lg-4 col-md-6 col sm-12' key={element.Title}>
          
         <Carditem title={element.Title} mode={props.mode} Dtitle={props.changeState} TotalQuestion={element.Totalquestion} EasyQuestion={element.EasyQuestion} MediumQuestion={element.MediumQuestion} hardQuestion={element.hardQuestion}/>
        

        
      </div>
        })
      }
        
    </div>
       
    </div>

    
  
  )
}

export default Card
