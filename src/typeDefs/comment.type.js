import { gql } from 'apollo-server';

export const commentTypeDefs = gql`
  type Comment {
    id: ID
    text: String
    postID: ID
  }

  input CommentInput {
    text: String!
    postID: ID!
  }

  extend type Query {
    comments: [Comment]

    comment(id: ID!): Comment
  }

  extend type Mutation {
    createComment(input: CommentInput!): Comment

    deleteComment(id: ID!): String

    updateComment(id: ID!, input: CommentInput!): Comment
  }
`;
