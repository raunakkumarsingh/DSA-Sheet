import React, { useContext, useEffect,useRef,useState } from 'react'
import './tabledata.css'
import dataContext from '../../../context/datacontext';
import { Link } from "react-router-dom";
// import { responsiveFontSizes } from '@mui/material';

export default function Tabledata (props) {
  // console.log(dataContext)
  const [isChecked, setIsChecked] = useState(false);


// const ref=useRef(null);

  const context=useContext(dataContext);
  const {updateData,deleteData,showAlert}=context;
  const ques=JSON.parse(localStorage.getItem("ques"))
 
  let check = JSON.parse(localStorage.getItem('farajArray')).includes(props.QID);
 
  useEffect(()=>{
    setIsChecked(check);
  },[check])


  const updateDATA=async()=>{
    let localData=await JSON.parse(localStorage.getItem("farajArray"))
    const len= localData.length;
          if(localData[len-1]!==props.QID){
            localData.push(props.QID)
          }
        localStorage.setItem("farajArray",JSON.stringify(localData))
        localStorage.setItem("farajProgress",len+1);
  }

  
  const deleteDATA=async()=>{
    let localData=await JSON.parse(localStorage.getItem("farajArray"))
          const len= localData.length;
          if(localData[len-1]===props.id){
            await  localData.splice(len-1,1);
            localStorage.setItem("farajProgress",len-1);
          }
         else if(localData[len-2]===props.id){
            await  localData.splice(len-2,1);
            localStorage.setItem("farajProgress",len-1);
          }
          else{
            for(let i=0;i<len;i++){
              if(localData[i]==props.QID){
               await  localData.splice(i,1);
               localStorage.setItem("farajProgress",len-1);
                break;
              }
            
          }
        }
          
    localStorage.setItem("farajArray",JSON.stringify(localData))
    }
  
            
            const toggle= async(e)=>{
              if(isChecked){
                   console.log(props.QID)
              await  deleteData(ques._id,ques.email,props.QID)
                showAlert("deselect","Question Deselected 👾")
               await deleteDATA()
                setIsChecked(false);
              }
              else if(!isChecked)  {
               await updateData(ques._id,ques.email,props.QID)
              await updateDATA()
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