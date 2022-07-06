import React, { useContext, useEffect,useRef,useState } from 'react'
import './tabledata.css'
import dataContext from '../../context/datacontext';
import { Link } from "react-router-dom";
// import { responsiveFontSizes } from '@mui/material';

export default function Tabledata (props) {
  // console.log(dataContext)
  const [isChecked, setIsChecked] = useState(false);
const [state,setState]=useState("false")
const [color,setColor]=useState("#0E1C25")

const ref=useRef(null);

  const context=useContext(dataContext);
  const {ques,quesArray,updateData,deleteData}=context;
  
  // console.log(ques.questions);
  // console.log(notes);
  
  // console.log(ques);
  // console.log(quesArray);
  let check = quesArray.includes(props.QID);
  // var exists = ques.some(o => o.questions === props.QID);
  // console.log(check);
  
  
  
  useEffect(()=>{
    setIsChecked(check);
  },[check])
  
  
  
    
  
  
  
  
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
             
              if(isChecked){
                setColor("#0E1C25")
                
                // check=false;
                deleteData(ques._id,ques.email,props.QID)
                setIsChecked(false);
              }
              else if(!isChecked)  {
                
                setColor("green")
                // check=true;
                updateData(ques._id,ques.email,props.QID)
                setIsChecked(true);
      }
      
    }
    // if(isChecked || check){
    //   setIsChecked(false);
    // }
    
    //  const tog=()=>{
    //          if(color=="#0E1C25"){
    //           setIsChecked(true);
    //          }
    //          else{
    //           setIsChecked(false);
    //          }
    //  }
    // console.log(check)
    // console.log(isChecked)
    // console.log(props.QID);
    
    
    return (
      <>
    <tr  style={{backgroundColor: isChecked?"green":"#0E1C25"}} >
      <th scope="row"><input className="donebox" name={props.QID} onChange={toggle}    type="checkbox"  checked={isChecked}></input></th>
      <th >{props.QID}</th>
      <th><Link  to={props.question}>{props.question}</Link></th>
      
    </tr>
    </>
  )
}
