import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

export const NavBar = () => {
  const navigate = useNavigate()

  const handleOnLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/landing-page')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          <h5 >Movies-Auth</h5>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/movies' className="nav-link active">Movies</Link>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='login' className="nav-link active">Login</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link active link" onClick={handleOnLogout}>Logout</button>
              </li>
              <li className="nav-item">
                <Link to='register' className="nav-link active">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}