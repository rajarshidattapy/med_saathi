import React from "react";
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { FaUserMd, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function PatientCardGrid({ patients }) {
  const navigate = useNavigate();

  return (
    <Row xs={1} md={3} className="g-4 p-4">
      {patients.map((patient) => (
        <Col key={patient.id}>
          <Card 
            className="h-100 shadow-sm hover-lift" 
            style={{ 
              transition: 'transform 0.3s ease',
              borderLeft: '4px solid #007bff'
            }}
          >
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0 text-primary">
                  <FaUserMd className="me-2" />
                  {patient.name}
                </h5>
                <Badge bg="secondary">Patient ID: {parseInt(patient.id)}</Badge>
              </div>
              
              <div className="mb-2">
                <FaBirthdayCake className="me-2 text-muted" />
                <span>Age: {patient.age} years</span>
              </div>
              
              <div className="mb-3">
                <FaMapMarkerAlt className="me-2 text-muted" />
                <span>{patient.address}</span>
              </div>
              
              <button 
                className="btn btn-outline-primary w-100"
                onClick={() => navigate(`/patient/view/${patient.id}`)}
              >
                View Details
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PatientCardGrid;