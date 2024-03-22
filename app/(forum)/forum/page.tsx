import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSession } from '../../../database/sessions';
import { getSafeReturnToPath } from '../../util/validation';
import NewPostForm from './NewPostForm';
import styles from './page.module.scss';

// import LoginForm from './LoginForm';

type Props = {
  searchParams: {
    returnTo?: string | string[];
  };
};

export default async function LoginPage({ searchParams }: Props) {
  // Task: Add redirect to home if user is logged in

  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Check if the sessionToken cookie is still valid
  const session =
    sessionTokenCookie && (await getValidSession(sessionTokenCookie.value));

  // 3. If the sessionToken cookie is valid, redirect to home
  if (!session) redirect(getSafeReturnToPath(searchParams.returnTo) || '/');

  // 4. If the sessionToken cookie is invalid or doesn't exist, show the login form
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <div className={styles.topwrapper}>
          <h1>Notes of Encounters</h1>
          <div className={styles.textcenter}>
            The purpose of this forum is to exchange experiences of encounters
            with other people of different mindsets and mental filters. <br />
            <br />
            It should give an opportunity to rate the experience, how likely we
            think that a change of perspective has been achieved, as well as to
            comment on other's experiences.
          </div>
          <div className={styles.colorwrapper}>
            <div className={styles.newpostwrapper}>
              <div>Posts</div>
              <button className={styles.button}>New Posts</button>
            </div>
          </div>
          {/* <NewPostForm returnTo={searchParams.returnTo} />; */}
        </div>
      </div>
    </main>
  );
}
