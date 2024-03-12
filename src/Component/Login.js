import React from 'react'
import { useState } from 'react';
import './Design.css'
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [modal, setModal] = useState(false);
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  const handlesubmit= async(e) =>{
    e.preventDefault();
    alert("login successfully")
    try{
       let response = await axios.post("http://localhost:3004/login",{"email":email,"password":password})
       console.log(response)
       alert(response.data)
    
    }catch(err){
        console.log(err)
    }
  }
  return (
  
    <div style={{border: "2px solid #ccc", padding: "10px", backgroundColor: '#f0f0f0',marginTop: '5px' }} className='container' >
      <section class="vh-100">
        <div class="container-fluid h-custom  h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
            <img
                src="https://media.istockphoto.com/id/1373745245/vector/login-page-background-enter-username-and-password-ui-user-interface.jpg?s=612x612&w=0&k=20&c=lTFio2kjoTHxwlEPxLGf59_vibtvjzp4ypy-RVcQTp0="
                className="img-fluid"
                alt="Your Alt Text"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handlesubmit}>  
               
             
              <div className="d-flex mb-4 justify-content-center align-item-center text-center  text-white " >
      <div style={{ marginRight: '10px', background: 'white' ,padding: '7px',width:"300px"}}><Link to="/Login" style={{ textDecoration: 'none' ,color:"gray"}}><strong>Sign in</strong></Link></div>
      <div style={{ background: 'white', padding: '7px',width:"300px" }}><Link to="/Register" style={{ textDecoration: 'none',color:"gray" }}><strong>Sign up</strong></Link></div>
    </div>
<div className="form-outline mb-4">
      <div className="input-group">
        <span className="input-group-text">
          <i className="fas fa-user"></i> {/* Font Awesome user icon */}
        </span>
        <input
          type="email"
          id="form3Example3"
          className="form-control form-control-lg"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          required
        />
      </div>
    </div>
    <div className="form-outline mb-3">
      <div className="input-group">
        <span className="input-group-text">
          <i className="fas fa-lock"></i> {/* Font Awesome lock icon */}
        </span>
        <input
          type="password"
          id="form3Example4"
          className="form-control form-control-lg"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
          required
        />
      </div>
    </div>

                <div class="d-flex justify-content-between align-items-center">
                  
                  <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">Forgot password?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="Submit"  class="btn btn-primary btn-lg w-100"  
                   >Login</button>
                </div>
                <div class="divider d-flex flex-column align-items-center my-9">
  <p class="text-center fw-bold mx-20 mb-2">__________________________or ___________________________</p>
  <p class="mb-16">
    <Link to="/Register" style={{ textDecoration: 'none', color: 'blue' }}>
      Register
    </Link>
  </p>
</div>
                
                <div class="d-flex flex-row flex-wrap justify-content-center align-items-center text-center">
  <div class="flex-item justify-content-center align-items-center text-center">
    <button type="button" class="btn btn-info"  >
    <i class="fa-brands fa-square-twitter"></i> Twitter
    </button>
  </div>

  <div class="flex-item justify-content-center align-items-center text-center">
    <button type="button" class="btn btn-danger">
      <i  class="fa-brands fa-square-google-plus"></i> Google
    </button>
  </div>

  <div class="flex-item justify-content-center align-items-center text-center">
    <button type="button" class="btn btn-primary">
      <i class="fab fa-linkedin-in"></i> Linkedin
    </button>
  </div>

  <div class="flex-item justify-content-center align-items-center text-center">
    <button type="button" class="btn btn-secondary">
      <i class="fab fa-github"></i> Github
    </button>
  </div>
</div>
</form>
            </div>
          </div>
        </div>


        <div
          class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-4 px-xl-5 bg-gray">
          
          <div class="text-black mb-2 mb-md-8 my-19">
          Myntra Collection @ 2023. All rights reserved.
          </div>
          
          <div>
            <a href="#!" class="text-black me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" class="text-black me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="text-black me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="#!" class="text-black">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          
        </div>
      </section>

    </div>



  )
}

export default Login



