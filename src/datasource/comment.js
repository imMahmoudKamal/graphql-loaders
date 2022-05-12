import { DataSource } from 'apollo-datasource';
import Comment from '../models/comment.model.js';

export class commentDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  async create({ input }) {
    try {
      // create new comment
      const newComment = await new Comment({ text: input.text });

      // save comment to db
      const savedComment = await newComment.save();
      if (!savedComment) throw new Error('Error while saving post please try again');

      return savedComment;
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      const allComments = await Comment.find({});

      return allComments;
    } catch (error) {
      return error;
    }
  }

  async getComment(id) {
    try {
      const comment = await Comment.findById(id);
      if (!comment) throw new Error('Comment is not exist!');

      return comment;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      const deletedComment = await Comment.findByIdAndDelete(id);
      if (!deletedComment) throw new Error('Comment is not exist!');

      return 'Comment Deleted Successfully!';
    } catch (error) {
      return error;
    }
  }

  async update(id, input) {
    try {
      // update comment
      const updatedComment = await Comment.findByIdAndUpdate(id, { ...input });
      if (!updatedComment) throw new Error('Comment is not exist!');

      // get updated comment
      const comment = await Comment.findById(id);

      return comment;
    } catch (error) {
      return error;
    }
  }
}
