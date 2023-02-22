import data from './data';

export const typeDefs = `
    type User {
      name: String!
      address: String!
      email: String!
      phone: String!
    }
    type Query {
      users(offset: Int!, limit: Int!): [User]
      name: String
    }
`;

export const resolvers = {
  Query: {
    users: (parent, args) => {
      const { offset, limit } = args;
      return data.slice(offset, offset + limit);
    },
    name: () => {
      return data[0].name;
    }
  }
}
