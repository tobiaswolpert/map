import "./sass/main.scss";
import Sidebar from "./components/sidebar";
import Map from "./components/map";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default App;
