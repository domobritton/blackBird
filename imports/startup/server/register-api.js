import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';
// hi
const typeDefs = [];

const resolvers = merge();

const schema = makeExecutableSchema({typeDefs, resolvers});

createApolloServer({ schema });