import React, { useContext, useEffect,useRef,useState } from 'react'
import './tabledata.css'
import dataContext from '../../context/datacontext';
import { Link } from "react-router-dom";
import { responsiveFontSizes } from '@mui/material';

export default function Tabledata (props) {
  // console.log(dataContext)
  const [isChecked, setIsChecked] = useState(false);
const [state,setState]=useState("false")
const [color,setColor]=useState("#0E1C25")

const ref=useRef(null);

  const context=useContext(dataContext);
  const {notes,ques,quesArray,getData,updateData,deleteData}=context;
  
  // console.log(ques.questions);
  console.log(props.QID);
  console.log(notes);
  
  console.log(ques);
  console.log(quesArray);
  let check = quesArray.includes(props.QID);
  // var exists = ques.some(o => o.questions === props.QID);
  console.log(check);
  // if(check===true){
    
  //   setIsChecked(check);
    
  // }

  // useEffect(()=>{
  //   // if(localStorage.getItem('token')){
  //     getData();
      
  //     // }
  //   })
  // let i=0;
  // if(check){
  //    setState("true")
  // }

//   if(quesArray.includes(props.QID)){
//     setState("true")
//  } 



    const onClickCheckbox= (e)=>{
         e.preventDefault();
         if(quesArray.includes(props.QID))
          updateData(ques._id,ques.email,props.QID)
    }

    // if(check){
    //   setColor("green")
    // }

    const toggle= async(e)=>{
      e.preventDefault()
      if(color==="#0E1C25"){
        setColor("green")
        check=true
        setIsChecked(true)
        updateData(ques._id,ques.email,props.QID)
      }
      else if(color==="green") {
        check=false
        setColor("#0E1C25")
        setIsChecked(true)
       deleteData(ques._id,ques.email,props.QID)
     }

    }

    console.log(check)
    console.log(isChecked)


  return (
    <>
    <tr  style={{backgroundColor: check?"green":"#0E1C25"}} >
      <th scope="row"><input className="donebox" name={check} onChange={toggle}   type="checkbox"  checked={check}></input></th>
      <th >{props.QID}</th>
      <th><Link  to={props.question}>{props.question}</Link></th>
      
    </tr>
    </>
  )
}
