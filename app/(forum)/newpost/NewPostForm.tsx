'use client';
import { useState } from 'react';
import styles from './page.module.scss';

export default function NewPostForm() {
  const [userId, setUserId] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [isOpChanced, setIsOpChanced] = useState('');
  const [postTimestamp, setPostTimestamp] = useState('');
  const [rating, setRating] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1>Post your experience</h1>
        <div className={styles.colorwrapper}>
          <form
            // onSubmit={async (event) => await handleRegister(event)}
            className={styles.form}
          >
            <label>
              <input
                className={styles.inputtitle}
                onChange={(event) => setPostTitle(event.currentTarget.value)}
                placeholder="Title"
              />
              Title
            </label>
            <br />
            Rate the encounter
            <label>
              <input
                className={styles.input}
                max={10}
                onChange={(event) => setRating(event.currentTarget.value)}
              />
              /10
            </label>
            <label>
              <input
                type="checkbox"
                className={styles.input}
                onChange={(event) => setIsOpChanced(event.currentTarget.value)}
              />
              Opinions Changed?
            </label>
            <div>
              <textarea
                className={styles.textarea}
                rows={20}
                // cols={100}
                onChange={(event) => setPostText(event.currentTarget.value)}
                placeholder="Write your story here"
              />
            </div>
            <br />
            <button className={styles.button}>Submit</button>
            {/* {errors.map((error) => (
            <div className="error" key={`error-${error.message}`}>
              <ErrorMessage>{error.message}</ErrorMessage>
            </div>
          ))} */}
          </form>
        </div>
      </div>
    </main>
  );
}
