import React from 'react'
import './Carditem.css'

function Carditem(props) {
  return (
    <div className="card my-2 mx-1"  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Total Question - {props.TotalQuestion} </p>
      <p className="card-text">Easy Question - {props.EasyQuestion} </p>
      <p className="card-text">Medium Question - {props.MediumQuestion} </p>
      <p className="card-text">Hard Question - {props.hardQuestion} </p>
      <div className='d-flex justify-content-end'>
      <a href="#" className="btn btn-primary ">GO</a>
     
      </div>
    </div>
  </div>
  )
}

export default Carditem
