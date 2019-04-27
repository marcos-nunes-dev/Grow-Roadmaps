import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

/*
 * Create Types
 */

const typesArray = fileLoader(path.join(__dirname, '.'), {
  recursive: true,
  extensions: ['.graphql'],
});

const typeDefs = mergeTypes(typesArray);

/*
 * Create Resolvers
 */

const resolversArray = fileLoader(path.join(__dirname, './**/resolvers.*'));
const resolvers = mergeResolvers(resolversArray);

/*
 * Create Schema
 */

export default makeExecutableSchema({ typeDefs, resolvers });
