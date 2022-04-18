import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ location }) => {
  console.log("location", location ? location.latitude : 0);
  return (
    // See the react Leaflet API tomorrow
    <div className="map">
      <MapContainer
        className="map__container"
        center={
          location ? [location.latitude, location.longitude] : [51.505, -0.09]
        }
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
