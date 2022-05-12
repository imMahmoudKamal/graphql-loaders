export const query = {
  comments: (_, __, { dataSources }) => dataSources.comment.getAll(),

  comment: (_, { id }, { dataSources }) => dataSources.comment.getComment(id),
};
