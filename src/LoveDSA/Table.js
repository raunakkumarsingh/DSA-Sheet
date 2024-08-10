import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Tableitem from './Tableitem';



export default function Table({ mode, title }) {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Redirect to login if no token is found
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  // Set background color based on mode
  document.body.style = mode === "light" ? "background:white" : "background:#0E1C25";

  return (
    <>
      <h1 className={`tableheading-${mode} mt-5`}>{title}</h1>
      <div className='d-flex justify-content-center'>
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
          <input
            type="text"
            className="form-control"
            onChange={e => setSearchTerm(e.target.value)}
            aria-label="Search input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
      </div>
      <div>
        <Tableitem searc={searchTerm} mode={mode} title={title} />
      </div>
    </>
  );
}
