import React from 'react';
import { useState } from 'react';
import './Design.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post('http://localhost:3004/login', {
        email: email,
        password: password,
      });
      console.log(response);
      alert(response.data);
      if (response.data === 'Login Successfull') navigate('/Home');
    } catch (err) {
      console.log(err);
      alert('Invalid email or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        style={{
          border: '2px solid #ccc',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <section className="w-100">
          <div className="container-fluid h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5"></div>
              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex mb-4 justify-content-center text-center text-white">
                    <div
                      style={{
                        marginRight: '10px',
                        background: 'white',
                        padding: '7px',
                        width: '300px',
                      }}
                    >
                      <Link
                        to="/Login"
                        style={{ textDecoration: 'none', color: 'gray' }}
                      >
                        <strong>Sign in</strong>
                      </Link>
                    </div>
                    <div
                      style={{
                        background: 'white',
                        padding: '7px',
                        width: '300px',
                      }}
                    >
                      <Link
                        to="/Register"
                        style={{ textDecoration: 'none', color: 'gray' }}
                      >
                        <strong>Sign up</strong>
                      </Link>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-outline mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="form2Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                    >
                      Login
                    </button>
                  </div>

                  <div className="divider d-flex flex-column align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-2">
                      __________________________or ___________________________
                    </p>
                    <p>
                      <Link
                        to="/Register"
                        style={{ textDecoration: 'none', color: 'blue' }}
                      >
                        Register
                      </Link>
                    </p>
                  </div>

                  <div className="d-flex justify-content-center align-items-center text-center flex-wrap">
                    <div className="mx-2 mb-2">
                      <Link to="https://twitter.com/i/flow/login">
                        <button type="button" className="btn btn-info">
                          <i className="fa-brands fa-square-twitter"></i> Twitter
                        </button>
                      </Link>
                    </div>
                    <div className="mx-2 mb-2">
                      <Link to="https://www.google.com/">
                        <button type="button" className="btn btn-danger">
                          <i className="fa-brands fa-square-google-plus"></i> Google
                        </button>
                      </Link>
                    </div>
                    <div className="mx-2 mb-2">
                      <Link to="https://www.linkedin.com/home">
                        <button type="button" className="btn btn-primary">
                          <i className="fab fa-linkedin-in"></i> Linkedin
                        </button>
                      </Link>
                    </div>
                    <div className="mx-2 mb-2">
                      <Link to="https://github.com/signup">
                        <button type="button" className="btn btn-secondary">
                          <i className="fab fa-github"></i> Github
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Optional Footer Section */}
          <div className="d-flex flex-column flex-sm-row flex-wrap text-center text-sm-start justify-content-between align-items-center py-3 px-4 px-xl-5 bg-gray">
            <div className="text-black mb-2 w-100 footer-text"></div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
