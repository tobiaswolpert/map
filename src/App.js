import "./sass/main.scss";
import Sidebar from "./components/sidebar";
import Map from "./components/map";
import { useEffect, useState } from "react";
import geo from "./components/utils";

function App() {
  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchGeo = async () => {
      const coords = await geo();
      setLocation(coords);
      console.log(coords);
    };

    fetchGeo();
  }, []);

  return (
    <div className="App">
      {location ? (
        <div>
          {location.latitude}
          {location.longitude}
        </div>
      ) : null}
      <div className="container">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default App;
