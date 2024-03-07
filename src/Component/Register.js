import React, { useState } from 'react'
import './Registerss.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Register() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setPasswordMatch(event.target.value === confirmPassword);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
      setPasswordMatch(event.target.value === password);
    };
  

    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const [values, setValues] = useState({ email: "" });
    const [errors, setErrors] = useState({});
    const validateAndSubmitForm = (e) => {
        e.preventDefault();
     
        const errors = {};
     
        if (!isEmail(values.email)) {
          errors.email = "Wrong email";
        }
     
        setErrors(errors);
     
        if (!Object.keys(errors).length) {
          alert(JSON.stringify(values, null, 2));
        }
      };
     
   
     


    const [modal, setModal] = useState(false)
    const navigate = useNavigate();
    let [formdata, setFormdata] = useState({
        namee: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    const handlesubmit = async (e) => {
        e.preventDefault();
        alert("registered")
        console.log(formdata)
        try {

            let response = await axios.post("http://localhost:3004/register", formdata)
            console.log(response)
            if (response.status === 200) {
                navigate('/Login')
            }

        } catch (err) {
            console.log(err)
        }

        alert("registered")
        // console.log(formdata)
    }

    const handleformdata = (e) => {
        // const setEmail = (e) => {
        //     setValues((values) => ({ ...values, email: e.target.value }));
        //   };

        let { name, value } = e.target
        setFormdata({
            ...formdata,    //gets all  the input variable in console
            [name]: value

        })
        console.log(formdata)

    }
    return (
        <div >
            <section class="vh-70 bg-dark">
                <div class="mask d-flex align-items-center h-100 ">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100 ">
                            <div class="col-5 col-md-4 col-lg-5 col-xl-5 my-5">
                                <div class="card gradient-custom-2" >
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                        <form onSubmit={handlesubmit}>

                                            <div class="form-outline mb-4">
                                                <input 
                                                type="text"
                                                 id="form3Example1cg" 
                                                 class="form-control form-control-lg" 
                                                 placeholder='Your name'
                                                 name='namee' value={formdata.namee} 
                                                 onChange={handleformdata}
                                                 required />
                                                {/* <label class="form-label" for="form3Example1cg">Your Name</label> */}
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input  type="email"
                                                 id="form3Example3cg" 
                                                 class="form-control form-control-lg"
                                                 name='email' 
                                                 placeholder='Email address or Phone number'
                                                 value={formdata.email}
                                                  onChange={handleformdata} 
                                                  required/>
                                                {/* <label class="form-label" for="form3Example3cg">Your Email</label> */}
                                            </div>

                                            <div class="form-outline mb-3">
                                                <input  type="password"
                                                 id="form3Example4cg" 
                                                 class="form-control form-control-lg"
                                                 name='password'
                                                 placeholder='Password'
                                                  value={formdata.password} 
                                                 onChange={handleformdata}
                                                 required />
                                                {/* <label class="form-label" for="form3Example4cg">Password</label> */}
                                            </div>

                                            <div class="form-outline mb-3">

                                                <input  type="password"
                                                 id="form3Example4cdg" 
                                                 class="form-control form-control-lg" 
                                                 name='confirmpassword'
                                                 placeholder='Confirm password'
                                                  value={formdata.confirmpassword} 
                                                  onChange={handleformdata}/>
                                                {/* <label class="form-label" for="form3Example4cdg">Repeat your password</label> */}
                                            </div>

                                            <div class="form-check d-flex  mb-4">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label class="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex " >
                                                <button  type="submit"  class="btn btn-primary btn-lg w-100"   >  Register </button></div>
                                            <p class=" text-center text-muted mt-3 mb-3">Have already an account?
                                                <Link to="/Login"
                                                      ><u>Login here</u></Link></p>


                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register


// style="border-radius: 15px;"
//  <Link to="/Login" style={{ marginLeft: '20px','backgroundColor':'white' }}>Login</Link>