import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    text: String,
    postID: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Comment', commentSchema);
