import { MapContainer, TileLayer } from "react-leaflet";

import MapLocation from "./utils";

const Map = () => {
  return (
    <div className="map">
      <MapContainer
        className="map__container"
        center={[51.505, -0.09]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapLocation />
      </MapContainer>
    </div>
  );
};

export default Map;
