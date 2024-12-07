import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/firebase";
import PatientCardGrid from "../Components/Cards2"; 
import { Container, Spinner } from 'react-bootstrap';

export default function PatientList() {
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);  
  const firebase = useFirebase();
 
  useEffect(() => {  
    
    if (!firebase.user) {
      return;
    }

    const fetchPatients = async () => {
      try {
        
        const doctorType = await firebase.getDoctorType(firebase.user);
        if (doctorType) {
          
          const patients = await firebase.getPatientsByDoctorType(doctorType);
          setPatientData(patients);
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);  
      }
    };

    fetchPatients();
  }, [firebase.user]);  

  if (loading) {
    return (
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container fluid>
      <PatientCardGrid patients={patientData} />
    </Container>
  );
}
