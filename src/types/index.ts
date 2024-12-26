export type FlightResult = {
  calendar_flight_date: ReactNode;
  departure: any;
  arrival: any;
  flight_group: {
    routes: {
      departure_time: string;
      origin_airport: { name: string };
      baggages: { checked: { ADT: { title: string } } };
      aircraft: {
        name: string; picture: string 
};
    }[];
    no_of_stops_title: string;
  }[];
  price: { currency: string; total: string };
  filter?: { journey_duration: string; aircraft_name: string };
  resources?: { base_url?: { aircraft: string } };
  partner_name: string;
};

// passengers dropdown
export type PassengerDropdownProps = {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  children: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  infants: number;
  setInfants: React.Dispatch<React.SetStateAction<number>>;
  travelClass: string;
  setTravelClass: React.Dispatch<React.SetStateAction<string>>;
};


export type Airport = {
  city_name?: string;
  country_name?: string;
  code?: string;
  airport_name?: string;
};
