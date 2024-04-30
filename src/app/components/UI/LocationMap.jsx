import React, { useEffect, useState } from "react";

const LocationMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    setIsMapLoaded(true);
    return () => {
  
    };
  }, []);

  return (
    <>
      {isMapLoaded && (
        <div className="gmap_canvas inset-0 h-[550px] mb-8 px-4 lg:px-12 bg-white">
          <iframe
            className="gmap_iframe"
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scroll="yes"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Resurrection Miracle Center Church, Mawugulu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default LocationMap;
