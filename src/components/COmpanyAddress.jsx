import React from "react";

const COmpanyAddress = () => {
  return (
    <div>
      <h2>Company Addree</h2>
      <div className="map-embadded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5178791258227!2d77.24684567416512!3d28.554207687635593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3001e621dc7%3A0x6c56b0bcb31b6adc!2sLOCGFX%20Private%20Limited!5e0!3m2!1sen!2sin!4v1721192441238!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default COmpanyAddress;
