import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
import dataContext from '../../context/datacontext';

function Login({ mode }) {
  const { getData, showAlert, getDataStriver, getDataDSA,getCodingIDs} = useContext(dataContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const json = await response.json();
    setLoader(false);

    if (json.success) {
      localStorage.setItem('token', json.token);
      await Promise.all([getData(), getDataStriver(), getDataDSA(),getCodingIDs()]);
      showAlert("success", "Login Successful 🥳🎉");
      navigate('/');
    } else {
      showAlert("danger", json.error);
    }
  };

  document.body.style.background = mode === "light" ? "white" : "#0E1C25";

  return (
    <div className="container" id="log" style={{ height: "100%" }}>
      <div className={`logincard-${mode} d-flex justify-content-center align-items-center`}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={onChange}
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={onChange}
                id="password"
              />
            </div>
            <p><a href='/forget'>Forget Password?</a></p>
            <button type="submit" className="btn btn-primary">
              Login &nbsp;
              {loader && (
                <span className="spinner-border spinner-border-sm my-1" role="status" aria-hidden="true"></span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
