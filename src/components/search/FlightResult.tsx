import { Slider } from "@/components/ui/slider"; // Shadcn Slider Component
import FlightStore from "@/store/FlightStore";
import { useStoreState } from "pullstate";
import { useEffect, useState } from "react";

const FlightResults = () => {
  const results = useStoreState(FlightStore, (state) => state.results);
  const [filters, setFilters] = useState({
    price: { min: 0, max: 0, selected: [0, 0] },
  });

  const [timeRemaining, setTimeRemaining] = useState(1800); // 30-minute timer

  useEffect(() => {
    if (results.length > 0) {
      const prices = results.map((flight) => Number(flight.price?.total || 0));
      setFilters({
        price: {
          min: Math.min(...prices),
          max: Math.max(...prices),
          selected: [Math.min(...prices), Math.max(...prices)],
        },
      });
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [results]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      price: { ...prev.price, selected: value },
    }));
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div>
          <h2 className="text-lg font-semibold">
            {results[0]?.departure.city} ({results[0]?.departure.code}) —{" "}
            {results[0]?.arrival.city} ({results[0]?.arrival.code})
          </h2>
          <p className="text-sm text-gray-500">
            Round Trip • {results[0]?.calendar_flight_date} • Traveler(s) •
            Economy
          </p>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Modify
        </button>
      </div> */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div>
          {results.length > 0 &&
          results[0]?.flight_group?.[0]?.routes?.length > 0 ? (
            <>
              <div>
                <h2 className="text-lg font-semibold">
                  {results[0]?.departure.city} ({results[0]?.departure.code}) —{" "}
                  {results[0]?.arrival.city} ({results[0]?.arrival.code})
                </h2>
                <p className="text-sm text-gray-500">
                  Round Trip • {results[0]?.calendar_flight_date} • Traveler(s)
                  • Economy
                </p>
              </div>
            </>
          ) : (
            <h2 className="text-lg font-semibold text-center">
              No Routes Found
            </h2>
          )}
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Modify
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-600">
              Time Remaining
            </h3>
            <p className="text-2xl font-bold">{formatTime(timeRemaining)}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">Price Range</h3>
            <Slider
              defaultValue={[filters.price.min, filters.price.max]}
              min={filters.price.min}
              max={filters.price.max}
              step={100}
              value={filters.price.selected}
              onValueChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>BDT {filters.price.selected[0]}</span>
              <span>BDT {filters.price.selected[1]}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Flight Schedules</h3>
            <div className="flex gap-4 mt-2">
              <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">
                Departure
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                Arrival
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              {["00-06 AM", "06-12 PM", "12-06 PM", "06-12 AM"].map(
                (time, idx) => (
                  <button
                    key={idx}
                    className="px-4 py-2 border rounded-lg text-sm"
                  >
                    {time}
                  </button>
                )
              )}
            </div>
          </div>
        </aside>

        {/* Flight Results */}
        <main className="w-full lg:w-3/4  p-4 rounded-lg shadow-md">
          <div className="lg:flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">
                Cheapest
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                Earliest
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                Fastest
              </button>
            </div>
            <p className="text-sm text-gray-500">
              {results.length} Available Flight{results.length !== 1 ? "s" : ""}
            </p>
          </div>

          {results.length === 0 ? (
            <p className="text-center text-gray-600">No flights found.</p>
          ) : (
            <div className="grid gap-6">
              {results.map((flight, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={flight.flight_group[0]?.routes[0]?.aircraft?.picture}
                      alt="airline logo"
                      className="w-12 h-12"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {flight.flight_group[0]?.routes[0]?.aircraft?.name ||
                          "Unknown"}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {flight.flight_group[0]?.no_of_stops_title ||
                          "Non-stop"}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-xl font-bold text-green-600">
                      BDT {flight.price?.total || "0"}
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FlightResults;
