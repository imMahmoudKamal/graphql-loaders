import { DataSource } from 'apollo-datasource';
import Post from '../models/post.model.js';

export class postDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  async create({ input }) {
    try {
      // create new post
      const newPost = await new Post({ title: input.title });

      // save post to db
      const savedPost = await newPost.save();
      if (!savedPost) throw new Error('Error while saving post please try again');

      return savedPost;
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      const allPosts = await Post.find({});

      return allPosts;
    } catch (error) {
      return error;
    }
  }

  async getPost(id) {
    try {
      const post = await Post.findById(id);
      if (!post) throw new Error('Post is not exist!');

      return post;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      const deletedPost = await Post.findByIdAndDelete(id);
      if (!deletedPost) throw new Error('Post is not exist!');

      return 'Post Deleted Successfully!';
    } catch (error) {
      return error;
    }
  }

  async update(id, input) {
    try {
      // update post
      const updatedPost = await Post.findByIdAndUpdate(id, { ...input });
      if (!updatedPost) throw new Error('Post is not exist!');

      // get updated post
      const post = await Post.findById(id);

      return post;
    } catch (error) {
      return error;
    }
  }
}
