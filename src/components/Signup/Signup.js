import React from 'react'
import './Signup.css'
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router';
import dataContext from '../../context/datacontext';

function Signup(props) {

  const context=useContext(dataContext);
  const {showAlert}=context;
 
    let history=useNavigate();
      const[credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""});
      
      const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }

      const handleSubmit=async(e)=>{
        e.preventDefault();
        if(credentials.password!=credentials.cpassword){
          showAlert("danger","Confirm Password & Entered Password should be same")
          console.log(credentials.cpassword);
        //  console.log(credentials.password);
        }
        else{
        const response = await fetch("http://localhost:5000/api/auth/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})

        });

        const json=await response.json();
        console.log(json);
        
        if(json.success){
          history('/login');
          showAlert("success","Signup Successfull 🥳🎉")
        }
        else{
          showAlert("danger",json.error[0].msg || json.error)
        }
      }
      }
      document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  return (
    <div className="container " id="log" style={{height:"100%"}}>
    <div className={`signupcard-${props.mode} d-flex justify-content-center aling-item-center`}>
  <div className="card-body">
  <form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange} name='name'/>
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name='password' onChange={onChange} id="exampleInputPassword1"/>
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='cpassword' id="exampleInputPassword2"  onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
  </div>
</div>
</div>
  )
}

export default Signup