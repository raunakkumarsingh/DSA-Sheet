import React from 'react';
import data from './data.json';
import { useNavigate } from 'react-router';

import DataState from '../context/DataState';
import Progressbar from '../components/Progress/Progressbar';
import { Link } from "react-router-dom";


function Card(props) {


  let history = useNavigate();


  const loginControl = async (e) => {
    // e.preventDefault()

    if (!localStorage.getItem('token')) {
      history('/login')

    }
  }

  // console.log(props.mode);
  document.body.style = props.mode === "light" ? "background:white" : "background:#0E1C25";
  return (
    <>
      <Progressbar 
    sheetName="450 DSA" 
    totalQuestions={450} 
    completedQuestions={localStorage.getItem("loveProgress")} 
    mode={props.mode} 
/>
      <div className='container my-3 d-flex justify-content-between'>

        <div className='row'>
          {data.map((element) => {
            return <div className='col-lg-4 col-md-6 col sm-12 d-flex justify-content-center' key={element.Title}>
              <DataState>
                <div className={`card-${props.mode} my-2 mx-1`} id='cards' style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className={`card-${props.mode}-title`}>{element.Title}</h5>
                    <div className='d-flex justify-content-end'>
                      <Link to={`/450DSA/${element.Title}`} onClick={loginControl} className="btn-light btn-primary ">GO</Link>
                    </div>
                  </div>
                </div>
              </DataState>
            </div>
          })
          }

        </div>

      </div>


    </>
  )
}

export default Card
