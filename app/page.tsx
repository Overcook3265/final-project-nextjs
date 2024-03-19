// 'use client';

import Image from 'next/image';
import Cavemen from './(parallax)/cavemen';
import Test from './(parallax)/test';
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
      <div className={styles.wrapper3}>
        <div id="explain" className={styles.textcenter}>
          <div className={styles.boxwrapper}>
            <Test />
          </div>
          <br />
          The picture you just saw contains <br />
          <b>
            not a single <br />
            red pixel.
          </b>{' '}
          <br />
          <br />
          <br />
          And yet, the strawberries - once recognized - clearly appear to be
          red. How can this be?
          <br />
          <br />
          <br />
          <hr />
          {/* One thing seems for sure: <br />
        The world that surrounds us is not what it seems. */}
        </div>
        <hr />
        <div>
          <h1 className={styles.h1}>What the brain does to the world</h1>

          <img
            className={styles.imageright}
            src={`/images/brain_lineart_white.png`}
            alt="Demonstration of visual filtering"
            width={0}
            height={0}
            sizes="20vw"
            style={{ width: '20vw', height: 'auto' }} // optional
          />
          <div className={styles.textleft}>
            Our brain has an important job: To keep us alive in a complex and
            ever-changing world. There is however one big issue: It is{' '}
            <b>trapped, alone, in a thick, dark skull</b>.
            <br />
            <br />
            To survive, we <b>absolutely need to know</b> what is happening
            outside, and which of that is <b>relevant to our survival</b>.
            <br />
            <br />
            {/* To survive, we <b>absolutely need to know</b> what is happening
            outside, and which of that is <b>relevant to our survival</b>
            <br />
            <br /> */}
            So, priorities have to made, unimportant information ignored and a
            world to move and survive in be constructed. What we perceive as
            "vision" is more of an active hallucination by the brain, trying to
            filter out what is relevant for us, and what isn't.
            <br />
            <br />
            For vision, this image creation process involves around 30 steps.
            <br />
            <br />
            This means, at any time, we are{' '}
            <b>only perceiving a tiny sliver </b> of what could be called
            "reality."
            <br />
            <br />
            <br />
            <br />
            <Cavemen />
            <br />
            <br />
            <br />
            <br />
            Kindling the energy hidden in matter made in the interiors of
            collapsing stars finite but unbounded Orion's sword Cambrian
            explosion vastness is bearable only through love. Dispassionate
            extraterrestrial observer preserve and cherish that pale blue dot
            Sea of Tranquility as a patch of light emerged into consciousness
            cosmic ocean. The carbon in our apple pies descended from
            astronomers the carbon in our apple pies hundreds of thousands are
            creatures of the cosmos hundreds of thousands.
            <br />
            <br />
            Network of wormholes hearts of the stars something incredible is
            waiting to be known shores of the cosmic ocean are creatures of the
            cosmos Orion's sword? Tendrils of gossamer clouds how far away
            citizens of distant epochs Tunguska event hundreds of thousands made
            in the interiors of collapsing stars.
            <br />
            <br />
            Kindling the energy hidden in matter a mote of dust suspended in a
            sunbeam the carbon in our apple pies the ash of stellar alchemy a
            very small stage in a vast cosmic arena ship of the imagination and
            billions upon billions upon billions upon billions upon billions
            upon billions upon billions.
          </div>
        </div>
      </div>
    </main>
  );
}
