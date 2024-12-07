import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../Context/firebase";
import { useNavigate } from "react-router-dom";
import supabase from "../Context/supabase";
import { Container, Spinner } from "react-bootstrap";

const ListingPage = () => {
    const { user, handleCreateNewPatient } = useFirebase();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [photo, setPhoto] = useState(null);
    const [doctorType, setDoctorType] = useState(''); 
    const [loading, setLoading] = useState(false);  

    const handleSubmit = async (e) => {
        setLoading(true);
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
        
        await handleCreateNewPatient(name, age, address, photoUrl, doctorType);

        setName('');
        setAge('');
        setAddress('');
        setPhoto(null);
        setDoctorType('');
        setLoading(false)  // Reset doctor type
    };
    if (loading) {
        return (
          <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <Spinner animation="border" variant="primary" />
          </Container>
        );
      }
    
    if (!user) {
        return (
            <div className="container d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '80vh', backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '30px' }}>
                <div className="text-center">
                    <h3>You need to log in to fill out the form</h3>
                    <Button 
                        variant="primary" 
                        size="lg" 
                        onClick={() => navigate("/login")}
                        style={{ marginTop: '20px' }}
                    >
                        Login To Fill Form
                    </Button>
                </div>
            </div>
        );
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

                    <Form.Group className="mb-3" controlId="formBasicDoctor">
                        <Form.Label>Doctor Type</Form.Label>
                        <Form.Select
                            value={doctorType}
                            onChange={(e) => setDoctorType(e.target.value)}
                            aria-label="Select Doctor Type"
                        >
                            <option value="">Select a Doctor</option>
                            <option value="Neuro">Neuro</option>
                            <option value="Dermato">Dermato</option>
                            <option value="Cardio">Cardio</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="ENT">ENT</option>
                        </Form.Select>
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
