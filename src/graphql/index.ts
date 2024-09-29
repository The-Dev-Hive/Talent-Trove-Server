import { ApolloServer } from '@apollo/server';

export async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            type Query {
               hello: String
            }
        `,
    resolvers: {
      Query: {
        hello: () => 'Hello, GraphQL world!',
      },
    },
  });

  await gqlServer.start();
  return gqlServer;
}
