import React from 'react'

import Maps from '@/Components/Map'

function Ankit() {
  return (
    <>
      <div className="patient_ui">
        <div>
        <div className='rectangle'>
          {/* Inner Rectangle */}
          <div className='inner_rectangle'>
          </div>

          {/* Inner text */}
          <div className='inner_text'>
            <div className="name"><b>Name:</b> Ankit</div>
            <div className="age"><b>Age:</b> 20</div>
            <div className="address"><b>Address:</b> Bangalore</div>
            <div className="gender"><b>Gender:</b> Male</div>
            <div className="contact"><b>Contact:</b> 987654321</div>
          </div>
          
        </div>
        <div className="map-container" style={{ marginTop: '20px', width: '90%', position: 'absolute', bottom: '20px' }}>
            <Maps />
          </div>
        </div>

        <div className="right-side-content">
          <div className="cards-container">
            <div className='temp'>
              <div className="temperature"><b>Temperature:</b> </div>
              <div style={{
                fontSize: "60px",
                color: "black",
                textShadow: "2px 2px 0 white, -2px -2px 0 white, -2px 2px 0 white, 2px -2px 0 white"
              }}>
                98°F
              </div>
            </div>

            <div className="air">
              <div className="air_quality"><b>Air Quality:</b> </div>
              <div style={{
                fontSize: "60px",
                color: "black",
                textShadow: "2px 2px 0 white, -2px -2px 0 white, -2px 2px 0 white, 2px -2px 0 white"
              }}>50 AQI</div>
            </div>
          </div>

          <div className="search">
            <div><b>Search Nearby Hospital</b></div>
            <br/>
            <button className="search_button" 
            >Search</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ankit