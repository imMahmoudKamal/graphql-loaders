export const mutation = {
  createPost: (_, args, { dataSources }) => dataSources.post.create(args),

  deletePost: (_, { id }, { dataSources }) => dataSources.post.delete(id),

  updatePost: (_, { id, input }, { dataSources }) => dataSources.post.update(id, input),

  createComment: () => {},
};
