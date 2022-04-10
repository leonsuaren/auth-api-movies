import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleOnForgotPassword =async (e) => { 
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3000/api/auth/forgot-password', { email });
      setTimeout(() => {
        navigate(`/reset-password/${data.resetToken}`);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-100 gradient-form">
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
                    <form onSubmit={handleOnForgotPassword}>
                      <p>
                        Please enter the email address you register your account with. We
                        will send you reset password confirmation to this email
                    </p>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example11" className="form-control" value={email}
                          placeholder="Email address" onChange={(e) => { setEmail(e.target.value) }} />
                        <label className="form-label" htmlFor="form2Example11">Email</label>
                      </div>

                      <hr />

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Send Email</button>
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
          </div>
        </div>
      </div>
    </div>
  )
}