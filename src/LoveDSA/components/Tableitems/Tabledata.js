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
const ques=JSON.parse(localStorage.getItem("ques"))

const ref=useRef(null);

  const context=useContext(dataContext);
  const {updateDataDSA,deleteDataDSA,showAlert}=context;
  
  // console.log(ques.questions);
  // console.log(notes);
  
  // console.log(ques);
  // console.log(quesArray);
  let check = JSON.parse(localStorage.getItem('loveArray')).includes(props.QID);
  // var exists = ques.some(o => o.questions === props.QID);
  // console.log(check);
  // let value=ques.props.Title;
  
  
  useEffect(()=>{
    setIsChecked(check);
  },[check])
 
  const updateDATA=async()=>{
    let localData=JSON.parse(localStorage.getItem("loveArray"))
    localData.push(props.QID)
    localStorage.setItem("loveArray",JSON.stringify(localData))
}
const deleteDATA=async()=>{
let localData=await JSON.parse(localStorage.getItem("loveArray"))
      const len= localStorage.getItem("loveProgress");
      // if(len-1!==0){
        for(let i=0;i<len;i++){
          if(localData[i]==props.QID){
            delete localData[i];
            break;
          }
        // }
      }
      
localStorage.setItem("loveArray",JSON.stringify(localData))
}

    // const onClickCheckbox= (e)=>{
    //   e.preventDefault();
    //   if(JSON.parse(localStorage.getItem('farajArray')).includes(props.QID))
      
    //   updateData(ques._id,ques.email,props.QID)
    // }
      
      const toggle= async(e)=>{
       
        if(isChecked){
             console.log(props.QID)
        await  deleteDataDSA(ques._id,ques.email,props.QID)
          showAlert("deselect","Question Deselected 👾")
         await deleteDATA()
          setIsChecked(false);
        }
        else if(!isChecked)  {
          
          setColor("green")
         await updateDataDSA(ques._id,ques.email,props.QID)
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