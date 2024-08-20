import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Progressbar from '../components/Progress/Progressbar';
import data from './data.json';

function Card({ mode }) {
    const navigate = useNavigate();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, [navigate]);

    // Set background color based on mode
    useEffect(() => {
        document.body.style.background = mode === "light" ? "white" : "#0E1C25";
    }, [mode]);

    return (
        <>
            <Progressbar 
    sheetName="CP Sheet" 
    totalQuestions={279} 
    completedQuestions={localStorage.getItem('cpProgress')} 
    mode={mode} 
/>
            <div className='container my-3 d-flex justify-content-between'>
                <div className='row'>
                    {data.map((element) => (
                        <div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center' key={element.Day}>
                            <div className={`card-${mode} my-2 mx-1`} style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h1 className={`card-${mode}-title smallh1`}>Rating-{element.Rating}</h1>
                                    <p className={`card-${mode}-text`}>Total Questions - {element.questions}</p>
                                    <div className='d-flex justify-content-end'>
                                        <Link 
                                            to={`/cpsheet/${element.Rating}`} 
                                            className="btn-light btn-primary"
                                        >
                                            GO
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Card;
