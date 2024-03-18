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
      <div id="explain" className={styles.textcenter}>
        The picture you just saw contains <br />
        <b>
          not a single <br />
          red pixel.
        </b>{' '}
        <br />
        <br />
        <hr />
        <br />
        And yet, the strawberries - once recognized - clearly appear to be red.
        How can this be?
        <br />
        {/* One thing seems for sure: <br />
        The world that surrounds us is not what it seems. */}
      </div>
      <hr />
      <div>
        <h1 className={styles.h1}>What the brain does to the world</h1>
        <div className={styles.textleft}>
          Our brain has an important job: To keep us alive in a complex and
          ever-changing world. There is however one big issue: It is{' '}
          <b>trapped, alone, in a thick, dark skull</b>. So to make sense of
          what is happening outside, it needs to process the information rushing
          in from our senses at every second. Most of this information is not
          immediately relevant for our survival: contemplating the nature of a
          blade of glass swaying in the wind, and ignoring a lurking predator
          will not lead to a lot of offspring.
          <br />
          <br />
          So, priorities have to made, unimportant information ignored and a
          world to move and survive in be constructed. What we perceive as
          "vision" is more of an active hallucination by the brain, trying to
          filter out what is relevant for us, and what isn't.
          <br />
          For vision, this image creation process involves around 30 steps.
          <br />
        </div>
      </div>
    </main>
  );
}
