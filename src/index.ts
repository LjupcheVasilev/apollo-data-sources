import { ApolloServer, BaseContext } from "@apollo/server";
import {
  StartStandaloneServerOptions,
  startStandaloneServer,
} from "@apollo/server/standalone";

import { typeDefs } from "./Domain/schema";

import { resolvers } from "./Application/resolvers";
import { SpaceXDatabase } from "./Infrastructure/SpaceXDatabase";

const context = async () => ({
  dataSources: {
    SpaceXDatabase: new SpaceXDatabase()
  }
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
