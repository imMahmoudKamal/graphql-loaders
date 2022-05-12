import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', postSchema);
