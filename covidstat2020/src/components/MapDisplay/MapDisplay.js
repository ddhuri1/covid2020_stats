import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapDisplay.css";
import "mapbox-gl/dist/mapbox-gl.css";
import useSWR from "swr";
import lookup from "country-code-lookup";
mapboxgl.accessToken ='pk.eyJ1IjoiZGRodXJpMSIsImEiOiJja2M3eGN1am0wbmFzMnJvNHU5MHA4OXN1In0.Ckmy4NZe95uJZ75Vxzkh0w';

function MapDisplay() {
  const mapboxElRef = useRef(null); // DOM element to render map
  const fetcher = url =>
    fetch(url)
      .then(r => r.json())
      .then(data =>
        data.map((point, index) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              point.coordinates.longitude,
              point.coordinates.latitude
            ]
          },
          properties: {
            id: index,
            country: point.country,
            province: point.province,
            cases: point.stats.confirmed,
            deaths: point.stats.deaths
          }
        }))
      );


  // Fetching our data with swr package
  const { data } = useSWR("https://corona.lmao.ninja/v2/jhucsse", fetcher)
  // Initialize our map
  useEffect(() => {
    if (data) {
      const map = new mapboxgl.Map({
        container: mapboxElRef.current,
        //style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
        style: 'mapbox://styles/ddhuri1/ckc8ebhry2clv1ip0vbmf121x',
        center: [16, 27],
        zoom: 2
      });
      map.addControl(new mapboxgl.NavigationControl());

      map.once("load", function() {
        // Add our SOURCE
        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: data
          }
        });

        map.addLayer({
          id: "circles",
          source: "points", // this should be the id of source
          type: "circle",
          paint: {
            "circle-opacity": 0.75,
            "circle-stroke-width": [
              "interpolate",
              ["linear"],
              ["get", "cases"],
              1,
              1,
              100000,
              1.75
            ],
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["get", "cases"],
              1,
              4,
              1000,
              8,
              4000,
              10,
              8000,
              14,
              12000,
              18,
              100000,
              40
            ],
            "circle-color": [
              "interpolate",
              ["linear"],
              ["get", "cases"],
              1,
              "#ffffb2",
              5000,
              "#fed976",
              10000,
              "#feb24c",
              25000,
              "#fd8d3c",
              50000,
              "#fc4e2a",
              75000,
              "#e31a1c",
              100000,
              "#b10026"
            ]
          }
        });

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        });

        let lastId;


      
  return (
        <div ref={mapboxElRef } className="mapWrapper" />
  );
} 

/*
class MapDisplay extends React.Component {
  
  componentDidMount() {
    
    const map = new mapboxgl.Map({
      container: this.mapboxElRef.current,
      style: 'mapbox://styles/ddhuri1/ckc8ebhry2clv1ip0vbmf121x',
      center: [10, 40],
      zoom: 2
    });
  }
  render() {
    return (
      <div ref={el => (this.mapboxElRef = el)} className="mapWrapper" />
    );
  }
}

*/
export default MapDisplay;