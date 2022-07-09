import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router'
import dataContext from '../../context/datacontext';
export default function Navbar(props) {
   let history=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.clear()
    history("/login",{ replace: true });
    window.location.reload();
   }
   const context=useContext(dataContext);
   const {username,getData}=context;
   
  //  
  return (

    <nav className={`navbar-${props.mode} navbar-expand-lg`}>
    <div className="d-flex container-fluid">
      <p className={`navbar-brand-${props.mode}`}>{username}🤖</p>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link-${props.mode}`} aria-current="page" to="/">Home</Link>
          </li>
        </ul>
      <div className="d-flex justify-content-center" >
      <Link className="navbar-brand" to="#">Streak 🔥</Link>
      </div>
    {!localStorage.getItem('token')  ?  <form className=" d-flex">
        
        <Link className="btn btn-outline-success mx-2" to="/login" type="submit">Login</Link>
        <Link className="btn btn-outline-success mx-2" to="/signup" type="submit">Signup</Link>
  

  </form>:<button onClick={handleLogout} className='btn btn-outline-success' to="/login" type='submit'>logout</button>
}
      </div>
    </div>
  </nav>
  )
}
