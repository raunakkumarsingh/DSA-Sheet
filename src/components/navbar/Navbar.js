import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar(props) {
  return (
    <nav className={`navbar-${props.mode} navbar-expand-lg`}>
    <div className="d-flex container-fluid">
      <Link className="navbar-brand" to="/">Raunak554 🤖</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Link</Link>
          </li>
        </ul>
      <div className="d-flex justify-content-center" >
      <Link className="navbar-brand" to="#">Streak 🔥</Link>
      </div>
        <form className=" d-flex">
        
        <Link className="btn btn-outline-success mx-2" to="/login" type="submit">Login</Link>
        <Link className="btn btn-outline-success mx-2" to="/signup" type="submit">Signup</Link>

  </form>
      </div>
    </div>
  </nav>
  )
}
