// setting up the API to allow our users to register
import { NextRequest, NextResponse } from 'next/server';
import { User } from '../../../../database/users';

export type RegisterResponseBodyPost =
  | {
      user: User;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  // Task: Implement the user registration workflow
  // 1. Get the user data from the request
  const body = await request.json();
  console.log('Body: ', body);

  return NextResponse.json({
    user: 'newUser',
  });
}
