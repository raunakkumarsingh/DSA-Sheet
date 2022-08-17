import React from 'react'

export default function Progressbar(props) {
    let percent=(localStorage.getItem("farajProgress")/310)*100
  return (
    <>
    <h1 className='d-flex justify-content-center'>450 DSA</h1>
    <div className='container'>
    <div className="progress " style={{width: "75%"}}>
    <div className="progress-bar progress-bar-striped progress-bar-animated d-flex justify-content-center"  role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`}}>{localStorage.farajProgress} out of 310</div>
    </div>
    </div>
    </>
  )
}
