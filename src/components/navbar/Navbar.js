import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import { useNavigate } from 'react-router'

export default function Navbar(props) {
   let history=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.clear()
    history("/login",{ replace: true });
    window.location.reload();
   }
  return (
    <nav className={`navbar-${props.mode} navbar-expand-lg nav `}  >
    <div className="d-flex container-fluid">
    
      {/* <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <p className={`navbar-brand-${props.mode}` } href="/"> <Link className={`nav-link-${props.mode} text-uppercase fw-bold fs-5`} aria-current="page" to="/">
           {localStorage.getItem('username')} 
            </Link> &nbsp; <Link className={`nav-link-${props.mode}`} aria-current="page" to="/">
           Home 
            </Link></p>
          </li>
        </ul>
      {/* <div className="d-flex justify-content-center" > */}
      {/* <Link className="navbar-brand" to="#">Streak 🔥</Link> */}
      {/* </div> */}
    {!localStorage.getItem('token')  ?  <form className=" d-flex">
        <ul className='d-flex justify-content-end'>
           <li>
        <Link className="btn btn-outline-success mx-2" to="/login" type="submit">Login</Link>
           </li>
          <li>
        <Link className="btn btn-outline-success mx-2" to="/signup" type="submit">Signup</Link>
          </li>
        </ul>
  </form>:<ul><li><button onClick={handleLogout} className='btn btn-outline-success my-2' to="/login" type='submit'>logout</button></li></ul>
}
      </div>
    </div>
  </nav>
  )
}
