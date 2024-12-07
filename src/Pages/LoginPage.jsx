import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../Context/firebase";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login IN as", selectedRole);
    const result = await firebase.signInUserWithEmailAndPassword(email, password);
    console.log("Successfully logged in as", selectedRole);
  };

  

  return (
    <div className="container mt-5">
      {!selectedRole ? (
        
        <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }} onClick={() => setSelectedRole("user")}>
          <Card.Img 
                variant="top" 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4Q7-yMnrlnqwR4ORH7c06AHaHa%26pid%3DApi&f=1&ipt=8458ca404279a0d0de4bffccd6d10aa17e1410b50bf133b7dcd0d2456035453d&ipo=images"
                alt="User Image"
                className="card-img-top"
                style={{ height: '150px', objectFit: 'cover' }} 
              />
            <Card.Body>
             
              <Card.Title>User Login</Card.Title>
              <Card.Text>
                Login as a User
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem',height:'300px'}} onClick={() => setSelectedRole("doctor")}>
          <Card.Img 
                variant="top" 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8%26pid%3DApi&f=1&ipt=f4b712d285fa3fe4ab1c0ad0244f27412de46f31765a8f7b6ebe1d43fdab5740&ipo=images"
                alt="Doctor Image"
                className="card-img-top"
                style={{ height: '150px', objectFit: 'cover' }} 
              />
            <Card.Body>
             
              <Card.Title>Doctor Login</Card.Title>
              <Card.Text>
                Login as a doctor
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              type="email" 
              placeholder="Enter email" 
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              type="password" 
              placeholder="Password" 
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            LOGIN as {selectedRole}
          </Button>
          <h1 className="mt-5 mb-5">Or</h1>
          <Button onClick={()=>{firebase.signInWithGoogle().then((v)=>{
            navigate('/');
          })}} variant="danger">
            Sign in with Google
          </Button>
        </Form>
      )}
    </div>
  );
};

export default LoginPage;
