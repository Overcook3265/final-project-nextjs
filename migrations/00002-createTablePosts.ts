import { Sql } from 'postgres';
import { z } from 'zod';

export type UserPost = {
  id: number;
  userId: number;
  postTitle: string;
  postText: string;
  isOpChanged: boolean;
  postTimestamp: Date;
  rating: number;
  username: string;
};
// obsolete:
// export const postSchema = z.object({
//   rating: z.number().max(10),
// });

// copied here for deployment:
export const postSchema = z.object({
  // id: z.number().min(1),
  // userId: z.number().min(1),
  postTitle: z.string().min(3),
  postText: z.string().min(3),
  isOpChanged: z.boolean(),
  // postTimestamp: z.coerce.date(),
  rating: z.number().min(1),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE posts (
      id integer PRIMARY key generated always AS identity,
      user_id integer NOT NULL REFERENCES users (id) ON DELETE cascade,
      post_title varchar(400) NOT NULL,
      post_text varchar(5000) NOT NULL,
      is_op_changed boolean NOT NULL,
      post_timestamp timestamp NOT NULL DEFAULT now(),
      -- info: post_timestamp DEFAULT now means: Every time a new item gets created, it gets a new timestamp
      rating integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE posts`;
}
