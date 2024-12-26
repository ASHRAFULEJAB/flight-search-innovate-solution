import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Airport } from "@/types";

interface AirportDropdownProps {
  label: string;
  icon: JSX.Element;
  airports: Airport[];
  loading: boolean;
  selectedAirport: Airport | null;
  onSelect: (airport: Airport) => void;
  defaultAirport: Airport;
}

const AirportDropdown: React.FC<AirportDropdownProps> = ({
  label,
  icon,
  airports,
  loading,
  selectedAirport,
  onSelect,
  defaultAirport,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAirports = airports.filter((airport) =>
    airport.city_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col p-4 bg-[#F5EEFD] rounded text-left">
      <div className="flex items-center space-x-2 mb-2">
        <label className="text-sm font-medium text-gray-600">{label}</label>
        {icon}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-full px-3 h-14 bg-transparent text-left"
          >
            {selectedAirport ? (
              <>
                <p className="text-base font-semibold text-gray-800">
                  {selectedAirport.city_name}
                </p>
                <p className="text-sm text-gray-500">
                  {selectedAirport.airport_name}
                </p>
              </>
            ) : (
              <>
                <p className="text-base font-semibold text-gray-800">
                  {defaultAirport.city_name}
                </p>
                <p className="text-sm text-gray-500">
                  {defaultAirport.airport_name}
                </p>
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 shadow-lg rounded bg-white max-h-80 overflow-y-auto">
          <input
            type="text"
            placeholder={`Search ${label}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border-b text-sm outline-none"
          />
          {loading ? (
            <div className="p-4 text-center text-gray-600">Loading...</div>
          ) : (
            filteredAirports.map((airport) => (
              <DropdownMenuItem
                key={airport.code}
                onClick={() => onSelect(airport)}
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
            ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AirportDropdown;
