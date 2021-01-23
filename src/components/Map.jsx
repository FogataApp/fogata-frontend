import React from "react";
import "../styles/Map.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyle from "../mapStyles";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  minHeight: "400px",
  maxHeight: "100vh",
  borderRadius: "50px",
};

const center = {
  lat: 6.230833,
  lng: -75.590553,
};

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = ({ lugares }) => {
  console.log(lugares.position);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDZB8T13fuPlDte55tWJUZcAk__76RisIo",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={lugares.position !== undefined ? lugares.position : center}
      options={options}
    >
      {lugares.length > 1 ? (
        lugares.map((lugar) => (
          <Marker key={lugar._id} position={lugar.position} />
        ))
      ) : (
        <Marker position={lugares.position} />
      )}
    </GoogleMap>
  );
};

export default Map;
