import { cache } from 'react';
// import { postSchema } from '../migrations/00002-createTablePosts';
import { UserPost } from '../migrations/00002-createTablePosts';
import { sql } from './connect';

// export type User = {
//   id: number;
//   username: string;
// };

// export type UserWithPasswordHash = User & {
//   passwordHash: string;
// };

export const getPosts = cache(async (token: string) => {
  const posts = await sql<UserPost[]>`
    SELECT
      posts.*,
      users.username
    FROM
      posts
      INNER JOIN sessions ON (
        sessions.token = ${token}
        -- AND posts.user_id = sessions.user_id
        AND sessions.expiry_timestamp > now()
      )
      INNER JOIN users ON users.id = posts.user_id
  `;
  // console.log('Database-Test New: ', posts);
  return posts;
});

export const getPost = cache(async (token: string, postId: number) => {
  const [post] = await sql<UserPost[]>`
    SELECT
      posts.*,
      users.username
    FROM
      posts
      INNER JOIN sessions ON (
        sessions.token = ${token}
        -- AND posts.user_id = sessions.user_id
        AND sessions.expiry_timestamp > now()
      )
      INNER JOIN users ON users.id = posts.user_id
    WHERE
      posts.id = ${postId}
  `;
  // console.log('Database-Test New: ', post);
  return post;
});

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

export const createPost = cache(
  async (
    // TS argument definition
    token: string,
    postTitle: string,
    postText: string,
    isOpChanged: boolean,
    // postTimestamp: number,
    rating: number,
  ) => {
    const [post] = await sql<UserPost[]>`
      -- change UserPost later, too many attributes (?)
      INSERT INTO
        posts (
          -- id, NO!!!
          user_id,
          post_title,
          post_text,
          is_op_changed,
          -- post_timestamp, automatically created
          rating
        ) (
          -- this part here selects the user_id from sessions
          -- it's a sub-query, so all other variables need to be mentioned as well
          -- because they already have their values that I want to use in post
          SELECT
            user_id,
            ${postTitle},
            ${postText},
            ${isOpChanged},
            ${rating}
          FROM
            sessions
          WHERE
            token = ${token}
            AND sessions.expiry_timestamp > now()
        )
      RETURNING
        -- this variable returns the newly added row
        posts.*
    `;

    return post;
  },
);
