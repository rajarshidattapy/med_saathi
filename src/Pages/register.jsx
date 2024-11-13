import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { useFirebase } from "../Context/firebase";

const RegisterPage = () => {

const firebase = useFirebase();
console.log(firebase);

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("signing up user");
  await firebase.signUpUserWithEmailAndPassword(email,password);
  console.log("successfulll");

}


    return(
<div className="container mt-5">
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <Form.Control onChange={(e) =>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>

        <Form.Control  onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="Password" />

      </Form.Group>
      
      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
</div>
    )
};

export default RegisterPage;

// Go to App.jsx and import this file and Route
//  it to the path "/register" using react-router-dom and render this page