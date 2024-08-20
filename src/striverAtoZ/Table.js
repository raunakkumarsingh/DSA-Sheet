import React, { useContext, useEffect, useState } from 'react';
import Tableitem from './Tableitem';
import { useNavigate } from 'react-router';

export default function Table(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, [navigate]);

    const [searchTerm, setSearchTerm] = useState('');
    document.body.style.background = props.mode === "light" ? "white" : "#0E1C25";
    return (
        <>
            <h2 className={`tableheading-${props.mode} mt-5`}>{props.title}</h2>
            <div className='d-flex justify-content-center'>
                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                    />
                </div>
            </div>
            <div>
                       <Tableitem searc={searchTerm} mode={props.mode}  title={props.title} /> 
            </div>
        </>
    );
}
