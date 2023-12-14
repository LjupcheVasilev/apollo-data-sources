import { City, Context, Launch, Launchpad, Rocket } from "../../Domain/types";

export const resolvers = {
  Launch: {
    rocket: async (
      { rocket }: { rocket: string },
      _args: any,
      { dataSources }: Context,
    ) => {
      const rocketData: Rocket = await dataSources.SpaceXDataSource.getRocket(rocket);

      return rocketData;
    },
    launchpad: async (
      { launchpad }: { launchpad: string },
      _args: any,
      { dataSources }: Context,
    ) => {
      const launchpadData: Launchpad = await dataSources.SpaceXDataSource.getLaunchpad(launchpad);

      return launchpadData;
    }
  },
  Launchpad: {
    city: async (
      { latitude, longitude }: { latitude: number, longitude: number },
      _args: any,
      { dataSources }: Context,
    ) => {
      const city: City = await dataSources.GeoDataSource.getCity(latitude, longitude);

      return city;
    }
  },
  Query: {
    launch: async (
      parent: any,
      { id }: { id: string },
      { dataSources }: Context,
    ) => {
      const launch = await dataSources.SpaceXDataSource.getLaunch(id);

      return launch;
    },
  },
};
