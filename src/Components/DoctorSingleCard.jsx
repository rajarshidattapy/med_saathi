import { colors } from "@mui/material";
import React from "react";

function DoctorSingleCard(doctor) {
  return (
    <div key={doctor.id} className="ddetails">
      <div className="doctor-card">
        <div className="dimage">
          <img src={doctor.image} alt={`Dr. ${doctor.name}`} />
        </div>
        <div className="dblack">
          <div className="dcards">
            <div className="dname">
              <b>Doctor Name :</b> {doctor.name}
            </div>
            <div className="age">
              <b>Age :</b> {doctor.age}
            </div>
            <div className="specialization">
              <b>Doctor Specialization : </b> {doctor.specialization}
            </div>
            <div className="experience">
              <b>Doctor Experience : </b> {doctor.experience}
            </div>
            <div className="contact">
              <b>Doctor Contact: </b> {doctor.contact}
            </div>
            <div className="availability">
              <b>Doctor Availability :</b> {doctor.availability}
            </div>

            <button className="btn"> View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSingleCard;
