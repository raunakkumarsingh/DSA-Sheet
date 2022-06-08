import React from 'react'
import './Navbar.css'
export default function Navbar(props) {
  return (
    <nav className={`navbar-${props.mode} navbar-expand-lg`}>
    <div className="d-flex container-fluid">
      <a className="navbar-brand" href="#">Raunak554 🤖</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
      <div className="d-flex justify-content-center" >
      <a className="navbar-brand" href="#">Streak 🔥</a>
      </div>
        <form className=" d-flex w-25">
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">#</span>
      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
      </div>
    </div>
  </nav>
  )
}
