import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { postSchema, UserPost } from '../../../../00003-insertPosts_old';
import { createPost, createPostInsecure } from '../../../../database/posts';
import { createSessionInsecure } from '../../../../database/sessions';
import { userSchema } from '../../../../migrations/00000-createTableUsers';
import { secureCookieOptions } from '../../../util/cookies';

// define type

// route.ts is the API - it gets the info from the frontend, processes it (e.g. check for existing users)
// frontend: restaurant table
// API: waiter
// backend: kitchen
export type PostResponseBodyPost =
  | {
      post: UserPost;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<PostResponseBodyPost>> {
  // NextRequest, Promise, NextResponse = predefined TS standard types
  // 1. Get the user data from the request
  const body = await request.json();
  console.log(body);

  // 2. Validate the user data with zod
  const result = postSchema.safeParse(body);
  console.log(result);

  // // console.log('Error: ', result.error.issues);

  // what happens if the safeparse result of zod is NOT a success
  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  // 3. Get the token from the cookie
  const sessionTokenCookie = cookies().get('sessionToken');

  const newPost =
    sessionTokenCookie &&
    (await createPost(
      sessionTokenCookie.value,
      result.data.postTitle,
      result.data.postText,
      result.data.isOpChanged,
      result.data.rating,
    ));

  // 5. If the note creation fails, return an error
  if (!newPost) {
    return NextResponse.json(
      {
        errors: 'Post not created or access denied creating post',
      },
      { status: 500 },
    );
  }

  // // 5. Save the user information with the hashed password in the database
  //   const newPost = await createPostInsecure(result.data.username, passwordHash);

  //   if (!newUser) {
  //     return NextResponse.json(
  //       { errors: [{ message: 'Error creating the new user' }] },
  //       { status: 500 },
  //     );
  //   }

  //   // 6. Create a token
  //   const token = crypto.randomBytes(100).toString('base64');

  //   // 7. Create the session record
  //   const session = await createSessionInsecure(newUser.id, token);
  //   console.log('Session: ', session);

  //   // console.log('Token: ', token);
  //   cookies().set({
  //     name: 'sessionToken',
  //     value: session.token,
  //     // the secure cookie options are defined as an object in cookies.ts and spread here
  //     // so we don't have to write it multiple times
  //     ...secureCookieOptions,
  //   });

  return NextResponse.json({
    post: newPost,
  });
}
