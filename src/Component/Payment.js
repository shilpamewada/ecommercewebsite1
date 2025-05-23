import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './backimg.jpg'; // Import your background image
import './Payment.css';

function Payment() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your payment has been processed successfully!');
        navigate("/Products")
    };

    return (
        <div>
            <section className="vh-100 bg-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="mask d-flex align-items-center h-100">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-5 col-md-4 col-lg-5 col-xl-5 my-5 rounded-3"> {/* Added rounded-3 class for border radius */}
                                <div className="card gradient-custom-2">
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">PAYMENT PORTAL</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Your name 👤"
                                                    name="namee"
                                                    required
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="Phone Number"
                                                    className="form-control form-control-lg"
                                                    name="Phone Numbeer"
                                                    placeholder="Phone Number 📞"
                                                    required
                                                />
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input
                                                    type="address"
                                                    className="form-control form-control-lg"
                                                    name="address"
                                                    placeholder="Address 🏠"
                                                    required
                                                />
                                            </div>
                                            <div className="form-outline mb-3">
                                                <input
                                                    type="amount"
                                                    className="form-control form-control-lg"
                                                    name="amount"
                                                    placeholder="Amount 💵"
                                                    required
                                                />
                                            </div>
                                            <div className="d-flex">
                                                <button type="submit" className="btn btn-primary btn-lg w-100">PROCEED</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Payment;
