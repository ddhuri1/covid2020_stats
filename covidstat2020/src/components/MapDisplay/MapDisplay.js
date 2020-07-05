import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapDisplay.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken ='pk.eyJ1IjoiZGRodXJpMSIsImEiOiJja2M3eGN1am0wbmFzMnJvNHU5MHA4OXN1In0.Ckmy4NZe95uJZ75Vxzkh0w';

/*
function MapDisplay() {
  const mapboxElRef = useRef(null); // DOM element to render map

  
  // Initialize our map
  componentDidMount(() => {
    // Mapbox functionality goes here
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/ddhuri1/ckc8ebhry2clv1ip0vbmf121x",
      center: [10, 40], // initial geo location
      zoom: 2 // initial zoom
    });
  }, []);

  return (
    <div className="MapDisplay">
      <div className="mapContainer">
       
        /*<h1>sdada</h1>
        <div className="mapBox" id = 'map' ref={el => (this.mapboxElRef = el)} />
      </div>
    </div>
  );
 
} */

class MapDisplay extends React.Component {
  componentDidMount() {
  
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/ddhuri1/ckc8ebhry2clv1ip0vbmf121x',
      center: [10, 40],
      zoom: 2
    });
  }
  render() {
    return (
      <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
    );
  }
}
export default MapDisplay;