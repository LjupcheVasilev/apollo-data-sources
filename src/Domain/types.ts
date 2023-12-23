import { SpaceXDatabase } from "../Infrastructure/SpaceXDatabase";

export type Launch = {
    id: string;
    name: string;
    date_utc: string;
    flight_number: number;
    success: boolean;
    rocket?: Rocket;
    launchpad?: Launchpad;
  };
  
  export type Rocket = {
    id: string;
    name: string;
    type: string;
    description: string;
  };
  
  export type Launchpad = {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    details: string;
  };

  export type Context = {
    dataSources: {
      SpaceXDatabase: SpaceXDatabase
    };
  }
