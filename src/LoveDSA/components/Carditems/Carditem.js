import React from 'react'
import './Carditem.css'
import Table from '../Table/Table';
import { Link } from "react-router-dom";


// import {Link} from "react-router-dom";
function Carditem(props) {
  // console.log(props.mode);
  return (
    <div className={`card-${props.mode} my-2 mx-1`}  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className={`card-${props.mode}-title`}>{props.title}</h5>
      {/* <div className="progress my-2">
  <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div> */}
      
      <div className='d-flex justify-content-end'>
      <Link to={`/450DSA/${props.title}`}  onClick={props.loginControl} className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
  
  )
}

export default Carditem
