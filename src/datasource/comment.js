import { DataSource } from 'apollo-datasource';
import Comment from '../models/comment.model.js';
import DataLoader from 'dataloader';

export class commentDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;

    this.loaders = {
      comment: new DataLoader(async (postIDs) => {
        const comments = await Comment.find({ postID: { $in: postIDs } });

        const mappedComments = postIDs.map((postID) => ({
          [postID]: comments.filter((comment) => comment.postID === postID),
        }));

        return Promise.all(mappedComments);
      }),
    };
  }

  async create({ input }) {
    try {
      // create new comment
      const newComment = await new Comment({ postID: input.postID, text: input.text });

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

  async getCommentsByPost(postID) {
    const comment = await this.loaders.comment.load(postID);

    return comment[postID];
  }
}
