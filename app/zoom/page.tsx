import styles from './page.module.scss';
import ZoomModule from './ZoomModule';

export default function Zoom() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1 className={styles.h1}>
          Which colors do you see?
          <div className={styles.sub}>Move around and zoom out when ready</div>
        </h1>
        <ZoomModule />
      </div>
    </main>
  );
}
