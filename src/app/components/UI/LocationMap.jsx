import React, { useEffect, useState } from "react";

const LocationMap = ({id}) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    setIsMapLoaded(true);
    return () => {
  
    };
  }, []);

  return (
    <>
      {isMapLoaded && (
       <iframe
       id={id} 
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.811944685293!2d32.5366758736397!3d0.10242916431791425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8f0013af0bdf%3A0xe96ca0ca35b4d88b!2sResurrection%20Miracle%20Center%20Church!5e0!3m2!1sen!2sca!4v1714451305400!5m2!1sen!2sca"
       width="100%"
       height="450"
       style={{ border: 0 }}
       allowFullScreen
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
     />
      )}
    </>
  );
};

export default LocationMap;
