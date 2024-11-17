import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/firebase";
import BasicExample from "../Components/Cards2";
import CardGroup from 'react-bootstrap/CardGroup';
export default function PatientImg() {
  const [patientData, setPatientData] = useState([]); 
  const firebase = useFirebase();

  useEffect(() => {  
    firebase.AllPatient().then((patientData) => setPatientData(patientData.docs)); 
  }, []);

  return (
    <div className="container mt -5  ">
        <CardGroup>
      {patientData.map(patientData => 
        <BasicExample  {...patientData.data()}key={patientData.id}  />
      )}
      </CardGroup>
    </div>
  );
}
