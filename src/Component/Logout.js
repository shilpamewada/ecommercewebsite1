import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';

function Logout() {
  const [modal, setModal] = useState(false);
  const navigate =useNavigate();

 

  let[email,setEmail]=useState("")
  let[ Contact ,setPassword]=useState("")

  const handlesubmit= async(e) =>{
    e.preventDefault();
    alert("logout succefully")
    try{
       let response = await axios.post("http://localhost:3004/register",{"email":email," Contact": Contact})
       console.log(response)
       alert(response.data)
       if (response.status === 200) {
        navigate('/Login')
    }

       
       
    }catch(err){
        console.log(err)
    }
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Your App</h1>
           
            <div>
      <Button className="btn btn-danger" onClick={handlesubmit}>
        <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>
          Logout
        </Link>
      </Button>
    </div>
              <p>You are logged out.</p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Logout;
