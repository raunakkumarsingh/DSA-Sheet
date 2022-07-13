import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'

function Home(props) {
    document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  return (
 <div className='container d-flex justify-content-around align-item-center' >
  <div className={`card-${props.mode} my-2 mx-1`}  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className={`card-${props.mode}-title`}>Faraj Sheet</h5>
      <div className='d-flex justify-content-end'>
      <Link to="/faraj"  className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
  <div className={`card-${props.mode} my-2 mx-1`}  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className={`card-${props.mode}-title`}>450 DSA</h5>
      <div className='d-flex justify-content-end'>
      <Link to="/450DSA"  className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
  <div className={`card-${props.mode} my-2 mx-1`}  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className={`card-${props.mode}-title`}>Striver</h5>
      <div className='d-flex justify-content-end'>
      <Link to="/striver"  className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
 
 </div>
  )
}

export default Home