'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function NewPostButton() {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => router.push('/newpost')}
    >
      New Post
    </button>
  );
}
