import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/firebase";
import PatientCardGrid from "../Components/Cards2"; 
import { Container } from 'react-bootstrap';

export default function PatientList() {
  const [patientData, setPatientData] = useState([]); 
  const firebase = useFirebase();

  useEffect(() => {  
    firebase.AllPatient()
      .then((patients) => {
        const patientList = patients.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPatientData(patientList);
      })
      .catch((error) => console.error("Error fetching patients:", error)); 
  }, []);

  return (
    <Container fluid>
      <PatientCardGrid patients={patientData} />
    </Container>
  );
}