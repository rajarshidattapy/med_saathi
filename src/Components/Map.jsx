import React from "react";

export const Maps = () => {
    return (
        <>
        <address className="map-text">
            2236, 12th Main Rd <br />
            Kumarswamy layout , 560078 <br />
        </address>

    
        <div className="responsive-map">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.265443078682!2d77.5742242!3d12.954859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592715c4e7f%3A0x7dfaf94e52204678!2sBangalore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1730224064053!5m2!1sen!2sin" 
            width="600" 
            height="450"  
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        </>
    );
}

export default Maps;