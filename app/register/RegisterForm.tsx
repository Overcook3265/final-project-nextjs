'use client';
import { useState } from 'react';
import styles from './page.module.scss';

type Props = { returnTo?: string | string[] };

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1>Register here</h1>
        <form className={styles.form}>
          <label>
            <input
              className={styles.input}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
            Username
          </label>
          <br />
          <label>
            <input className={styles.input} />
            Password
          </label>
          <br />
          <button className={styles.button}>Register</button>
        </form>
      </div>
    </main>
  );
}
