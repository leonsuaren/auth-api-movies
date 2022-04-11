import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState({});

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      navigate('/');
    }
  }, []);

  const onHandleRegister = async (e) => {
      e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      }, 3000);
      return setError('Password do not match');
    }
    try {
      const { data } = await axios.post("http://localhost:3000/api/auth/register", { username, email, password }, config);
      setSuccess(data)
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  }

  return (
    <div>
      <div className="h-100 gradient-form ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black main">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <div className="text-center">
                        <img className='img' src="Tmdb-new-logo.png" alt="logo" />
                      </div>
                      <hr />
                      <form onSubmit={onHandleRegister}>
                        <p>Please register your account</p>

                        <div className="form-outline mb-4">
                          <input type="text" id="form2Example11" className="form-control"
                            placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                          <label className="form-label">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="email" className="form-control"
                            placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                          <label className="form-label">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                          <label className="form-label">Password</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example22" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                          <label className="form-label">Confirm Password</label>
                        </div>
                        <hr />
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register</button>
                        </div>

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center bg-primary bg-gradient">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">More Than Just Movies</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
              {
                success.success ?
                  <div className="alert alert-success alert-style" role="alert">
                    {success.message}
                  </div> : ''
              }
              {
                error &&
                <div className="alert alert-danger alert-style" role="alert">
                  {error}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}