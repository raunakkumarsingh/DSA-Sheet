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
      <h5 className={`card-${props.mode}-title`}>Days-{props.days}</h5>
      <p className={`card-${props.mode}-text`}>TotalQuestion-{props.Question} </p>
      <div className='d-flex justify-content-end'>
      <Link to={`/striver/day${props.days}`}  onClick={props.loginControl} className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
  
  )
}

export default Carditem
