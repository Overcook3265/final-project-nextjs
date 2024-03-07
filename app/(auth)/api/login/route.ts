import bcrypt from 'bcrypt';
// setting up the API to allow our users to register
import { NextRequest, NextResponse } from 'next/server';
import {
  getUserWithPasswordHashByUsernameInsecure,
  User,
} from '../../../../database/users';
import { userSchema } from '../../../../migrations/00000-createTableUsers';

// define type
export type LoginResponseBodyPost =
  | {
      user: Pick<User, 'username'>;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<LoginResponseBodyPost>> {
  // Task: Implement the user login workflow
  // 1. Get the user data from the request
  const body = await request.json();

  // 2. Validate the user data with zod
  const result = userSchema.safeParse(body);

  // console.log('Error: ', result.error.issues);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }
  // 3. Verify user credentials
  const userWithPasswordHash = await getUserWithPasswordHashByUsernameInsecure(
    result.data.username,
  );

  if (!userWithPasswordHash) {
    return NextResponse.json(
      {
        errors: [{ message: 'username or password is not correct' }],
      },
      { status: 403 },
    );
  }

  console.log(userWithPasswordHash);

  // 4. Validate the user password by comparing with hashed password
  const isPasswordValid = await bcrypt.compare(
    result.data.password,
    userWithPasswordHash.passwordHash,
  );

  console.log(isPasswordValid, result.data.password);

  if (!isPasswordValid) {
    return NextResponse.json(
      { errors: [{ message: 'username or password is not correct' }] },
      {
        status: 401,
      },
    );
  }

  return NextResponse.json({
    user: {
      username: userWithPasswordHash.username,
    },
  });
}
