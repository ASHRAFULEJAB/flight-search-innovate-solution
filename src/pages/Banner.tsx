import FlightSearch from "@/components/search/FlightSearch";
import bannerImage from "../assets/images/banner.png"; // Replace with your actual image path

const Banner = () => {
  return (
    <div
      className="relative w-full h-[650px] bg-cover bg-center mb-64"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 
      text-center text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Where to Fly?</h1>
        <p className="text-lg mt-2">
          Find Cheap Flights, Airline Tickets in Bangladesh
        </p>
      </div>

      {/* Search Section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
      translate-y-1/2 z-20 w-full px-4">
        <div className="">
          <FlightSearch />
        </div>
      </div>
    </div>
  );
};

export default Banner;
