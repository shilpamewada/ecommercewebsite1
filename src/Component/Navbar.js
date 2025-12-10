
import { Link } from 'react-router-dom';
import logo from './myntra.jpg';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap'; // Import Dropdown component

function Navbar() {
 
  const navigate = useNavigate();


  const handleLogout = () => {
    alert("Logged out successfully");
    navigate('/login');
  };

  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm sticky-top">
    <div className="container d-flex justify-content-between align-items-center">
      <Link className="navbar-brand fw-bold fs-4 me-4" to="/">
        <img src={logo} alt="Description" height={50} className="me-2" />
        MYNTRA
      </Link>

      <div className="d-flex align-items-center flex-wrap gap-3">
        <Link className="btn btn-outline-dark" to="/Home">
          <i className="fa fa-home me-2"></i>Home
        </Link>
        <Link className="btn btn-outline-dark" to="/aboutus">
          <i className="fa fa-inbox me-2"></i>About Us
        </Link>
        <Link className="btn btn-outline-dark" to="/Help">
          <i className="fa fa-question-circle me-2"></i>Help
        </Link>
        <Link className="btn btn-outline-dark" to="/products">
          <i className="fa fa-product-hunt me-2"></i>Products
        </Link>
        <Link className="btn btn-outline-dark" to="/cartt">
          <i className="fa fa-shopping-cart me-2"></i>Cart
        </Link>

        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/login">
              <i className="fa fa-sign-in me-1"></i>Login
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/register">
              <i className="fa fa-user-plus me-1"></i>Register
            </Dropdown.Item>
            <Dropdown.Item as={Button} onClick={handleLogout}>
              <i className="fa fa-sign-out me-1"></i>Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  </nav>
</div>

  );
}

export default Navbar;