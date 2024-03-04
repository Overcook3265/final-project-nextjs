import styles from './page.module.scss';
import ZoomModule from './ZoomModule';

export default function Zoom() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <h1>Zoom page</h1>
        <ZoomModule />
      </div>
    </main>
  );
}
