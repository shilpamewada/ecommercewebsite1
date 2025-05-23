// import React from 'react';
// import { useState } from 'react';
// import './Design.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // alert('Login successfully');
//     try {
//       let response = await axios.post('http://localhost:3004/login', { email: email, password: password });
//       console.log(response);
//       alert(response.data);
//       if(response.data=== "Login Successfull")
//       navigate('/Home')
//     } catch (err) {
//       console.log(err);
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div style={{ border: '2px solid #ccc', padding: '10px', backgroundColor: '#f0f0f0', marginTop: '5px' }} className="container">
//       <section className="vh-100">
//         <div className="container-fluid h-custom h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-md-9 col-lg-6 col-xl-5">
//               <img src="https://media.istockphoto.com/id/1373745245/vector/login-page-background-enter-username-and-password-ui-user-interface.jpg?s=612x612&w=0&k=20&c=lTFio2kjoTHxwlEPxLGf59_vibtvjzp4ypy-RVcQTp0=" className="img-fluid" alt="Your Alt Text" />
//             </div>
//             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//               <form onSubmit={handleSubmit}>
//                 <div className="d-flex mb-4 justify-content-center align-item-center text-center text-white">
//                   <div style={{ marginRight: '10px', background: 'white', padding: '7px', width: '300px' }}><Link to="/Login" style={{ textDecoration: 'none', color: 'gray' }}><strong>Sign in</strong></Link></div>
//                   <div style={{ background: 'white', padding: '7px', width: '300px' }}><Link to="/Register" style={{ textDecoration: 'none', color: 'gray' }}><strong>Sign up</strong></Link></div>
//                 </div>
//                 <div className="form-outline mb-4">
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <i className="fas fa-user"></i> {/* Font Awesome user icon */}
//                     </span>
//                     <input
//                       type="email"
//                       id="form3Example3"
//                       className="form-control form-control-lg"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="form-outline mb-3">
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <i className="fas fa-lock"></i> {/* Font Awesome lock icon */}
//                     </span>
//                     <input
//                       type="password"
//                       id="form3Example4"
//                       className="form-control form-control-lg"
//                       placeholder="Enter password"
//                       value={password}
//                       onChange={(e) => {
//                         setPassword(e.target.value);
//                       }}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="form-check mb-0">
//                     <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//                     <label className="form-check-label" htmlFor="form2Example3">
//                       Remember me
//                     </label>
//                   </div>
//                   <a href="#!" className="text-body">Forgot password?</a>
//                 </div>
//                 <div className="text-center text-lg-start mt-4 pt-2">
//                   <button type="submit" className="btn btn-primary btn-lg w-100">
//                     Login
//                   </button>
//                 </div>
//                 <div className="divider d-flex flex-column align-items-center my-9">
//                   <p className="text-center fw-bold mx-20 mb-2">__________________________or ___________________________</p>
//                   <p className="mb-16">
//                     <Link to="/Register" style={{ textDecoration: 'none', color: 'blue' }}>
//                       Register
//                     </Link>
//                   </p>
//                 </div>
//                 <div className="d-flex justify-content-center align-items-center text-center">
//   <div className="mx-2">
//    <Link to="https://twitter.com/i/flow/login"><button type="button" className="btn btn-info">
//       <i className="fa-brands fa-square-twitter"></i> Twitter
//     </button></Link> 
//   </div>
//   <div className="mx-2">
//   <Link to="https://www.google.com/"> <button type="button" className="btn btn-danger">
//       <i className="fa-brands fa-square-google-plus"></i> Google
//     </button></Link> 
//   </div>
//   <div className="mx-2">
//   <Link to="https://www.linkedin.com/home">  <button type="button" className="btn btn-primary">
//       <i className="fab fa-linkedin-in"></i> Linkedin
//     </button></Link> 
//   </div>
//   <div className="mx-2">
//   <Link to="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"> <button type="button" className="btn btn-secondary">
//       <i className="fab fa-github"></i> Github
//     </button></Link> 
//   </div>
// </div>

//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-4 px-xl-5 bg-gray">
//           <div className="text-black mb-2 mb-md-8 my-19">
//             Myntra Collection @ 2023. All rights reserved.
//           </div>
//           <div>
//   <div>
//     <Link to="#" className="text-black me-4">
//       <i className="fab fa-facebook-f"></i>
//     </Link>
//     <Link to="#" className="text-black me-4">
//       <i className="fab fa-twitter"></i>
//     </Link>
//     <Link to="#" className="text-black me-4">
//       <i className="fab fa-google"></i>
//     </Link>
//     <Link to="#" className="text-black">
//       <i className="fab fa-linkedin-in"></i>
//     </Link>
//   </div>
// </div>

//         </div>
//       </section>
//     </div>
//   );
// }

// export default Login;
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
    <div
      style={{
        border: '2px solid #ccc',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        marginTop: '5px',
      }}
      className="container"
    >
      <section className="vh-100">
        <div className="container-fluid h-custom h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://media.istockphoto.com/id/1373745245/vector/login-page-background-enter-username-and-password-ui-user-interface.jpg?s=612x612&w=0&k=20&c=lTFio2kjoTHxwlEPxLGf59_vibtvjzp4ypy-RVcQTp0="
                className="img-fluid"
                alt="Your Alt Text"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex mb-4 justify-content-center align-item-center text-center text-white">
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
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Login
                  </button>
                </div>
                <div className="divider d-flex flex-column align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-2">
                    __________________________or ___________________________
                  </p>
                  <p>
                    <Link to="/Register" style={{ textDecoration: 'none', color: 'blue' }}>
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

        {/* ✅ Responsive Footer Fix */}
        <div className="d-flex flex-column flex-sm-row flex-wrap text-center text-sm-start justify-content-between align-items-center py-3 px-4 px-xl-5 bg-gray">
          <div className="text-black mb-2 w-100 footer-text">
            Myntra Collection @ 2023. All rights reserved.
          </div>
          <div>
            <Link to="#" className="text-black me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="text-black me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="text-black me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="#" className="text-black">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
