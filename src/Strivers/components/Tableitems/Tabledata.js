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



const context=useContext(dataContext);
const {updateDataStriver,deleteDataStriver,showAlert}=context;
const ques=JSON.parse(localStorage.getItem("quesStriver"))
  
  // console.log(ques.questions);
  // console.log(notes);
  
  // console.log(ques);
  // console.log(quesArray);
  let check = JSON.parse(localStorage.getItem('striverArray')).includes(props.QID);
  // var exists = ques.some(o => o.questions === props.QID);
  // console.log(check);
  
  
  
  useEffect(()=>{
    setIsChecked(check);
  },[check])
 
  const updateDATA=async()=>{
    let localData=JSON.parse(localStorage.getItem("striverArray"))
    localData.push(props.QID)
    localStorage.setItem("striverArray",JSON.stringify(localData))
    localStorage.setItem("striverProgress",localStorage.getItem("striverProgress")+1);
}
const deleteDATA=async()=>{
  let localData=await JSON.parse(localStorage.getItem("striverArray"))
        const len= localStorage.getItem("striverProgress");
        
        if(localData[len-1]===props.id){
          await  localData.splice(len-1,1);
          localStorage.setItem("striverProgress",len-1);
        }
       else if(localData[len-2]===props.id){
          await  localData.splice(len-2,1);
          localStorage.setItem("striverProgress",len-1);
        }
        else{
          for(let i=0;i<len;i++){
            if(localData[i]==props.QID){
             await  localData.splice(i,1);
             localStorage.setItem("striverProgress",len-1);
              break;
            }
          
        }
      }
        
        
  localStorage.setItem("striverArray",JSON.stringify(localData))
  }

    // const onClickCheckbox= (e)=>{
    //   e.preventDefault();
    //   if(JSON.parse(localStorage.getItem('farajArray')).includes(props.QID))
      
    //   updateData(ques._id,ques.email,props.QID)
    // }
      
      const toggle= async(e)=>{
          
        if(isChecked){
             console.log(props.QID)
        await  deleteDataStriver(ques._id,ques.email,props.QID)
          showAlert("deselect","Question Deselected 👾")
         await deleteDATA()
          setIsChecked(false);
        }
        else if(!isChecked)  {
          
          setColor("green")
         await updateDataStriver(ques._id,ques.email,props.QID)
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
      <th><a target="_blank" href={props.Solution}  className={`questionname data-${props.mode}-${isChecked}`} >{props.Solution=="#" ? "":"Solution"}</a></th>
    </tr>
    </>
  )
}
// style={{backgroundColor: isChecked?"#05ef63":"black"}} 