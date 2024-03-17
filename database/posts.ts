import { cache } from 'react';
import { UserPost } from '../migrations/00003-insertPosts';
import { sql } from './connect';

// export type User = {
//   id: number;
//   username: string;
// };

// export type UserWithPasswordHash = User & {
//   passwordHash: string;
// };

export const createPostInsecure = cache(
  async (
    userId: string,
    postTitle: string,
    postText: string,
    isOpChanged: boolean,
    postTimestamp: number,
    rating: string,
  ) => {
    const [post] = await sql<UserPost[]>`
      INSERT INTO
        posts (
          user_id,
          post_title,
          post_text,
          is_op_changed,
          post_timestamp,
          rating
        )
      VALUES
        (
          ${userId},
          ${postTitle},
          ${postText},
          ${isOpChanged},
          ${postTimestamp},
          ${rating}
        )
      RETURNING
        id,
        user_id,
        post_title,
        post_text,
        is_op_changed,
        post_timestamp,
        rating
    `;
    return post;
  },
);
