import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';;
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './schema';

dotenv.config();
const port = Number(process.env.PORT || 5000);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  try {
    const { url } = await startStandaloneServer(server, { listen: { port } });
    console.log(`🚀 Server listening at: ${url}`);
  } catch (e) {
      // Deal with the fact the chain failed
  }
})();

