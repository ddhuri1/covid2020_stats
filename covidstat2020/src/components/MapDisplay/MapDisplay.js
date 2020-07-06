import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapDisplay.css";
import "mapbox-gl/dist/mapbox-gl.css";
import lookup from 'country-code-lookup';
import useSWR from "swr";

const config = require('./config.js');
const key = config.googleMapsKey;

mapboxgl.accessToken = key;

function MapDisplay() {
  const mapboxElRef = useRef(null); 
  
  const fetcher = url =>
    fetch(url)
      .then(r => r.json())
      .then(data =>
        data.map((point, index) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              point.long,
              point.lat
            ]
          },
          properties: {
            id: index,
            country: point.countryRegion,
            province: point.combinedKey,
            cases: point.confirmed,
            recovered: point.recovered,
            active: point.active,
            deaths: point.deaths,
            incidentRate: point.incidentRate,
            iso1: point.iso3,
            iso2: point.iso2
          }
        }))
      );

  const { data } = useSWR("https://covid19.mathdro.id/api/confirmed", fetcher)
  
  useEffect(() => {
    if (data) {
      const map = new mapboxgl.Map({
        container: mapboxElRef.current,
        //style: 'mapbox://styles/ddhuri1/ckc8ebhry2clv1ip0vbmf121x',
        style: "mapbox://styles/ddhuri1/ckc9rb7ee2eqs1iqv032xzf7j",
        center: [ -96.96369, 37.44737],
        zoom: 3.90
      });
      map.addControl(new mapboxgl.NavigationControl());
      map.once("load", function() {
        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: data
          }
        });

        map.addLayer({
          id: "circles",
          source: "points",
          type: "circle",
          paint: {
            "circle-opacity": 0.35,
            "circle-stroke-width": [
              "interpolate",
              ["linear"],
              ["get", "cases"],
              1,1,
              25000,1.30,
              50000,1.75
            ],
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["get", "cases"],
              100,2,
              500,4,
              2000,5,
              10000,6,
              25000,9,
              50000,10
            ],
            "circle-color": [
              "interpolate",
              ["linear"],
              ["get", "cases"],
              1, "#f1eef6",
              500,"#d4b9da",
              2000,"#c994c7",
              4000, "#df65b0",
              6000,"#dd1c77",
              50000,"#980043"
            ]
          }
        });

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        });

        let lastId;

        map.on("mousemove", "circles", e => {
          const id = e.features[0].properties.id;
          if (id !== lastId) {
            lastId = id;
            const {
              cases,
              recovered,
              active,
              deaths,
              country,
              province,
              incidentRate,
              iso1,
              iso2
            } = e.features[0].properties;

            // Change the pointer type on mouseenter
            map.getCanvas().style.cursor = "pointer";

            const coordinates = e.features[0].geometry.coordinates.slice();

            const provinceHTML = province !== "null" ? `<p>Province: <b>${province}</b></p>` : "";
            const mortalityRate = ((deaths / cases) * 100).toFixed(2);
            const countryISO = iso1 || iso2;
            const flagCountryISO = lookup.byCountry(country)?.iso2 || lookup.byInternet(country)?.iso2;
            const countryFlagHTML = Boolean(countryISO) ? `<img src="https://www.countryflags.io/${flagCountryISO}/flat/64.png"></img>` : "";
            const HTML =
                `<p>Country: <b>${country}</b></p>
                ${provinceHTML}
                <p>Total Cases: <b>${cases}</b></p>
                <p>Recovered: <b>${recovered}</b></p>
                <p>Active: <b>${active}</b></p>
                <p>Deaths: <b>${deaths}</b></p>
                <p>Mortality Rate: <b>${mortalityRate}%</b></p>
                <p>Incident Rate: <b>${incidentRate}%</b></p>
                ${countryFlagHTML}`;

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            popup
              .setLngLat(coordinates)
              .setHTML(HTML)
              .addTo(map);
          }
        });

        map.on("mouseleave", "circles", function() {
          lastId = undefined;
          map.getCanvas().style.cursor = "";
          popup.remove();
        });
      });
    }
  }, [data]);
      
  return (
        <div ref={mapboxElRef } className="mapWrapper" />
  );
} 

export default MapDisplay;