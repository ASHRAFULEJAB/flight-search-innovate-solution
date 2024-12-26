import { FlightResult } from "@/types";
import { Store } from "pullstate";

const FlightStore = new Store({
  results: [] as FlightResult[], // Type results
  
});

export default FlightStore;
