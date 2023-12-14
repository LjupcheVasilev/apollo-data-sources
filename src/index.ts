import { ApolloServer, BaseContext } from "@apollo/server";
import {
  StartStandaloneServerOptions,
  startStandaloneServer,
} from "@apollo/server/standalone";

import { typeDefs } from "./Domain/schema";

import { resolvers } from "./Application/resolvers";
import { SpaceXDataSource } from "./Infrastructure/SpaceXDataSource";
import { GeoDataSource } from "./Infrastructure/GeoDataSource";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const context = async () => {
  return {
    dataSources: {
      SpaceXDataSource: new SpaceXDataSource(),
      GeoDataSource: new GeoDataSource(),
    },
  }
}

startStandaloneServer(server, {
  listen: { port: 4000 },
  context
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
