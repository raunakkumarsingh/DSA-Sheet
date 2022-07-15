import React, { useContext, useEffect,useRef,useState } from 'react'
import './tabledata.css'
import dataContext from '../../../context/datacontext';
import { Link } from "react-router-dom";
// import { responsiveFontSizes } from '@mui/material';

export default function Tabledata (props) {
  // console.log(dataContext)
  const [isChecked, setIsChecked] = useState(false);
const [state,setState]=useState("false")
const [color,setColor]=useState("#0E1C25")

const ref=useRef(null);

  const context=useContext(dataContext);
  const {ques,quesArray,updateDataDSA,deleteDataDSA,showAlert}=context;
  
  // console.log(ques.questions);
  // console.log(notes);
  
  // console.log(ques);
  // console.log(quesArray);
  let check = quesArray.includes(props.QID);
  // var exists = ques.some(o => o.questions === props.QID);
  // console.log(check);
  // let value=ques.props.Title;
  
  
  useEffect(()=>{
    setIsChecked(check);
  },[check])
 
          const onClickCheckbox= (e)=>{
            e.preventDefault();
            if(quesArray.includes(props.QID))
              //  value=value+1;
            updateDataDSA(ques._id,ques.email,props.QID)
          }
            
            const toggle= async(e)=>{
             
              if(isChecked){
                if(props.mode == "dark")
                setColor("blue")

                else{
                  setColor("red")
                }
                    // value=value-1;
                deleteDataDSA(ques._id,ques.email,props.QID)
                showAlert("deselect","Question Deselected 👾")
                setIsChecked(false);
              }
              else if(!isChecked)  {
                
                setColor("green")
                // value=value+1;
                updateDataDSA(ques._id,ques.email,props.QID)
                showAlert("success","Question Completed Succesfully 🎉🎊")
                setIsChecked(true);
      }
      
    }
    // console.log(props.mode)
    // console.log(isChecked)
  
    return (
      <>
    <tr className={`table-${props.mode}-${isChecked}`}  >
      <th scope="row"><input className="donebox" name={props.QID} onChange={toggle}    type="checkbox"  checked={isChecked}></input></th>
      <th  className={`questionname data-${props.mode}-${isChecked}`} >{props.QID}</th>
      <th><a target="_blank" href={props.Url}  className={`questionname data-${props.mode}-${isChecked}`} >{props.question}</a></th>
    </tr>
    </>
  )
}
// style={{backgroundColor: isChecked?"#05ef63":"black"}} 