import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1>What just happened?</h1>
        <button className={styles.button}>Explore</button>
      </div>
    </main>
  );
}
