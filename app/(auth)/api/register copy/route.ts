import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { createPostInsecure } from '../../../../database/posts';
import { createSessionInsecure } from '../../../../database/sessions';
import { userSchema } from '../../../../migrations/00000-createTableUsers';
import { UserPost } from '../../../../migrations/00003-insertPosts';
import { secureCookieOptions } from '../../../util/cookies';

// define type
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
  // 1. Get the user data from the request
  const body = await request.json();

  // 2. Validate the user data with zod
  const result = userSchema.safeParse(body);
  console.log(body)

  // // console.log('Error: ', result.error.issues);

  // if (!result.success) {
  //   return NextResponse.json(
  //     { errors: result.error.issues },
  //     {
  //       status: 400,
  //     },
  //   );
  // }

  // 3. Check if user already exist in the database
  // const user = await getUserByUsernameInsecure(result.data.username);

  // if (user) {
  //   return NextResponse.json(
  //     {
  //       errors: [{ message: 'username is already taken' }],
  //     },
  //     { status: 403 },
  //   );
  // }

  // 4. Hash the plain password from the user
  // const passwordHash = await bcrypt.hash(result.data.password, 12);

  // console.log(passwordHash, result.data.password);

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

//   return NextResponse.json({
//     user: newUser,
//   });
// }
