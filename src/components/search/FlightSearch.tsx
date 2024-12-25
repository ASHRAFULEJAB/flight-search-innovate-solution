/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { MdAirplanemodeActive, MdAirplanemodeInactive } from "react-icons/md";
import axios from "../utils/api";
import FlightStore from "@/store/FlightStore";

const FlightSearch = () => {
  const [airports, setAirports] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState<any[]>([]);
  //   console.log(airports);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [journeyType, setJourneyType] = useState("One way");

  useEffect(() => {
    const fetchAirports = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/tools/airport-autosuggetion-data");
        setAirports(response.data);
        setFilteredAirports(response.data); // Initialize filtered data
      } catch (error) {
        console.error("Error fetching airports:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAirports();
  }, []);

  const handleSearch = async () => {
    if (!departure || !arrival || !date) {
      alert("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/flight/search", {
        journey_type: journeyType,
        segment: [
          {
            departure_airport: departure,
            arrival_airport: arrival,
            departure_date: date,
          },
        ],
        travelers_adult: 1,
      });

      if (response.data.status === "success") {
        console.log("Search results:", response.data.data);
        FlightStore.update((s) => {
          s.results = response.data.data || [];
        });
        // Handle successful response
      } else {
        console.error("Search failed:", response.data.reason);
        alert(`Search failed: ${response.data.reason}`);
      }
    } catch (error) {
      console.error("Error during flight search:", error);
      alert("An error occurred while searching for flights.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchFilter = (query: string) => {
    const filtered = airports.filter((airport: any) => {
      const cityName = airport.city_name?.toLowerCase() || "";
      const code = airport.code?.toLowerCase() || "";
      const airportName = airport.airport_name?.toLowerCase() || "";

      return (
        cityName.includes(query.toLowerCase()) ||
        code.includes(query.toLowerCase()) ||
        airportName.includes(query.toLowerCase())
      );
    });
    setFilteredAirports(filtered);
  };

  const renderDropdown = (
    label: string,
    icon: JSX.Element,
    selectedValue: string,
    onSelect: (value: string) => void
  ) => (
    <div className="flex items-center space-x-2">
      {icon}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {label}
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              {selectedValue || `Select ${label}`}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 shadow-lg rounded bg-white max-h-80 overflow-y-auto">
            <input
              type="text"
              placeholder={`Search ${label}`}
              onChange={(e) => handleSearchFilter(e.target.value)}
              className="w-full p-2 border-b text-sm outline-none"
            />
            {loading ? (
              <div className="p-4 text-center text-gray-600">Loading...</div>
            ) : (
              filteredAirports.map((airport: any) => (
                <DropdownMenuItem
                  key={airport.code}
                  onClick={() => onSelect(airport.city_code)}
                  className="flex items-start justify-between p-2 hover:bg-gray-50 cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {airport.city_name}, {airport.country_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {airport.airport_name}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 font-bold">
                    {airport.city_code}
                  </span>
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-10">
      {/* Tabs */}
      <div className="flex space-x-4 justify-center mb-6">
        {["Flights", "Hotels", "Tours", "Visa"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              tab === "Flights"
                ? "bg-purple-600 text-white"
                : "bg-transparent border border-purple-600 text-purple-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Journey Type */}
      <div className="flex space-x-6 justify-center mb-6">
        {["One way", "Roundtrip", "Multi city"].map((type) => (
          <label key={type} className="flex items-center space-x-2 text-sm">
            <input
              type="radio"
              name="journeyType"
              value={type}
              checked={journeyType === type}
              onChange={(e) => setJourneyType(e.target.value)}
              className="accent-purple-600"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      {/* Search Form */}
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mb-6">
        {renderDropdown(
          "From",
          <MdAirplanemodeActive className="text-purple-600 text-2xl" />,
          departure,
          setDeparture
        )}
        {renderDropdown(
          "To",
          <MdAirplanemodeInactive className="text-purple-600 text-2xl" />,
          arrival,
          setArrival
        )}
        {/* Leaving From */}
        {/* <div className="flex items-center space-x-2">
          <MdAirplanemodeActive className="text-purple-600 text-2xl" />
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              From
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  {departure || "Select Departure Airport"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 shadow-lg rounded bg-white max-h-80 overflow-y-auto">
                {loading ? (
                  <div className="p-4 text-center text-gray-600">
                    Loading...
                  </div>
                ) : (
                  <>
                    <h4 className="px-4 py-2 text-sm font-medium text-gray-500">
                      Popular Cities
                    </h4>
                    {airports.map((airport: any) => (
                      <DropdownMenuItem
                        key={airport.code}
                        onClick={() => setDeparture(airport.code)}
                        className="flex items-start justify-between p-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {airport.city_name}, {airport.country_name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {airport.airport_name}
                          </p>
                        </div>
                        <span className="text-sm text-gray-600 font-bold">
                          {airport.code}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div> */}

        {/* Going To */}
        {/* <div className="flex items-center space-x-2">
          <MdAirplanemodeInactive className="text-purple-600 text-2xl" />
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              To
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  {arrival || "Select Arrival Airport"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 shadow-lg rounded bg-white max-h-80 overflow-y-auto">
                {loading ? (
                  <div className="p-4 text-center text-gray-600">
                    Loading...
                  </div>
                ) : (
                  <>
                    <h4 className="px-4 py-2 text-sm font-medium text-gray-500">
                      Popular Cities
                    </h4>
                    {airports.map((airport: any) => (
                      <DropdownMenuItem
                        key={airport.code}
                        onClick={() => setArrival(airport.code)}
                        className="flex items-start justify-between p-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {airport.city_name}, {airport.country_name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {airport.airport_name}
                          </p>
                        </div>
                        <span className="text-sm text-gray-600 font-bold">
                          {airport.code}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div> */}

        {/* Departure Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Journey Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 bg-gray-100 border rounded"
          />
        </div>

        {/* Return Date */}
        {journeyType === "Roundtrip" && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Return Date
            </label>
            <input
              type="date"
              className="w-full p-3 bg-gray-100 border rounded"
            />
          </div>
        )}
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        disabled={loading}
        className={`w-full py-3 rounded text-white ${
          loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default FlightSearch;
