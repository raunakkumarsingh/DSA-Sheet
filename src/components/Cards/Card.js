import { background } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carditem from '../Carditems/Carditem'
import Table from '../Table/Table';


import './Card.css' 

let data=[{
  "source":{
    "id": 1
  },
  "Title": "Array",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "String",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Math",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Dynamic Programing",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "DFS",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "BackTracking",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Hash Table",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},

{
  "source":{
    "id": 1
  },
  "Title": "Binary Search",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "BFS",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Two Pointer",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Stack",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Design",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Graph",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Bit Manipulation",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Linklist",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Heap",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "String",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Tree",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Trie",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Segment Tree",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
}
]; 


const onClick=()=>{
  {    
 
  }
};

// let parsedData=await data.json();
function Card(props) {
  const [state,setState]=useState("Array");

  const onClick=()=>{
       
        //  setState();
    
         console.log(state);
  };
  console.log(props.mode);
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  return (
    <Router>

    
     
    <div className='container my-3 d-flex justify-content-between'>
      
    <div className='row'>
        {  data.map((element)=>{
          return<div className='col-lg-4 col-md-6 col sm-12' key={element.Title}>
            <Routes>
         <Route exact path='/Faraj-Sheet' element={<Carditem title={element.Title} mode={props.mode} TotalQuestion={element.Totalquestion} EasyQuestion={element.EasyQuestion} MediumQuestion={element.MediumQuestion} hardQuestion={element.hardQuestion}/>}/>
            </Routes>

        
      </div>
        })
      }
        
    </div>
       
    </div>
    <Routes>
       <Route exact path={`/${state}`} element={<Table mode={props.mode} onClick={onclick} title={state} /> }/>
       </Routes>
      </Router>
  )
}

export default Card
