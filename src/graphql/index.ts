import { ApolloServer } from '@apollo/server';
import { user_resolvers } from './resolvers';
import { readFile } from 'node:fs/promises';

export async function createApolloGraphqlServer() {
  const def = await readFile(`${__dirname}/schema.graphql`, 'utf-8');
  const gqlServer = new ApolloServer({
    typeDefs: def,
    resolvers: {
      Query: {
        ...user_resolvers.query,
      },

      // Mutation: {...user_resolvers.mutation,},
    },
  });

  await gqlServer.start();
  return gqlServer;
}
