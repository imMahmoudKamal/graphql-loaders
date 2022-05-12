export const query = {
  posts: (_, __, { dataSources }) => dataSources.post.getAll(),

  post: (_, { id }, { dataSources }) => dataSources.post.getPost(id),
};
