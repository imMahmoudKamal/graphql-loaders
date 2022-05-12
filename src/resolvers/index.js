import { mutation as postMutation } from './post/mutation.js';
import { query as postQuery } from './post/query.js';
import { mutation as commentMutation } from './comment/mutation.js';
import { query as commentQuery } from './comment/query.js';

export const resolvers = {
  Query: {
    ...postQuery,
    ...commentQuery,
  },

  Mutation: {
    ...postMutation,
    ...commentMutation,
  },
};
