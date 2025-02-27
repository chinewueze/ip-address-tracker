import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-color-markers'; // Import the library



// Use the red marker icon from leaflet-color-markers
const redMarkerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = ({ latitude, longitude }) => {
  const position = [ 6.85783 , 7.39577]; // Map center coordinates

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%', zIndex: 0, position: 'relative',  }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={redMarkerIcon}>
        <Popup>
          THIS IS YOU!
        </Popup>
      </Marker>
    </MapContainer>
  );
};



export default MapComponent;