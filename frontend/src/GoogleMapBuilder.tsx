import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const GoogleMapBuilder = (longitude: any, latitude: any) => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBhAewbfEJRWv2yvbv0BQhMwq7qhKWmNU0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};
export { GoogleMapBuilder };
