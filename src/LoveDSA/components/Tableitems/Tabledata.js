import React, { useContext, useEffect,useRef,useState } from 'react'
import './tabledata.css'
import dataContext from '../../../context/datacontext';
import { Link } from "react-router-dom";
// import { responsiveFontSizes } from '@mui/material';

export default function Tabledata (props) {
  // console.log(dataContext)
  const [isChecked, setIsChecked] = useState(false);

  
  const ref=useRef(null);
  
  
  
  const context=useContext(dataContext);
  const {updateDataDSA,deleteDataDSA,showAlert}=context;
  const ques=JSON.parse(localStorage.getItem("quesDSA"))
  const [loader,setLoader]=useState(false);
  let check = JSON.parse(localStorage.getItem('loveArray')).includes(props.QID);

  
  
  useEffect(()=>{
    setIsChecked(check);
  },[check])
 
  const updateDATA=async()=>{
    
    let localData=JSON.parse(localStorage.getItem("loveArray"))
    localData.push(props.QID)
    localStorage.setItem("loveArray",JSON.stringify(localData))
    localStorage.setItem("loveProgress",localStorage.getItem("loveProgress")+1);
}
const deleteDATA=async()=>{
let localData=await JSON.parse(localStorage.getItem("loveArray"))
      const len= localStorage.getItem("loveProgress");
      if(localData[len-1]===props.id){
        await  localData.splice(len-1,1);
        localStorage.setItem("loveProgress",len-1);
      }
     else if(localData[len-2]===props.id){
        await  localData.splice(len-2,1);
        localStorage.setItem("loveProgress",len-1);
      }
      else{
        for(let i=0;i<len;i++){
          if(localData[i]==props.QID){
           await  localData.splice(i,1);
           localStorage.setItem("loveProgress",len-1);
            break;
          }
        
      }
    }
localStorage.setItem("loveArray",JSON.stringify(localData))

}
      const toggle= async(e)=>{
       
        if(isChecked){
         setLoader(true)
        await  deleteDataDSA(ques._id,ques.email,props.QID)
        await deleteDATA()
        setLoader(false);
        showAlert("deselect","Question Deselected 👾")
          setIsChecked(false);
        }
        else if(!isChecked)  {
          setLoader(true)
         await updateDataDSA(ques._id,ques.email,props.QID)
        await updateDATA()
        setLoader(false);
          showAlert("success","Question Completed Succesfully 🎉🎊")
          setIsChecked(true);
}

}

    return (
      <>
    <tr className={`table-${props.mode}-${isChecked}`}  >
      <th scope="row">{loader?<span class="spinner-border spinner-border-sm my-1 text-primary" role="status" aria-hidden="true"></span>:<input className="donebox" name={props.QID} onChange={toggle}    type="checkbox"  checked={isChecked}></input>
      }</th>
      <th  className={`questionname data-${props.mode}-${isChecked}`} >{props.QID}</th>
      <th><a target="_blank" href={props.Url}  className={`questionname data-${props.mode}-${isChecked}`} >{props.question}</a></th>
    </tr>
    </>
  )
}
// style={{backgroundColor: isChecked?"#05ef63":"black"}} 