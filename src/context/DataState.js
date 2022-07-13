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
    // const host="https://floating-ocean-72177.herokuapp.com";
    
    const getNotes=async()=>{
        const response=await fetch('https://floating-ocean-72177.herokuapp.com',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZDllNmQwOWU3ZWYzMGM0ZjY5Y2RkIn0sImlhdCI6MTY1NzY4NjUyN30.EdZFRC0Oe7wzRXNIZ5FbLWViAebmsnmULwP7No5p9Cw"
            },
            body: JSON.stringify()
        })
        const json =await response.json();
        setNotes(json)
    }
    
    const showAlert=async (type,msg)=>{
            setAlert({
                type:type,
                msg:msg
            })
            setTimeout(()=>{
                setAlert(null)
    },3200)
    }
    const updateData=async(id,email,questions)=>{
        const response=await fetch(`https://floating-ocean-72177.herokuapp.com/api/data/updatedata/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZDllNmQwOWU3ZWYzMGM0ZjY5Y2RkIn0sImlhdCI6MTY1NzY4NjUyN30.EdZFRC0Oe7wzRXNIZ5FbLWViAebmsnmULwP7No5p9Cw"
            },
            body: JSON.stringify({email,questions})
        })
        const json =await response.json()
        setNotes(json);
    }

    const getData=async()=>{
           if(!"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZDllNmQwOWU3ZWYzMGM0ZjY5Y2RkIn0sImlhdCI6MTY1NzY4NjUyN30.EdZFRC0Oe7wzRXNIZ5FbLWViAebmsnmULwP7No5p9Cw"){
       
           }
           else{
        const response=await fetch('https://floating-ocean-72177.herokuapp.com/api/data/getdata',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZDllNmQwOWU3ZWYzMGM0ZjY5Y2RkIn0sImlhdCI6MTY1NzY4NjUyN30.EdZFRC0Oe7wzRXNIZ5FbLWViAebmsnmULwP7No5p9Cw"
            },
            body: JSON.stringify()
        })
        const json =await response.json()
        console.log("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZDllNmQwOWU3ZWYzMGM0ZjY5Y2RkIn0sImlhdCI6MTY1NzY4NjUyN30.EdZFRC0Oe7wzRXNIZ5FbLWViAebmsnmULwP7No5p9Cw");
        setQues(json);
        setArray(json.questions);
        setName(json.name);
    }
   
    // https://floating-ocean-72177.herokuapp.com/
    
        // console.log(1);
    }
    const deleteData=async(id,email,questions)=>{
        const response=await fetch(`https://floating-ocean-72177.herokuapp.com/api/data/deletedata/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZDllNmQwOWU3ZWYzMGM0ZjY5Y2RkIn0sImlhdCI6MTY1NzY4NjUyN30.EdZFRC0Oe7wzRXNIZ5FbLWViAebmsnmULwP7No5p9Cw"
            },
            body: JSON.stringify({email,questions})
        })
        // const json =await response.json()
        // setNotes(json);
    }

  return (
   <DataContext.Provider value={{notes,quesArray,alert,showAlert,updateData,getData,deleteData,getNotes,ques,username,setName}}>
         {props.children}
   </DataContext.Provider>
  )
}

export default DataState