import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../Context/firebase";
import { useNavigate } from "react-router-dom";
import supabase from "../Context/supabase";

const ListingPage = () => {
    const { user, handleCreateNewPatient } = useFirebase();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let photoUrl = null;
        if (photo) {
            const fileExt = photo.name.split('.').pop();
            const fileName = `public/${Date.now()}.${fileExt}`;
            const { error } = await supabase
                .storage
                .from('images') 
                .upload(fileName, photo);
            if (error) {
                console.log(error.message);
                return;
            }

            const res = await supabase
                .storage
                .from('images')
                .createSignedUrl(fileName, 60 * 60 * 24 * 365);

            if (res.error) {
                console.log(res.error.message);
                return;
            }
            photoUrl = res.data.signedUrl;
        }
        
        await handleCreateNewPatient(name, age, address, photoUrl);

        // Clear the form fields after submission
        setName('');
        setAge('');
        setAddress('');
        setPhoto(null); 
    };

    if (!user) {
        return (<div className="container mt-5"><a href="/login">Login To Fill Form</a> </div>);
    } else {
        return (
            <div className="container mt-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name :</Form.Label>
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
                            placeholder="Enter Your Age"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            type="text"
                            placeholder="Enter Your Address"
                        />
                    </Form.Group>

                   
                    <Form.Group className="mb-3" controlId="formBasicFile">
                        <Form.Label>Upload Your Photo</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        );
    }
};

export default ListingPage;
