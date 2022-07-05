// import React from 'react'
import  DataContext from "./datacontext"
import { useState } from "react"



const DataState=(props)=> {
    
    
    const note=[]
    const [notes,setNotes]=useState(note)
    const [ques,setQues]=useState([3,4])
    const [quesArray,setArray]=useState([3,4])
    // const checkbox=async()=>{
    const host="http://localhost:5000";
    
    const getNotes=async()=>{
        const response=await fetch('http://localhost:5000',{
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
    // }
    
    const updateData=async(id,email,questions)=>{
        const response=await fetch(`http://localhost:5000/api/data/updatedata/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYTgyOGE2ZmUxZjQyOTNmZGJjNTdkIn0sImlhdCI6MTY1NjM5NjY0OH0.pfqW9Ujvsk0DaRCTYElmlqH8FMtK1OQa4I9JEAUPK-c'
            },
            body: JSON.stringify({email,questions})
        })
        const json =await response.json()
        setNotes(json);
    }
    
    const getData=async()=>{
      
        const response=await fetch('http://localhost:5000/api/data/getdata',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYTgyOGE2ZmUxZjQyOTNmZGJjNTdkIn0sImlhdCI6MTY1NjM5NjY0OH0.pfqW9Ujvsk0DaRCTYElmlqH8FMtK1OQa4I9JEAUPK-c'
            },
            body: JSON.stringify()
        })
        const json =await response.json()
        // console.log(json.question);
        setQues(json);
        setArray(json.questions)
        // console.log(1);
    }
    const deleteData=async(id,email,questions)=>{
        const response=await fetch(`http://localhost:5000/api/data/deletedata/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiYTgyOGE2ZmUxZjQyOTNmZGJjNTdkIn0sImlhdCI6MTY1NjM5NjY0OH0.pfqW9Ujvsk0DaRCTYElmlqH8FMtK1OQa4I9JEAUPK-c'
            },
            body: JSON.stringify({email,questions})
        })
        const json =await response.json()
        // setNotes(json);
    }

  return (
   <DataContext.Provider value={{notes,quesArray,updateData,getData,deleteData,getNotes,ques}}>
         {props.children}
   </DataContext.Provider>
  )
}

export default DataState