import { gql } from 'apollo-server';
import { postTypeDefs } from './post.type.js';

// for global types
const baseTypeDefs = gql`
  type Query

  type Mutation
`;

export const typeDefs = [baseTypeDefs, postTypeDefs];
