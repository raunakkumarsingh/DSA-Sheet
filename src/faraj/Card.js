import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from './data.json';
import Progressbar from '../components/Progress/Progressbar';
import DataState from '../context/DataState';

function Card({ mode }) {
  const navigate = useNavigate();

  const loginControl = () => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  };

  document.body.style.background = mode === "light" ? "white" : "#0E1C25";

  return (
    <>
       <Progressbar sheetName="Faraj Sheet" totalQuestions={324} completedQuestions={localStorage.getItem("farajProgress")} mode={mode} />
      <div className="container my-3">
        <div className="row">
          {data.map((element) => (
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center" key={element.Title}>
              <DataState>
                <div className={`card-${mode} my-2 mx-1`} id="cards" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h1 className={`card-${mode}-title smallh1`}>{element.Title}</h1>
                    <p className={`card-${mode}-text`}>Total Questions: {element.Totalquestion}</p>
                    <div className="d-flex justify-content-end">
                      <Link to={`/faraj/${element.Title}`} onClick={loginControl} className="btn-light btn-primary">
                        GO
                      </Link>
                    </div>
                  </div>
                </div>
              </DataState>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
