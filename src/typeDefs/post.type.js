import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  type Post {
    id: ID
    title: String
    comments: [Comment]
  }

  input PostInput {
    title: String!
  }

  extend type Query {
    posts: [Post]

    post(id: ID!): Post
  }

  extend type Mutation {
    createPost(input: PostInput!): Post

    deletePost(id: ID!): String

    updatePost(id: ID!, input: PostInput!): Post
  }
`;
