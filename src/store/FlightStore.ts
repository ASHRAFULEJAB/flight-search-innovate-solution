import { Store } from "pullstate";

const FlightStore = new Store({
  results: [], // Holds flight search results
});

export default FlightStore;
