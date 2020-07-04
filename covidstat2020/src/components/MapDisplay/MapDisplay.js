import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import useSWR from "swr";
import lookup from "country-code-lookup";
import "./MapDisplay.scss";
// Need mapbox css for tooltips later in the tutorial
import "mapbox-gl/dist/mapbox-gl.css";


//mapboxgl.accessToken = "sk.eyJ1IjoiZGRodXJpMSIsImEiOiJja2M3eGhheDUxNjkwMnJvYmI2Z3c5eGhzIn0.qPvEQbHWS1Pd5JPhO_SXqw";
mapboxgl.accessToken = "pk.eyJ1IjoiZGRodXJpMSIsImEiOiJja2M3eGN1am0wbmFzMnJvNHU5MHA4OXN1In0.Ckmy4NZe95uJZ75Vxzkh0w";
function MapDisplay() {
  const mapboxElRef = useRef(null); // DOM element to render map

  // Fetch data here

  // Initialize our map
  useEffect(() => {
    // Mapbox functionality goes here
    new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
      center: [10, 40], // initial geo location
      zoom: 2 // initial zoom
    });
  }, []);

  return (
    <div className="App">
      <div className="mapContainer">
        {/* Mapbox Container */}
        <div className="mapBox" ref={mapboxElRef} />
      </div>
    </div>
  );
}



export default MapDisplay;