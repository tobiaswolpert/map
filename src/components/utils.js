import { useEffect, useState } from "react";
import { useMap, Marker, Popup, useMapEvent } from "react-leaflet";

function MapLocation() {
  const [position, setPosition] = useState([]);

  const map = useMapEvent("click", (e) => {
    console.log(e.latlng);
    setPosition((prevPos) => [e.latlng, ...prevPos]);
    console.log("pos", position);
  });
  console.log("pos2", position);

  return position
    ? position.map((pos, idx) => (
        <Marker key={idx} position={pos}>
          <Popup>You are here</Popup>
        </Marker>
      ))
    : null;
}

export default MapLocation;
