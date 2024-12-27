import React from "react";
import DoctorDetails from "@/Database/DoctorDetails";
import DoctorSingleCard from "../Components/DoctorSingleCard";

function HospitalDetail() {
  return (
    <>
      <div className="hdetails">
        <div className="details">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hospital-de-Bellvitge.jpg/330px-Hospital-de-Bellvitge.jpg"
            alt="hospital"
          />
          <div className="hname">
            <h1>
              <b>Hospital Name</b>
            </h1>
            <br />
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
              quisquam perspiciatis magni maxime temporibus quo, debitis est
              molestias asperiores illo voluptatem aspernatur nemo unde qui.
              Maxime minus assumenda dignissimos illo? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Voluptatem assumenda saepe
              minima, deserunt eum dolore temporibus quos eaque. Totam
              temporibus excepturi nihil eos laborum? Asperiores veniam illo
              magnam numquam id.lore Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis voluptates est reprehenderit optio
              officiis ab omnis accusamus ipsa iure! Vitae odio aliquam minus
              sed recusandae sint possimus vero aliquid architecto!
            </p>
          </div>
        </div>

        <h1 className="ddetailsh">
          <b>Doctor Details</b>
        </h1>

        <div className="doctor-grid">
          {DoctorDetails.map((doctor) => (
            <DoctorSingleCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              age={doctor.age}
              specialization={doctor.specialization}
              experience={doctor.experience}
              contact={doctor.contact}
              availability={doctor.availability}
              image={doctor.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HospitalDetail;
