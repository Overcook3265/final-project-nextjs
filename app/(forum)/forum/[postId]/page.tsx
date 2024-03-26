import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { getPost } from '../../../../database/posts';
import { getValidSession } from '../../../../database/sessions';
import { UserPost } from '../../../../migrations/00003-insertPosts';
import { getSafeReturnToPath } from '../../../util/validation';
import styles from './page.module.scss';

// import LoginForm from './LoginForm';

type Props = {
  posts: UserPost[];
  params: {
    postId: number;
  };
  searchParams: {
    returnTo?: string | string[];
    postId: number;
  };
};

export default async function ForumPage({
  searchParams,
  params,
  posts,
}: Props) {
  // Task: Add redirect to home if user is logged in
  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Check if the sessionToken cookie is still valid
  const session =
    sessionTokenCookie && (await getValidSession(sessionTokenCookie.value));

  // 3. If the sessionToken cookie is valid, redirect to home
  // 4. If the sessionToken cookie is invalid or doesn't exist, show the login form
  if (!session) redirect(getSafeReturnToPath(searchParams.returnTo) || '/');

  // get the posts

  const post =
    sessionTokenCookie &&
    (await getPost(sessionTokenCookie.value, params.postId));
  // HERE IS the issue: The NUMBER is UNDEFINED
  // console.log(post);

  function formatDate(date) {
    const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <div className={styles.topwrapperpage}>
          <h1>Notes of Encounters</h1>
          <div className={styles.colorwrapper}>
            <div className={styles.toppostwrapper}>
              <div>{post.postTitle}</div>
              <div className={styles.singlepostinfo}>
                by {post.username}
                <br />
                on {formatDate(post.postTimestamp)}
                {/* on Date */}
              </div>
            </div>
            <div className={styles.allpostswrapper}>
              <div className={styles.singlepost}>{post.postText}</div>
            </div>
            <div className={styles.bottompostwrapper}>
              <div>Encounter-Rating: {post.rating}/10</div>

              <div className={styles.singlepostinfo}>
                {/* by {post.username} */}
                Opinions changed: {post.isOpChanged}
              </div>
            </div>
          </div>
          {/* <NewPostForm returnTo={searchParams.returnTo} />; */}
        </div>
      </div>
    </main>
  );
}
