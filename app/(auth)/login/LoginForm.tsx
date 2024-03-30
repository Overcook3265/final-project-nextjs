'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { User } from '../../../database/users';
import ErrorMessage from '../../../ErrorMessage';
import styles from './page.module.scss';

type Props = { returnTo?: string | string[] };

export type LoginResponseBodyPost =
  | {
      user: Pick<User, 'username'>;
    }
  | {
      errors: { message: string }[];
    };

export default function LoginForm(props: Props) {
  // define the variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  // login handler function
  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // fetch method to post data to the server
    // define the route where to check
    const response = await fetch('api/login', {
      method: 'POST',
      // content of the data
      body: JSON.stringify({
        username,
        password,
      }),
      // this is needed just in case a user has an old browser
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data: LoginResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

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
        <div className={styles.wrapper2}>
          <div className={styles.wrapper3}>
            <form
              onSubmit={async (event) => await handleLogin(event)}
              className={styles.form}
            >
              <h1>Login here</h1>
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
              <button className={styles.button}>Login</button>
              {errors.map((error) => (
                <div className="error" key={`error-${error.message}`}>
                  <ErrorMessage>{error.message}</ErrorMessage>
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
