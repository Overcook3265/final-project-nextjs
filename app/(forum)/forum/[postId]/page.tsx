import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getPost } from '../../../../database/posts';
import { getValidSession } from '../../../../database/sessions';
import { UserPost } from '../../../../migrations/00003-insertPosts';
import { getSafeReturnToPath } from '../../../util/validation';
import styles from './page.module.scss';

// import LoginForm from './LoginForm';

type Props = {
  posts: UserPost[];
  // params: {
  //   noteId: string;
  // };
  searchParams: {
    returnTo?: string | string[];
  };
};

export default async function ForumPage(
  { searchParams }: Props,
  // { params }: Props,
  props: Props,
) {
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
    sessionTokenCookie && (await getPost(sessionTokenCookie.value, 4));
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
              <div>Post Title</div>
              <div className={styles.singlepostinfo}>
                {/* by {post.username} */}
                by Username
                <br />
                {/* on {formatDate(post.postTimestamp)} */}
                on Date
              </div>
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
              {/* <div className={styles.singleposttitle}>Post Title</div> */}

              <div className={styles.singlepost}>
                This is the text of the single post! It should contain an
                interesting story for others to comment on.
              </div>
            </div>
            <div className={styles.bottompostwrapper}>
              <div>Encounter-Rating: 7/10</div>

              <div className={styles.singlepostinfo}>
                {/* by {post.username} */}
                Opinions changed: Yes
              </div>
            </div>
          </div>
          {/* <NewPostForm returnTo={searchParams.returnTo} />; */}
        </div>
      </div>
    </main>
  );
}
