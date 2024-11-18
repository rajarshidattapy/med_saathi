import React from "react";
import Maps from "../Components/Map";
// import Heart from "../Components/Heart";
import Switch from "../Components/Switch";
function Details() {
  return (
    <>
      <div className="detail">
        <h1 className="patient"> Patient</h1>
        <div className="wrap">
          <img src="https://pictographic.azureedge.net/thumbnails/lined/I1A9iqwlWBf7JNvBcT8a.png" alt="person" />
          <div className="innerWrap">
            <div><b>Age : </b> 20 years</div>
            <div><b>Lorem ipsum dolor sit amet, consectetur adipisicing e Lorem ipsum dolor sit amet consectetur adipisinum maxime earum nisi alias voluptas quidem eius itaque similique magni animi maiores culpa omnis ipsam, accusamus a odio?lit. Consectetur asperiores adipisci et magnam doloribus. Accusantl nam facilis vitae mollitia. Ea vero sit ullam.</b></div>
            <div className="symptoms-container">
              <h3 className="header">Patient Symptoms</h3>
              <ul>
                <li>Fever</li>
                <li>Headache</li>
                <li>Cough</li>
                <li className="highlight">Shortness of breath</li>
                <li>Fatigue</li>
                <li>Muscle aches</li>
                <li>Nausea</li>
              </ul>
            </div>
            <div className="approve">
              <h4>Consult ??</h4>
              <Switch />
            </div>
            <input type="submiy" placeholder="start converstaion" className="conversation" />
          </div>
        </div>
        <Maps />
      </div>

    </>

  )
}

export default Details;