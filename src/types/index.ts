/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export type FlightResult = {
  calendar_flight_date: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  departure: any;
  arrival: any;
  flight_group: {
    routes: {
      departure_time: string;
      origin_airport: { name: string };
      baggages: { checked: { ADT: { title: string } } };
      aircraft: {
        name: string;
        picture: string;
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
  name?: string;
  city_name?: string;
  country_name?: string;
  code?: string;
  airport_name?: string;
};

// flight search result

export interface AirportSearch {
  name: string;
}

export interface RouteFlight {
  departure_time?: string;
  origin_airport?: AirportSearch; // Adjusted for optional
  destination_airport?: AirportSearch; // Optional
  aircraft?: {
    name?: string; // Optional aircraft name
    picture?: string; // Optional picture URL
  };
}

export interface FlightSearchResult {
  departure?: any; // Optional departure info
  arrival?: any; // Optional arrival info
  calendar_flight_date?: React.ReactNode; // Optional flight date
  flight_group: {
    no_of_stops_title: string; // Title for the number of stops
    routes: RouteFlight[]; // Array of route flights
  }[];
  filter?: {
    // Made optional
    departure_departure_time?: string; // Optional departure time
    arrival_departure_time?: string; // Optional arrival time
    departure_timing_slot?: string; // Optional departure slot
    arrival_timing_slot?: string; // Optional arrival slot
    journey_duration?: string; // Optional journey duration
    price?: number; // Optional price
  };
  price?: {
    total?: string; // Optional total price
  };
}
