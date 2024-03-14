// import { timeStamp } from 'node:console';
import { Sql } from 'postgres';

export type UserPost = {
  id: number;
  userId: number;
  postTitle: string;
  postText: string;
  isOpChanged: boolean;
  postTimestamp: Date;
  rating: number;
};

const timeStamp = new Date();
const userPosts: UserPost[] = [
  {
    id: 1,
    userId: 1,
    postTitle: 'Test post',
    postText: 'This is a test post, to check the functionality of the forum.',
    isOpChanged: true,
    postTimestamp: timeStamp,
    rating: 7,
  },
];

export async function up(sql: Sql) {
  for (const userPost of userPosts) {
    await sql`
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
          ${userPost.userId},
          ${userPost.postTitle},
          ${userPost.postText},
          ${userPost.isOpChanged},
          ${userPost.postTimestamp},
          ${userPost.rating}
        )
    `;
  }
}
