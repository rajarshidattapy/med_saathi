import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { useFirebase } from "../Context/firebase";

const LoginPage = () => {

const firebase = useFirebase();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login IN ")
    const result = await firebase.signInUserWithEmailAndPassword(email,password);
   console.log("successfull");
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
       LOGIN
      </Button>
    </Form>
    <h1 className="mt-5 mb- 5 ">Or</h1>
  <Button onClick={firebase.signInWithGoogle} variant ="danger ">Sign in with google </Button>
</div>
    )
};

export default LoginPage;

// Go to App.jsx and import this file and Route
//  it to the path "/register" using react-router-dom and render this page
