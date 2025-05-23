// import React, { useState } from 'react';
// import './Registerss.css';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Register() {
//     const [formdata, setFormdata] = useState({
//         namee: "",
//         email: "",
//         password: "",
//         confirmpassword: "",
//         agree: false // Initially set agree to false
//     });
//     const [passwordValid, setPasswordValid] = useState(true);
//     const [passwordMatch, setPasswordMatch] = useState(true);
//     const navigate = useNavigate();

//     const validatePassword = (password) => {
//         const hasUpperCase = /[A-Z]/.test(password);
//         const hasLowerCase = /[a-z]/.test(password);
//         const hasDigit = /\d/.test(password);
//         const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//         return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
//     };

//     const handleformdata = (e) => {
//         let { name, value, type, checked } = e.target;

//         // For checkbox, handle checked value
//         value = type === 'checkbox' ? checked : value;

//         setFormdata({
//             ...formdata,
//             [name]: value
//         });

//         if (name === 'password') {
//             setPasswordValid(validatePassword(value));
//         }

//         if (name === 'confirmpassword') {
//             setPasswordMatch(value === formdata.password);
//         }
//     };

//     const handlesubmit = async (e) => {
//         e.preventDefault();
//         if (!passwordValid) {
//             alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
//             return;
//         }
//         if (!passwordMatch) {
//             alert("Passwords do not match.");
//             return;
//         }
//         if (!formdata.agree) { // Check if the agree checkbox is checked
//             alert("Please agree with the terms and conditions to register.");
//             return;
//         }
//         alert("Registered");
//         try {
//             let response = await axios.post("http://localhost:3004/register", formdata);
//             console.log(response);
//             if (response.status === 200) {
//                 navigate('/Login');
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div>
//             <section className="vh-70 bg-dark">
//                 <div className="mask d-flex align-items-center h-100">
//                     <div className="container h-100">
//                         <div className="row d-flex justify-content-center align-items-center h-100">
//                             <div className="col-5 col-md-4 col-lg-5 col-xl-5 my-5">
//                                 <div className="card gradient-custom-2">
//                                     <div className="card-body p-5">
//                                         <h2 className="text-uppercase text-center mb-5">Create an account</h2>
//                                         <form onSubmit={handlesubmit}>
//                                             <div className="form-outline mb-4">
//                                                 <input
//                                                     type="text"
//                                                     className="form-control form-control-lg"
//                                                     placeholder="Your name"
//                                                     name="namee"
//                                                     value={formdata.namee}
//                                                     onChange={handleformdata}
//                                                     required
//                                                 />
//                                             </div>
//                                             <div className="form-outline mb-4">
//                                                 <input
//                                                     type="email"
//                                                     className="form-control form-control-lg"
//                                                     name="email"
//                                                     placeholder="Email address or Phone number"
//                                                     value={formdata.email}
//                                                     onChange={handleformdata}
//                                                     required
//                                                 />
//                                             </div>
//                                             <div className="form-outline mb-3">
//                                                 <input
//                                                     type="password"
//                                                     className="form-control form-control-lg"
//                                                     name="password"
//                                                     placeholder="Password"
//                                                     value={formdata.password}
//                                                     onChange={handleformdata}
//                                                     required
//                                                 />
//                                                 {!passwordValid && <div className="text-danger">Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.</div>}
//                                             </div>
//                                             <div className="form-outline mb-3">
//                                                 <input
//                                                     type="password"
//                                                     className="form-control form-control-lg"
//                                                     name="confirmpassword"
//                                                     placeholder="Confirm password"
//                                                     value={formdata.confirmpassword}
//                                                     onChange={handleformdata}
//                                                     required
//                                                 />
//                                                 {!passwordMatch && <div className="text-danger">Passwords do not match.</div>}
//                                             </div>
//                                             <div className="form-check d-flex mb-4">
//                                                 <input
//                                                     className="form-check-input me-2"
//                                                     type="checkbox"
//                                                     id="agree"
//                                                     name="agree"
//                                                     checked={formdata.agree}
//                                                     onChange={handleformdata}
//                                                 />
//                                                 <label className="form-check-label" htmlFor="agree">
//                                                     I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
//                                                 </label>
//                                             </div>
//                                             <div className="d-flex">
//                                                 <button type="submit" className="btn btn-primary btn-lg w-100">Register</button>
//                                             </div>
//                                             <p className="text-center text-muted mt-3 mb-3">Have already an account? <Link to="/Login"><u>Login here</u></Link></p>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Register;
import React, { useState } from 'react';
import './Registerss.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [formdata, setFormdata] = useState({
        namee: "",
        email: "",
        password: "",
        confirmpassword: "",
        agree: false
    });
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
    };

    const handleformdata = (e) => {
        let { name, value, type, checked } = e.target;
        value = type === 'checkbox' ? checked : value;

        setFormdata({
            ...formdata,
            [name]: value
        });

        if (name === 'password') {
            setPasswordValid(validatePassword(value));
        }

        if (name === 'confirmpassword') {
            setPasswordMatch(value === formdata.password);
        }
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!passwordValid) {
            alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
            return;
        }
        if (!passwordMatch) {
            alert("Passwords do not match.");
            return;
        }
        if (!formdata.agree) {
            alert("Please agree with the terms and conditions to register.");
            return;
        }

        alert("Registered");

        try {
            let response = await axios.post("http://localhost:3004/register", formdata);
            if (response.status === 200) {
                navigate('/Login');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="card gradient-custom-2 shadow-lg">
                            <div className="card-body p-4 p-md-5">
                                <h2 className="text-uppercase text-center mb-4">Create an account</h2>
                                <form onSubmit={handlesubmit}>
                                    <div className="form-outline mb-3">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Your name"
                                            name="namee"
                                            value={formdata.namee}
                                            onChange={handleformdata}
                                            required
                                        />
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            name="email"
                                            placeholder="Email address or Phone number"
                                            value={formdata.email}
                                            onChange={handleformdata}
                                            required
                                        />
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            name="password"
                                            placeholder="Password"
                                            value={formdata.password}
                                            onChange={handleformdata}
                                            required
                                        />
                                        {!passwordValid && (
                                            <div className="text-danger small mt-1">
                                                Password must contain uppercase, lowercase, number, and special character.
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            name="confirmpassword"
                                            placeholder="Confirm password"
                                            value={formdata.confirmpassword}
                                            onChange={handleformdata}
                                            required
                                        />
                                        {!passwordMatch && (
                                            <div className="text-danger small mt-1">
                                                Passwords do not match.
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-check d-flex mb-4">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            id="agree"
                                            name="agree"
                                            checked={formdata.agree}
                                            onChange={handleformdata}
                                        />
                                        <label className="form-check-label" htmlFor="agree">
                                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                        </label>
                                    </div>
                                    <div className="d-grid mb-3">
                                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                    </div>
                                    <p className="text-center text-muted mt-3 mb-0">
                                        Have already an account? <Link to="/Login"><u>Login here</u></Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
