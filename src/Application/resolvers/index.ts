import { Context } from "../../Domain/types";

export const resolvers = {
  Launch: {
    rocket: async (
      { rocket }: { rocket: string },
      _: any,
      { dataSources }: Context
    ) => {
      const rocketData = await dataSources.SpaceXDatabase.getRocket(rocket);

      return rocketData;
    },
    launchpad: async (
      { launchpad }: { launchpad: string },
      _: any,
      { dataSources }: Context
    ) => {
      const launchpadData = await dataSources.SpaceXDatabase.getLaunchpad(launchpad);

      return launchpadData;
    }
  },
  Query: {
    launch: async (
      parent: any,
      { id }: { id: string },
      { dataSources }: Context
    ) => {
      const launch = await dataSources.SpaceXDatabase.getLaunch(id);
      return launch;
    },
  },
};
