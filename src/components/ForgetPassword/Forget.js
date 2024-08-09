import React from 'react'
import { useState,useContext,useEffect } from 'react';
import './Forget.css'
import { useNavigate } from 'react-router';
import dataContext from '../../context/datacontext';
var bcrypt = require('bcryptjs');




function Forget(props) {
  
  const context=useContext(dataContext);
  const {showAlert}=context;
  const [loader,setLoader]=useState(false);
  const [otp,setOtp]=useState(false);
  const [verify,setVerify]=useState(false);
  const [check,setCheck]=useState(false);





  let history=useNavigate();
  const[credentials,setCredentials]=useState({lemail:"",lpassword:"",lcpassword:"",lotp:""})
  
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
    
  }
  
  const  handleSubmit=async(e)=>{
    e.preventDefault();
    setLoader(true);
    const response = await fetch("https://c2f6-3-93-173-141.ngrok-free.app/api/auth/forget",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
       body: JSON.stringify({email:credentials.lemail,password:credentials.lpassword,confirmPassword:credentials.lcpassword})
      })
    
      const json= await response.json();
      setLoader(false);
    //   console.log(json)
      if(json.success){
        
        showAlert("success","Password Forget Successful 🥳🎉")
        history('/login')
      }
      else{
        showAlert("danger",json.error)   
    }
  }

   const sendOtp=async(e)=>{
    e.preventDefault();
    setLoader(true);

       if(!otp){
 const response = await fetch("https://c2f6-3-93-173-141.ngrok-free.app/api/mail/send/otp",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
       body: JSON.stringify({email:credentials.lemail})
      })
      const json =await response.json();
            // console.log(json);
            setLoader(false);
      localStorage.setItem('otp',json.Otp);
      if(json.send=="success"){
        showAlert("success","OTP successfully sent to your email") 
        setOtp(true);
      }
      else{
        showAlert("danger",json.error) 
      }
       } 
       else {
        // console.log(credentials.lotp)
        // console.log(localStorage.getItem('otp'))
        let ch=bcrypt.compareSync(credentials.lotp, localStorage.getItem('otp'));
        // console.log(ch); 

       setCheck(ch);
       if(ch){
        setVerify(true);
       }
       else{
        showAlert("danger","Wrong Otp Please try again") 
       }
       setLoader(false);
        
       }  
       setLoader(false); 

   }


  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  return (
    
    <div className="container " id="log" style={{height:"100%"}}>
    <div className={`logincard-${props.mode} d-flex justify-content-center aling-item-center`}>
  <div className="card-body">
  <form onSubmit={handleSubmit}>
 {verify?"": <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className={`form-control`} name="lemail" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
}
 { !otp || verify?"":<div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">Enter otp</label>
    <input type="text" className={`form-control`} name="lotp" onChange={onChange} id="exampleInput" aria-describedby="emailHelp"/>
  </div>
}
 { !verify?"": <div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="lpassword" onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
    <input type="password" className="form-control" name="lcpassword" onChange={onChange} id="exampleInputPassword2"/>
  </div>
  </div>
  }
  
 {!verify
 ?<button type="button" className="btn btn-primary" onClick={sendOtp} >{!otp?"Send":"Submit"} &nbsp;
 <span className="spinner-border spinner-border-sm my-1" role="status" aria-hidden="true" style={{display:loader?"flex":"none"}}></span></button>
 : <button type="submit" className="btn btn-primary" >Update &nbsp;
  <span className="spinner-border spinner-border-sm my-1" role="status" aria-hidden="true" style={{display:loader?"flex":"none"}}></span></button>}
</form>
  </div>
 </div>
 </div>
 
  )
}

export default Forget