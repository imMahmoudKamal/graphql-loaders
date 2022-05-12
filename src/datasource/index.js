import { postDataSource } from './post.js';
import { commentDataSource } from './comment.js';

export const dataSource = {
  post: new postDataSource(),
  comment: new commentDataSource(),
};
