import { useState } from 'react';
import styles from './page.module.scss';

export default function RegisterPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1>Register here</h1>
        <form>
          <label>
            <input
            // onChange={(event) => setUsername(event.currentTarget.value)}
            />
            Username
          </label>
          <label>
            <input />
            Password
          </label>
          <button className={styles.button}>Register</button>
        </form>
      </div>
    </main>
  );
}
