'use client';
import { useState } from 'react';
import styles from './page.module.scss';

type Props = { returnTo?: string | string[] };

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    // fetch method to post data to the server
    // define the route where to post it
    const response = await fetch('api/register', {
      method: 'POST',
      // content of the data
      body: JSON.stringify({
        username,
        password,
      }),
      // this is needed just in case a user has an old browser
      headers: {
        'Content-type': 'application.json',
      },
    });

    const data = response.json;
    console.log('Data: ', data);
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1>Register here</h1>
        <form
          onSubmit={async (event) => await handleRegister(event)}
          className={styles.form}
        >
          <label>
            <input
              className={styles.input}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
            Username
          </label>
          <br />
          <label>
            <input
              type="password"
              className={styles.input}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            Password
          </label>
          <br />
          <button className={styles.button}>Register</button>
        </form>
      </div>
    </main>
  );
}