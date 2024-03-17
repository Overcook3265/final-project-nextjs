import styles from './page.module.scss';
import ZoomModule from './ZoomModule';

export default function Zoom() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1 className={styles.h1}>
          What colors do you see?
          <div className={styles.sub}>Zoom and move around</div>
        </h1>
        <ZoomModule />
      </div>
    </main>
  );
}
