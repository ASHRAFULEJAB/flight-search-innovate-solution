import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PassengerDropdownProps } from "@/types";

const PassengerDropdown: React.FC<PassengerDropdownProps> = ({
  adults,
  setAdults,
  children,
  setChildren,
  infants,
  setInfants,
  travelClass,
  setTravelClass,
}) => {
  const applySelection = () => {
    alert(`Passengers: ${adults + children + infants}, Class: ${travelClass}`);
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="bg-purple-50 p-5 rounded-lg h-[150px] w-full text-left">
            <div className="flex items-center">
              {/* <span className="material-icons text-purple-600 text-3xl">
                person
              </span> */}
              <div className="ml-4">
                <p className="text-sm text-gray-500">Passenger, Class</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {adults + children + infants} Passenger
                </h3>
                <p className="text-sm text-gray-500">{travelClass}</p>
              </div>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 bg-white shadow-lg rounded-lg w-100">
          <div className="mb-4">
            <p className="text-sm font-bold">ADULTS (12y+)</p>
            <div className="flex space-x-2 mt-2">
              {[...Array(10).keys()].map((num) => (
                <button
                  key={num}
                  onClick={() => setAdults(num + 1)}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${
                    adults === num + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {num + 1}
                </button>
              ))}
              <button
                onClick={() => setAdults(10)}
                className={`px-3 py-1 border rounded ${
                  adults > 9 ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
              >
                9+
              </button>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-bold">CHILDREN (2y-12y)</p>
            <div className="flex space-x-2 mt-2">
              {[...Array(7).keys()].map((num) => (
                <button
                  key={num}
                  onClick={() => setChildren(num)}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${
                    children === num ? "bg-blue-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-bold">INFANTS (below 2y)</p>
            <div className="flex space-x-2 mt-2">
              {[...Array(7).keys()].map((num) => (
                <button
                  key={num}
                  onClick={() => setInfants(num)}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${
                    infants === num ? "bg-blue-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-bold">CHOOSE TRAVEL CLASS</p>
            <div className="flex space-x-2 mt-2">
              {["Economy", "Premium Economy", "Business", "First Class"].map(
                (cls) => (
                  <button
                    key={cls}
                    onClick={() => setTravelClass(cls)}
                    className={`px-4 py-2 border rounded ${
                      travelClass === cls
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {cls}
                  </button>
                )
              )}
            </div>
          </div>

          <button
            onClick={applySelection}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 w-full"
          >
            APPLY
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PassengerDropdown;
