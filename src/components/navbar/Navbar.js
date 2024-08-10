import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ mode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
    window.location.reload();
  };

  const isLoggedIn = !!localStorage.getItem('token');
  const username = localStorage.getItem('username');

  return (
    <nav className={`navbar-${mode} navbar-expand-lg nav`}>
      <div className="container-fluid d-flex">
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <p className={`navbar-brand-${mode} head`}>
                <Link className={`nav-link-${mode} text-uppercase fw-bold fs-5`} to="/">
                  {username || 'User'}
                </Link>
              </p>
            </li>
          </ul>
          <ul className="d-flex justify-content-end my-2">
            {!isLoggedIn ? (
              <>
                <li>
                  <Link className="btn btn-outline-success mx-2" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="btn btn-outline-success mx-2" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={handleLogout} className="btn btn-outline-success my-2">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
