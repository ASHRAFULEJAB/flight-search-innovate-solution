import { Slider } from "@/components/ui/slider"; // Shadcn Slider Component
import FlightStore from "@/store/FlightStore";
import { FlightSearchResult } from "@/types";
import { useStoreState } from "pullstate";
import { useEffect, useRef, useState } from "react";

const FlightResults = () => {
  const results: FlightSearchResult[] = useStoreState(
    FlightStore,
    (state) => state.results
  );
  console.log(results);
  const [imgBBUrls, setImgBBUrls] = useState<string[]>([]);
  const cachedImgBBUrls = useRef(new Map());

  const [filters, setFilters] = useState({
    price: { min: 0, max: 0, selected: [0, 0] },
  });

  const [timeRemaining, setTimeRemaining] = useState(1800); // 30-minute timer
  const defaultAirlineImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/850px-Emirates_logo.svg.png";

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

  const uploadImageUrlToImgBB = async (imageUrl: string) => {
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

    if (!apiKey) {
      console.error("ImgBB API key is missing!");
      return null;
    }

    try {
      const imageResponse = await fetch(imageUrl);
      const imageBlob = await imageResponse.blob();

      const formData = new FormData();
      formData.append("image", imageBlob);

      const uploadResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await uploadResponse.json();
      if (result.success) {
        return result.data.url;
      } else {
        console.error("Image upload failed:", result.error.message);
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  useEffect(() => {
    const uploadImages = async () => {
      const urls = await Promise.all(
        results.map(async (flight) => {
          const imageUrl = flight.flight_group[0]?.routes[0]?.aircraft?.picture;
          if (imageUrl && !cachedImgBBUrls.current.has(imageUrl)) {
            const uploadedUrl = await uploadImageUrlToImgBB(imageUrl);
            cachedImgBBUrls.current.set(imageUrl, uploadedUrl);
          }
          return cachedImgBBUrls.current.get(imageUrl);
        })
      );
      setImgBBUrls(urls.filter((url) => url !== null) as string[]);
    };

    if (results.length > 0) {
      uploadImages();
    }
  }, [results]);

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div>
          {results.length > 0 &&
          results[0]?.flight_group?.[0]?.routes?.length > 0 ? (
            <>
              <div>
                <h2 className="text-lg font-semibold">
                  {results[0]?.departure.city_name} (
                  {results[0]?.departure.code}) —{" "}
                  {results[0]?.arrival.city_name} ({results[0]?.arrival.code})
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
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          Modify
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left Sidebar */}

        <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md lg:sticky lg:top-6">
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
                  className="border rounded-lg p-4 lg:flex items-center justify-between"
                >
                  {/* Flight Details */}
                  <div className="lg:flex gap-4 items-center">
                    {/* Airline Logo */}
                    <img
                      src={imgBBUrls[index] || defaultAirlineImage}
                      alt="airline logo"
                      className="w-12 h-12"
                    />
                    <div>
                      {/* Departure and Arrival */}
                      <h3 className="font-semibold text-lg">
                        {results[0]?.departure.code} —{results[0]?.arrival.code}
                      </h3>

                      {/* Airline Name */}
                      <h3 className="font-medium text-xs text-gray-600">
                        Air{" "}
                        {flight.flight_group[0]?.routes[0]?.aircraft?.name ||
                          "Unknown Airline"}
                      </h3>
                      {/* Number of Stops */}
                      <p className="text-sm text-gray-500">
                        {flight.flight_group[0]?.no_of_stops_title ||
                          "Non-stop"}
                      </p>
                      {/* Flight Duration */}
                      <p className="text-sm text-gray-500">
                        {flight.filter?.journey_duration
                          ? flight.filter.journey_duration.replace("PT", "") // Removes the "PT" prefix
                          : "N/A"}
                      </p>
                    </div>
                    {/* time and slot section */}
                    <div className="grid lg:grid-cols-2 gap-4 text-sm">
                      {/* Departure Details */}
                      <div className="lg:flex flex-col items-start">
                        <p className="font-semibold text-gray-800">
                          {flight.filter?.departure_departure_time
                            ? new Date(
                                flight.filter.departure_departure_time
                              ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "No departure time available"}
                        </p>
                        <p>
                          {flight.filter?.departure_departure_time
                            ? new Date(
                                flight.filter.departure_departure_time
                              ).toLocaleDateString()
                            : "No date available"}
                        </p>
                        <p className="font-semibold">
                          {flight.filter?.departure_departure_time
                            ? new Date(
                                flight.filter.departure_departure_time
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                              })
                            : "No day available"}
                        </p>
                        {flight.filter?.departure_timing_slot ||
                          "No timing slot available"}
                        <p>
                          {flight.flight_group[0]?.routes[0]?.origin_airport
                            ?.name || "Unknown Airport"}
                        </p>
                      </div>

                      {/* Arrival Details */}
                      <div className="lg:flex flex-col items-start">
                        <p className="font-semibold text-gray-800">
                          {flight.filter?.arrival_departure_time
                            ? new Date(
                                flight.filter.arrival_departure_time
                              ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "No arrival time available"}
                        </p>
                        <p>
                          {flight.filter?.arrival_departure_time
                            ? new Date(
                                flight.filter.arrival_departure_time
                              ).toLocaleDateString()
                            : "No date available"}
                        </p>
                        <p className="font-semibold">
                          {flight.filter?.arrival_departure_time
                            ? new Date(
                                flight.filter.arrival_departure_time
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                              })
                            : "No day available"}
                        </p>
                        <p>
                          {flight.filter?.arrival_timing_slot ||
                            "No timing slot available"}
                        </p>

                        <p>
                          {flight.flight_group[0]?.routes[1]
                            ?.destination_airport?.name || "Unknown Airport"}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Price and Action */}
                  <div className="lg:flex flex-col items-end">
                    {/* Price */}
                    <p className="text-xl font-bold text-green-600">
                      BDT {flight.price?.total || "0"}
                    </p>
                    {/* Select Button */}
                    <button className="px-4 py-2 bg-purple-700 text-white rounded-lg">
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
