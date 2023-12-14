export const resolvers = {
  Launch: {
    rocket: async (
      { rocket }: { rocket: string },
      _: any, 
      context: any
    ) => {
      // get rocket from DB
      
      // return rocketData;
    },
    launchpad: async (
      { launchpad }: { launchpad: string },
      _: any,
      context: any
    ) => {
      // get launchpad from DB

      // return launchpad;
    }
  },
  Query: {
    launch: async (
      parent: any,
      { id }: { id: string },
      context: any
    ) => {
      // get launches from DB

      // return launches;
    },
  },
};
