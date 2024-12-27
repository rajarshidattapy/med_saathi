import React from "react";
import RecipeReviewCard from "@/Components/HospitalCard";
import Hospital_Data from "../Database/HospitalData";

const Hospital = () => {
  return (
    <div className="hospital-grid">
      {Hospital_Data.map((item) => (
        <div id={item.id} className="hospital-card">
          <RecipeReviewCard
            id={item.id}
            name={item.name}
            image={item.image}
            year={item.year}
            address={item.address}
            bigtitle={item.bigtitle}
          />
        </div>
      ))}
    </div>
  );
};

export default Hospital;
