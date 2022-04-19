import { useMap } from "react-leaflet";

function MapLocation() {
  const map = useMap({ zoom: 5 });
  map.locate({ setView: true });
  console.log("map center", map.getCenter());

  return null;
}

export default MapLocation;
