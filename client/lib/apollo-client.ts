import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const uri = process.env.NEXT_PUBLIC_GRAPHQL_SERVER;

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          users: offsetLimitPagination()
        },
      },
    },
  }),
});

export default client;