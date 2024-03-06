import styles from './page.module.scss';
import ZoomModule from './ZoomModule';

export default function Zoom() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1 className={styles.h1}>What colors do you see?</h1>
        <ZoomModule />
      </div>
    </main>
  );
}
