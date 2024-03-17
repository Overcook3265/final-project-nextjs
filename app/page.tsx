import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <div className={styles.wrapper2}>
          <h1>What just happened?</h1>
          <form method="get" action="#explain">
            <button className={styles.button}>Explore</button>
          </form>
        </div>
      </div>
      <div id="explain">
        The picture you just saw contains <br />
        not a single <br />
        red pixel. <br />
        <br />
        <hr />
        <br />
        And yet, the strawberries clearly appear to be red. How can this be?
        <br />
        One thing seems for sure: <br />
        The world that surrounds us is not what it seems.
      </div>
    </main>
  );
}
