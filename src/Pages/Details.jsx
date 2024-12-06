import React from "react";
import { useLocation } from "react-router-dom";
import Maps from "../Components/Map";
import Switch from "../Components/Switch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFirebase } from "../Context/firebase";
import { useState } from "react";

function Details() {
  const location = useLocation();
  const { name, age, address } = location.state || {};
  const params = useParams();
  const firebase = useFirebase();
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    console.log('Patient ID:', params.PatientId);
    firebase.getPatientById(params.PatientId).then((patient) => {
      console.log('Patient Data:', patient.data());
      setPatientDetails(patient.data());
    }).catch(error => {
      console.error('Error fetching patient:', error);
    });
  }, [params.PatientId]);

  if (!patientDetails) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <div className="detail">
        <h1 className="patient">Patient Details</h1>
        <div className="wrap">
        <img src="https://pictographic.azureedge.net/thumbnails/lined/I1A9iqwlWBf7JNvBcT8a.png" alt="person" />

          <img src={patientDetails.photoUrl} alt="" className="avatar" />
          <div className="innerWrap">
            <div><b>Name: </b> {patientDetails.name}</div>
            <div><b>Age: </b> {patientDetails.age} years</div>
            <div><b>Address: </b> {patientDetails.address}</div>
            <div className="symptoms-container">
              {/* <h3 className="header">Patient Symptoms</h3>
              <ul>
                <li>Fever</li>
                <li>Headache</li>
                <li>Cough</li>
                <li className="highlight">Shortness of breath</li>
                <li>Fatigue</li>
                <li>Muscle aches</li>
                <li>Nausea</li>
              </ul> */}
            </div>
            <div className="approve">
              <h4>Consult ??</h4>
              <Switch />
            </div>
            <input type="submit" placeholder="start conversation" className="conversation" />
          </div>
        </div>
        <Maps  address = {patientDetails.address}/>
      </div>
    </>
  )
}

export default Details;