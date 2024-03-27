import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { UserPost } from '../../../00003-insertPosts_old';
import { getPosts } from '../../../database/posts';
import { getValidSession } from '../../../database/sessions';
import { getSafeReturnToPath } from '../../util/validation';
import NewPostButton from './NewPostButton';
import styles from './page.module.scss';

// import LoginForm from './LoginForm';

type Props = {
  posts: UserPost[];
  searchParams: {
    returnTo?: string | string[];
  };
};

export default async function ForumPage({ searchParams }: Props, props: Props) {
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
  const posts = await getPosts(sessionTokenCookie.value);
  // console.log(posts);

  function formatDate(
    date: Date | undefined,
    defaultValue: string = 'N/A',
  ): string {
    if (!date) return defaultValue; // Handle undefined case
    const options: Intl.DateTimeFormatOptions = {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <div className={styles.topwrapperpage}>
          <h1>Notes of Encounters</h1>
          <div className={styles.textarea}>
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
              <NewPostButton />
            </div>
            <div className={styles.allpostswrapper}>
              {/* <div className={styles.singlepost}>
                <div className={styles.singleposttitle}>
                  Talk with family members about immigration
                </div>
                <div className={styles.singlepostinfo}>
                  by kitten-canoodle
                  <br />
                  on 07/04/2024
                </div>
              </div> */}
              {posts.length === 0 ? (
                'No posts yet'
              ) : (
                <>
                  {posts.map((post) => (
                    <Link
                      key={`post-${post.id}`}
                      href={`/forum/${post.id}`}
                      className={styles.singlepost}
                    >
                      <div className={styles.singleposttitle}>
                        {post.postTitle}
                      </div>
                      <div className={styles.singlepostinfo}>
                        by {post.username}
                        <br />
                        on {formatDate(post.postTimestamp)}
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
          {/* <NewPostForm returnTo={searchParams.returnTo} />; */}
        </div>
      </div>
    </main>
  );
}
