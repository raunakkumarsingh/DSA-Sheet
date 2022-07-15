// import React from 'react'
import  DataContext from "./datacontext"
import { useEffect, useState, } from "react"




const DataState=(props)=> {
    
    const note=[]
    
    const [notes,setNotes]=useState(note)
    const [alert,setAlert]=useState(null)
    const [ques,setQues]=useState([0])
    const [quesArray,setArray]=useState([0])
    const [username,setName] = useState(" ")
    // const checkbox=async()=>{
        // const host="https://rocky-island-88255.herokuapp.com";
        
        const showAlert=async (type,msg)=>{
                setAlert({
                    type:type,
                    msg:msg
                })
                setTimeout(()=>{
                    setAlert(null)
        },3200)
        }


        const getNotes=async()=>{
            const response=await fetch('https://rocky-island-88255.herokuapp.com',{
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
        const response=await fetch(`https://rocky-island-88255.herokuapp.com/api/datafaraj/updatedata/${id}`,{
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
        const response=await fetch('https://rocky-island-88255.herokuapp.com/api/datafaraj/getdata',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
        const json =await response.json()
        console.log(localStorage.getItem('token'));
        setQues(json);
        setArray(json.faraj);
        setName(json.name);
    }
    //delete data
    }
    const deleteData=async(id,email,questions)=>{
        const response=await fetch(`https://rocky-island-88255.herokuapp.com/api/datafaraj/deletedata/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,questions})
        })
        // const json =await response.json()
        // setNotes(json);
    }
  //     CURD IN 450 DSA
    const updateDataDSA=async(id,email,love,_Title,value)=>{
        const response=await fetch(`https://rocky-island-88255.herokuapp.com/api/dataDSA/updatedata/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,love,_Title:value})
        })
        const json =await response.json()
        setNotes(json);
        console.log(value)
    }
//get data
    const getDataDSA=async()=>{
           if(!localStorage.getItem('token')){
       
           }
           else{
        const response=await fetch('https://rocky-island-88255.herokuapp.com/api/dataDSA/getdata',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
        const json =await response.json()
        console.log(localStorage.getItem('token'));
        setQues(json);
        setArray(json.love);
        setName(json.name);
    }
    //delete data
    }
    const deleteDataDSA=async(id,email,love,value)=>{
        const response=await fetch(`https://rocky-island-88255.herokuapp.com/api/dataDSA/deletedata/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,love})
        })
        // const json =await response.json()
        // setNotes(json);
    }
  //     CURD IN STRIVER SHEET
    const updateDataStriver=async(id,email,striver)=>{
        const response=await fetch(`https://rocky-island-88255.herokuapp.com/api/datastriver/updatedata/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,striver})
        })
        const json =await response.json()
        setNotes(json);
    }
//get data
    const getDataStriver=async()=>{
           if(!localStorage.getItem('token')){
       
           }
           else{
        const response=await fetch('https://rocky-island-88255.herokuapp.com/api/datastriver/getdata',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
        const json =await response.json()
        console.log(localStorage.getItem('token'));
        setQues(json);
        setArray(json.striver);
        setName(json.name);
    }
    //delete data
    }
    const deleteDataStriver=async(id,email,striver)=>{
        const response=await fetch(`https://rocky-island-88255.herokuapp.com/api/datastriver/deletedata/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({email,striver})
        })
        // const json =await response.json()
        // setNotes(json);
    }

  return (
   <DataContext.Provider value={{notes,quesArray,alert,showAlert,updateData,getData,deleteData,getNotes,ques,username,setName,getDataDSA,updateDataDSA,deleteDataDSA,getDataStriver,updateDataStriver,deleteDataStriver}}>
         {props.children}
   </DataContext.Provider>
  )
}

export default DataState