'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ErrorMessage from '../../../ErrorMessage';
import { RegisterResponseBodyPost } from '../api/register/route';
import styles from './page.module.scss';

type Props = { returnTo?: string | string[] };

export default function RegisterForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

    const data: RegisterResponseBodyPost = await response.json();
    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }
    // This is not the secure way of doing returnTo
    router.push(`/`);
    if (props.returnTo) {
      // console.log('Checks Return to: ', props.returnTo);
      router.push(props.returnTo);
    }
    router.refresh();
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
          {errors.map((error) => (
            <div className="error" key={`error-${error.message}`}>
              <ErrorMessage>{error.message}</ErrorMessage>
            </div>
          ))}
        </form>
      </div>
    </main>
  );
}
