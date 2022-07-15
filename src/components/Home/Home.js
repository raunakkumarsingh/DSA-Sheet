import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'

function Home(props) {
    document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  return (
  
 <div className='container1 d-flex  justify-content-around justify-content-center align-item-center row' >
  <div className={`card-${props.mode} my-2 mx-1 col-lg-4 col-md-10 col-sm-12 card` }  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className={`card-${props.mode}-title`}>Faraz Sheet</h5>
      <p className={`cardcontent-${props.mode}`} style={{marginBottom: "4rem"}}>
      Here is a collection of problems from Mohammad Fraz sheet using which people have cracked their dream jobs. These questions are commonly asked in product-based companies like Amazon, Microsoft, Google, etc
      </p>
      <div className='d-flex justify-content-end'>
      <Link to="/faraj"  className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
  <div className={`card-${props.mode} my-2 mx-1 col-lg-4 col-md-10  col-sm-12 card`}  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className={`card-${props.mode}-title`}>450 DSA (Love Babbar)</h5>
      <p className={`cardcontent-${props.mode}`} style={{marginBottom: "1rem"}}>
      This DSA sheet by Love Babbar contains 450 coding questions which will help you in: 1.Understanding each and every concept of DSA.
2.Clearing the DSA round for the Interviews, as these are the questions generally asked in the companies like Amazon, Microsoft, Google, etc.
      </p>
      <div className='d-flex justify-content-end'>
      <Link to="/450DSA"  className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
  <div className={`card-${props.mode} my-2 mx-1 col-lg-4 col-md-10  col-sm-12 card`}  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className={`card-${props.mode}-title`}>Striver SDE Sheet</h5>
      <p className={`cardcontent-${props.mode}`} style={{marginBottom: "2.7rem"}}>
      This Sheet by Raj Vikramaditya A.K.A Striver has questions which are one of the most asked coding interview questions in companies like Amazon, Microsoft, Media.net, Flipkart, etc. & covers almost all of the concepts related to Data Structure & Algorithms.
      </p>
      <div className='d-flex justify-content-end'>
      <Link to="/striver"  className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
 
 </div>
  )
}

export default Home
