// import React from 'react'
import  DataContext from "./datacontext"
import { useEffect, useState, } from "react"




const DataState=(props)=> {
    
    const note=[]
    
    const [notes,setNotes]=useState(note)
    const [alert,setAlert]=useState(null)
    const [ques,setQues]=useState([0])
    // const [quesArray,setArray]=useState([0])
    // const checkbox=async()=>{
        // const host="https://c2f6-3-93-173-141.ngrok-free.app";
        
        const showAlert=async (type,msg)=>{
                setAlert({
                    type:type,
                    msg:msg
                })
                setTimeout(()=>{
                    setAlert(null)
        },2200)
        }


        const getNotes=async()=>{
            const response=await fetch('https://c2f6-3-93-173-141.ngrok-free.app',{
                method:'GET',
                headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
        const json =await response.json();
        setNotes(json)
    }
    
  //     CURD IN FARAJ SHEET
    const updateData=async(id,email,faraj)=>{
        const response=await fetch(`https://c2f6-3-93-173-141.ngrok-free.app/api/datafaraj/updatedata/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,faraj})
        })
        const json =await response.json()
        setNotes(json);
    }
//get data
    const getData=async()=>{
           if(!localStorage.getItem('token')){
       
           }
           else{
        const response=await fetch('https://c2f6-3-93-173-141.ngrok-free.app/api/datafaraj/getdata',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
        const json =await response.json()
        // console.log(localStorage.getItem('token'));

        localStorage.setItem('farajProgress',json.faraj.length)
        localStorage.setItem('farajArray',JSON.stringify(json.faraj));
        localStorage.setItem('ques',JSON.stringify(json));

        // setArray(json.faraj);
        // console.log(json)
        localStorage.setItem('username',json.name);

    }
    //delete data
    }
    const deleteData=async(id,email,faraj)=>{
        const response=await fetch(`https://c2f6-3-93-173-141.ngrok-free.app/api/datafaraj/deletedata/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,faraj})
        })
        const json =await response.json()
        // console.log(json)
        // setNotes(json);
    }
  //     CURD IN 450 DSA
    const updateDataDSA=async(id,email,love,_Title,value)=>{
        const response=await fetch(`https://c2f6-3-93-173-141.ngrok-free.app/api/dataDSA/updatedata/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,love,_Title:value})
        })
        const json =await response.json()
        setNotes(json);
        // console.log(value)
    }
//get data
    const getDataDSA=async()=>{
           if(!localStorage.getItem('token')){
       
           }
           else{
        const response=await fetch('https://c2f6-3-93-173-141.ngrok-free.app/api/dataDSA/getdata',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
        const json =await response.json()
        // console.log(localStorage.getItem('token'));
        localStorage.setItem('loveArray',JSON.stringify(json.love));
        localStorage.setItem('loveProgress',json.love.length)
        localStorage.setItem('quesDSA',JSON.stringify(json));
        setQues(json);
        // setArray(json.love);
    }
    //delete data
    }
    const deleteDataDSA=async(id,email,love,value)=>{
        const response=await fetch(`https://c2f6-3-93-173-141.ngrok-free.app/api/dataDSA/deletedata/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,love})
        })
        const json =await response.json()
        // console.log(json)
        // setNotes(json);
    }
  //     CURD IN STRIVER SHEET
    const updateDataStriver=async(id,email,striver)=>{
        const response=await fetch(`https://c2f6-3-93-173-141.ngrok-free.app/api/datastriver/updatedata/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,striver})
        })
        const json =await response.json()
        // console.log(json)
        // setNotes(json);
    }
//get data
    const getDataStriver=async()=>{
           if(!localStorage.getItem('token')){
       
           }
           else{
        const response=await fetch('https://c2f6-3-93-173-141.ngrok-free.app/api/datastriver/getdata',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
        const json =await response.json()
        // console.log(localStorage.getItem('token'));
        localStorage.setItem('striverArray',JSON.stringify(json.striver));
        localStorage.setItem('striverProgress',json.striver.length)
        localStorage.setItem('quesStriver',JSON.stringify(json));
        
        setQues(json);
        // setArray(json.striver);
    }
    //delete data
    }
    const deleteDataStriver=async(id,email,striver)=>{
        const response=await fetch(`https://c2f6-3-93-173-141.ngrok-free.app/api/datastriver/deletedata/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,striver})
        })
        const json =await response.json()
        // console.log(json)
        // setNotes(json);
    }

  return (
   <DataContext.Provider value={{notes,alert,showAlert,setAlert,updateData,getData,deleteData,getNotes,ques,getDataDSA,updateDataDSA,deleteDataDSA,getDataStriver,updateDataStriver,deleteDataStriver}}>
         {props.children}
   </DataContext.Provider>
  )
}

export default DataState