import React from 'react'
import { Link } from 'react-router-dom';
import logo from './myntra.jpg'

function Navbar() {
  return (
    <div>


<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm  ">
<img src={logo} alt="Description" height={70}   style={{ marginLeft: '100px' }}/>
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="/">
        MYNTRA
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-Link   btn btn-outline-dark  me-3" aria-current="page" to="/Home">
          <i className="fa fa-home me-1"></i>Home
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link  btn btn-outline-dark  me-3" to="/aboutus">
          <i className="fa fa-inbox me-1"></i> About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link  btn btn-outline-dark  me-2" to="/Help">
          <i className="fa fa-question-circle me-1"></i> Help
          </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-Link  btn btn-outline-dark  me-2" to="/products">
          <i className="fa fa-product-hunt me-1"></i> Products
          </Link>
        </li>
       
      </ul>
      <div className="buttons">
        <Link to="/login" className="btn btn-outline-dark">
          <i className="fa fa-sign-in me-1"></i>Login</Link>
          <Link to="/register" className="btn btn-outline-dark ms-2" >
          <i className="fa fa-user-plus me-1"></i>Register</Link>
          <Link to="/carts" className="btn btn-outline-dark ms-2">
          <i className="fa fa-shopping-cart me-1"></i>Carts</Link>
          <Link to="/logout" className="btn btn-outline-dark ms-2">
          <i className="fa fa-sign-out me-1"></i>Logout</Link>

          
          <Link to="/tables" className="btn btn-outline-dark ms-2">
          <i className="fa fa-table me-1"></i>Table</Link>
      </div>
      <div></div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

// https://getbootstrap.com/docs/5.3/components/navbar/
// https://fontawesome.com/v4/icons/