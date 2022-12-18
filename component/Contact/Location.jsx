import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

const Location = () => {
    return (
        <div>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={50}
                scrollWheelZoom={false}
                className="map"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={icon}>
                    <Popup>Afri-Pro Services</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Location;
