import "./App.css";
import FlightResults from "./components/search/FlightResult";
import FlightSearch from "./components/search/FlightSearch";

function App() {
  return (
    <>
      <div>
        <FlightSearch />
        <FlightResults />
      </div>
    </>
  );
}

export default App;
