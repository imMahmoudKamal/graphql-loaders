import { gql } from 'apollo-server';

export const commentTypeDefs = gql`
  type Comment {
    id: ID
    text: String
  }

  input CommentInput {
    text: String!
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
