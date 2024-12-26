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
import PassengerDropdown from "@/pages/PassengerDropdown";
import { Airport } from "@/types";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const [airports, setAirports] = useState([]);
  // console.log(airports)
  const [filteredAirports, setFilteredAirports] = useState<any[]>([]);
  //   console.log(airports);
  const [departure, setDeparture] = useState<Airport | null>(null);
  const [arrival, setArrival] = useState<Airport | null>(null);

  // const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy");

  const [loading, setLoading] = useState(false);
  const [journeyType, setJourneyType] = useState("One way");
  const [searchLoading, setSearchLoading] = useState(false);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  });

  const [dayName, setDayName] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString(undefined, { weekday: "long" }); // Get day name
  });
  const [returnDate, setReturnDate] = useState("");
  const [returnDayName, setReturnDayName] = useState("");
  const navigate = useNavigate();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    const newDay = new Date(selectedDate).toLocaleDateString(undefined, {
      weekday: "long",
    });
    setDayName(newDay);
  };

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

  // const handleSearch = async () => {
  //   if (!departure || !arrival || !date) {
  //     alert("All fields are required.");
  //     return;
  //   }

  //   setSearchLoading(true); // Trigger loading for the search
  //   try {
  //     const response = await axios.post("/flight/search", {
  //       journey_type: journeyType,
  //       segment: [
  //         {
  //           departure_airport: departure,
  //           arrival_airport: arrival,
  //           departure_date: date,
  //         },
  //       ],
  //       travelers_adult: adults,
  //       // travelers_child: children,
  //       // travelers_infants: infants,
  //       // travel_class: travelClass,
  //     });

  //     if (response.data.status === "success") {
  //       console.log("Search results:", response.data.data);
  //       FlightStore.update((s) => {
  //         s.results = response.data.data || [];
  //       });
  //       // Handle successful response
  //       // setPassenger(1); // Update the passenger count
  //       // setTravelClass("Economy"); // Set default travel class
  //     } else {
  //       console.error("Search failed:", response.data.reason);
  //       alert(`Search failed: ${response.data.reason}`);
  //     }
  //   } catch (error) {
  //     console.error("Error during flight search:", error);
  //     alert("An error occurred while searching for flights.");
  //   } finally {
  //     setSearchLoading(false); // Stop loading after the process ends
  //   }
  // };
  const handleSearch = async () => {
    if (!departure || !arrival || !date) {
      alert("All fields are required.");
      return;
    }

    setSearchLoading(true);
    try {
      const response = await axios.post("/flight/search", {
        journey_type: journeyType,
        segment: [
          {
            departure_airport: departure.code, // Dynamically use city_code
            arrival_airport: arrival.code, // Dynamically use city_code
            departure_date: date,
          },
        ],
        travelers_adult: adults,
      });

      if (response.data.status === "success") {
        FlightStore.update((s) => {
          s.results = response.data.data.map((flight: any) => ({
            ...flight,
            departure,
            arrival,
          }));
        });
        navigate("/results"); // Redirect to Flight Results page
      } else {
        alert(`Search failed: ${response.data.reason}`);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while searching for flights.");
    } finally {
      setSearchLoading(false);
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

  // const renderDropdown = (
  //   label: string,
  //   icon: JSX.Element,
  //   selectedValue: string,
  //   onSelect: (value: string) => void,
  //   className: string
  // ) => (
  //   <div className={` items-center space-x-2 ${className}`}>
  //     <div className="flex items-center space-x-2">
  //       <label className="text-sm font-medium text-gray-600">{label}</label>
  //       {icon}
  //     </div>
  //     <div className="flex-grow">
  //       {/* <label className="block text-sm font-medium text-gray-600 mb-1">
  //         {label}
  //       </label> */}
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="outline" className="w-full">
  //             {selectedValue || `Select ${label}`}
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent className="w-72 shadow-lg rounded bg-white max-h-80 overflow-y-auto">
  //           <input
  //             type="text"
  //             placeholder={`Search ${label}`}
  //             onChange={(e) => handleSearchFilter(e.target.value)}
  //             className="w-full p-2 border-b text-sm outline-none"
  //           />
  //           {loading ? (
  //             <div className="p-4 text-center text-gray-600">Loading...</div>
  //           ) : (
  //             filteredAirports.map((airport: any) => (
  //               <DropdownMenuItem
  //                 key={airport.code}
  //                 onClick={() => onSelect(airport.city_code)}
  //                 className="flex items-start justify-between p-2 hover:bg-gray-50 cursor-pointer"
  //               >
  //                 <div>
  //                   <p className="text-sm font-medium text-gray-800">
  //                     {airport.city_name}, {airport.country_name}
  //                   </p>
  //                   <p className="text-xs text-gray-500">
  //                     {airport.airport_name}
  //                   </p>
  //                 </div>
  //                 <span className="text-sm text-gray-600 font-bold">
  //                   {airport.city_code}
  //                 </span>
  //               </DropdownMenuItem>
  //             ))
  //           )}
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     </div>
  //   </div>
  // );

  const renderDropdown = (
    label: string,
    icon: JSX.Element,
    selectedValue: Airport | null,
    onSelect: (value: Airport) => void,
    className: string,
    defaultValue: Airport
  ) => (
    <div className={`items-center space-x-2 ${className}`}>
      <div className="flex justify-between space-x-2">
        <label className="text-sm font-medium text-gray-600">{label}</label>
        {icon}
      </div>
      <div className="flex-grow">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full text-left px-3 h-12 bg-transparent rounded text-wrap"
            >
              {selectedValue ? (
                <div>
                  <p className="text-base font-semibold text-gray-800">
                    {selectedValue.city_name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedValue.airport_name}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-base font-semibold text-gray-800">
                    {defaultValue.city_name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {defaultValue.airport_name}
                  </p>
                </div>
              )}
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
              filteredAirports.map((airport: Airport) => (
                <DropdownMenuItem
                  key={airport.code}
                  onClick={() => onSelect(airport)} // Pass entire Airport object
                  className="flex items-start justify-between p-2 hover:bg-gray-50 cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {airport.city_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {airport.airport_name}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 font-bold">
                    {airport.code}
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
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto mt-10">
      {/* Tabs */}
      <div className="lg:flex gap-6 justify-between">
        {" "}
        <div className="flex space-x-4 justify-center mb-6">
          {["Flights", "Hotels", "Tours", "Visa"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded text-sm font-medium ${
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
      </div>

      {/* Search Form */}
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mb-6">
        {renderDropdown(
          "From",
          <MdAirplanemodeActive className="text-purple-600 text-2xl" />,
          departure
            ? {
                city_name: departure.city_name || "Unknown City",
                airport_name: departure.airport_name || "Unknown Airport",
              }
            : null,
          setDeparture,
          "bg-[#F5EEFD] p-4 rounded text-left",
          {
            city_name: "New York",
            airport_name: "John F. Kennedy International Airport",
            code: "JFK",
          }
        )}

        {renderDropdown(
          "To",
          <MdAirplanemodeInactive className="text-purple-600 text-2xl" />,
          arrival
            ? {
                city_name: arrival.city_name || "Unknown City",
                airport_name: arrival.airport_name || "Unknown Airport",
              }
            : null,
          setArrival,
          "bg-[#F5EEFD] p-4 rounded text-left",
          {
            city_name: "Dhaka",
            airport_name: "Hazrat Shahjalal International Airport",
            code: "DAC",
          }
        )}

        {/* Departure Date */}
        <div className="bg-[#F5EEFD] p-4 rounded-lg  flex flex-col">
          <label className="block text-sm font-medium text-gray-600 mb-1 text-left">
            Journey Date
          </label>
          <div className="flex items-center justify-between">
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="bg-transparent font-semibold text-gray-800 py-2 rounded-md w-full"
            />
          </div>
          <span className=" text-sm font-medium text-gray-500 text-left">
            {dayName}
          </span>
        </div>

        {/* Return Date */}
        {journeyType === "Roundtrip" && (
          <div className="bg-purple-50 p-4 rounded-lg  flex flex-col">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Return Date
            </label>
            <div className="flex items-center justify-between">
              <input
                type="date"
                value={returnDate}
                onChange={(e) => {
                  const selectedDate = e.target.value;
                  setReturnDate(selectedDate);

                  // Calculate and set day name
                  const day = new Date(selectedDate).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                    }
                  );
                  setReturnDayName(day);
                }}
                className="bg-white border border-gray-300 text-gray-800 p-2 rounded-md w-full"
              />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-500">
              Day: {returnDayName || "Select a date"}
            </span>
          </div>
        )}

        <PassengerDropdown
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          infants={infants}
          setInfants={setInfants}
          travelClass={travelClass}
          setTravelClass={setTravelClass}
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        disabled={searchLoading}
        className={`w-[200px] py-3 rounded text-white ${
          searchLoading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {searchLoading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default FlightSearch;
