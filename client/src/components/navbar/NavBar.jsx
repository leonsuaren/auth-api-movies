import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/user-context';
import { Navbar } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

export const NavBarComponent = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const handleOnLogout = () => {
    localStorage.removeItem('authToken');
    userContext.setUserLogin(false);
    navigate('/landing-page')
  }
  
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
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
              {
                userContext.userLogin ? <Link to='/movies' className="nav-link active">Movies</Link> : ''
              }
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {
                  !userContext.userLogin ? <Link to='login' className="nav-link active">Login</Link> : ''
                }
              </li>
              <li className="nav-item">
                {
                  userContext.userLogin && <button className="nav-link active link" onClick={handleOnLogout}>Logout</button>
                }
              </li>
              <li className="nav-item">
                {
                  userContext.userLogin && <Link to='/control-panel' className="nav-link active link">Control Panel</Link>
                }
              </li>
              <li className="nav-item">
                {
                  !userContext.userLogin ? <Link to='register' className="nav-link active">Register</Link> : ''
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

// <li className="nav-item">
// {
//   userContext.userLogin && <button className="nav-link active link">Welcome, {userLogedInName}!</button>
// }
// </li>