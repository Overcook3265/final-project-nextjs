'use server';
import { cookies } from 'next/headers';
import { server } from 'typescript';
import { deleteSession } from '../../../../database/sessions';

export async function logout() {
  // 1. Get the session token from the cookie
  const cookieStore = cookies();

  const token = cookieStore.get('sessionToken');
  // 2. Delete the session from the database based on the token
  if (token) await deleteSession(token.value);

  // 3. Delete the session cookie from the browser
  cookieStore.delete('sessionToken');
}
