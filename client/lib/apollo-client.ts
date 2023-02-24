import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const fetchUrl = () => {
  const shouldRewriteUri = process.env.IS_CONTAINER === 'docker';
  let adjustedUrl = shouldRewriteUri ? process.env.NEXT_PUBLIC_GRAPHQL_SERVER_DOCKER : process.env.NEXT_PUBLIC_GRAPHQL_SERVER;
  return adjustedUrl;
}

const client = new ApolloClient({
  uri: fetchUrl(),
  // uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_DOCKER,
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