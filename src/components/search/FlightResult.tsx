import FlightStore from "@/store/FlightStore";
import { useStoreState } from "pullstate";

const FlightResults = () => {
  const results = useStoreState(FlightStore, (state) => state.results);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {results.length === 0 ? (
        <p className="text-center text-gray-600">
          No flights found. Try another search.
        </p>
      ) : (
        <div className="grid gap-6">
          {results.map((flight, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              {/* Flight Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={`${flight.flight_group[0]?.routes[0]?.aircraft.picture}`}
                    alt={`${flight.partner_name || "Unknown"} logo`}
                    className="w-10 h-10"
                  />
                  <div>
                    <h2 className="text-lg font-bold">
                      {flight?.filter?.aircraft_name || "Unknown Partner"}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {flight.flight_group?.[0]?.no_of_stops_title ||
                        "No details"}
                    </p>
                  </div>
                </div>
                <p className="text-purple-600 text-lg font-bold">
                  {flight.price?.currency || "N/A"} {flight.price?.total || "0"}
                </p>
              </div>

              {/* Flight Timing Details */}
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                {flight.flight_group?.[0]?.routes?.map((route, i) => (
                  <div key={i}>
                    <p className="font-bold text-gray-800">
                      {new Date(route.departure_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p className="text-sm text-gray-500">
                      {route.origin_airport?.name || "Unknown Airport"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  Duration:{" "}
                  <span className="font-medium text-gray-700">
                    {flight.filter?.journey_duration
                      ?.replace("PT", "")
                      .toLowerCase() || "N/A"}
                  </span>
                </p>
                <p>
                  Baggage:{" "}
                  {flight.flight_group?.[0]?.routes?.[0]?.baggages?.checked?.ADT
                    ?.title || "N/A"}
                </p>
              </div>

              {/* Select Button */}
              <div className="mt-4 text-center">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightResults;
