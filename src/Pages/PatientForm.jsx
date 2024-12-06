import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useFirebase } from "../Context/firebase";

const ListingPage = () => {
    const firebase = useFirebase(); // Moved inside component
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    // const [coverPic, setCoverPic] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        await firebase.handleCreateNewPatient(name, age, address);
    
        setName('');
        setAge('');
        setAddress('');
      
    };

    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Your Name : </Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Enter your Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Age :</Form.Label>
                    <Form.Control
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        type="text" 
                        placeholder="Enter Your Age "
                    />
                </Form.Group>
     
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Your Address </Form.Label>
                    <Form.Control
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        type="text" 
                        placeholder="Enter Your Address"
                    />
                </Form.Group>

      
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default ListingPage;