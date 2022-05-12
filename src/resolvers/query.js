export const query = {
  posts: (_, __, { dataSources: { post } }) => post.getAll(),

  post: (_, { id }, { dataSources: { post } }) => post.getPost(id),
};
