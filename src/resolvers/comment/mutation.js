export const mutation = {
  createComment: (_, args, { dataSources }) => dataSources.comment.create(args),

  deleteComment: (_, { id }, { dataSources }) => dataSources.comment.delete(id),

  updateComment: (_, { id, input }, { dataSources }) => dataSources.comment.update(id, input),
};
