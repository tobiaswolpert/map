import "./sass/main.scss";
import Sidebar from "./components/sidebar";
import Map from "./components/map";
import { useEffect, useState } from "react";
import geo from "./components/utils";

// Check
function App() {
  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchGeo = async () => {
      const coords = await geo();
      setLocation(coords);
    };

    fetchGeo();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Map location={location} />
      </div>
    </div>
  );
}

export default App;
