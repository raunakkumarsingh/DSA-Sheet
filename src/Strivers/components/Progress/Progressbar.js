import React from 'react'
import './Progress.css';
export default function Progressbar(props) {
    let percent=(localStorage.getItem("striverProgress")/184)*100
  return (
    <>
    <h1 className={`d-flex justify-content-center heading-${props.mode}`}>Striver SDE Sheet</h1>
    <h2 className={`questions-num-${props.mode}`}>{localStorage.striverProgress} out of 184</h2>
    <div className='container'>
    <div className="progress " style={{width: "75%", height: "25px", margin: "2rem"}}>
    <div className="progress-bar progress-bar-animated d-flex justify-content-center"  role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`, color: "aqua"}}>{Math.round(percent)}%</div>
    </div>
    </div>
    </>
  )
}
