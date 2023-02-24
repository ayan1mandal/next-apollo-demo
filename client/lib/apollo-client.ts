import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const isServer = () => typeof window === 'undefined';

const fetchUrl = () => {
  const shouldRewriteUri = isServer() && process.env.NODE_ENV === 'development';
  let adjustedUrl = shouldRewriteUri ? process.env.NEXT_PUBLIC_GRAPHQL_SERVER : process.env.NEXT_PRIVATE_GRAPHQL_SERVER;
  return adjustedUrl;
}

const client = new ApolloClient({
  ssrMode: true,
  uri: fetchUrl(),
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