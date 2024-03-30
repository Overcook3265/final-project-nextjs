'use client';
import 'animate.css';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Cavemen from './(parallax)/cavemen';
import Test from './(parallax)/test';
import styles from './page.module.scss';
import ZoomModule from './zoom/ZoomModule';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper1}>
        <div className={styles.wrapper2}>
          <h1 className={styles.h1zoomer}>
            These strawberries <br /> are NOT red.
            <div className={styles.subzoomer}>Zoom in to see the Truth</div>
          </h1>
          <ZoomModule />
          {/* <div
            className={`${styles.textcenter} animate__animated animate__fadeInUp`}
          > */}
          <div className={styles.findout}>
            Find out below what's going on here.
            <div>
              {/* <img
                className={styles.arrowcenter}
                src={`/images/arrow_white.png`}
                alt="Down arrow"
                width={0}
                height={0}
                sizes="5vw"
                style={{ width: '20%', height: 'auto' }} // optional
              /> */}
            </div>
          </div>
          {/* </div> */}
          {/* <form method="get" action="#explain">
            <button className={styles.button}>Explore</button>
          </form> */}
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
          And yet, the strawberries clearly appear to be red. How can this be?
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          {/* One thing seems for sure: <br />
        The world that surrounds us is not what it seems. */}
        </div>
        <div>
          <Section>
            <h1 className={styles.h1}>What the brain does to the world</h1>
          </Section>
          <Section>
            <img
              className={styles.imageright}
              src={`/images/brain_lineart_white.png`}
              alt="Line-art of human brain"
              width={0}
              height={0}
              sizes="20vw"
              style={{ width: '20vw', height: 'auto' }} // optional
            />
          </Section>
          <div className={styles.textleft}>
            <Section>
              Our brain has an important job: To keep us alive in a complex and
              ever-changing world. There is however one big issue: It is{' '}
              <b>trapped, alone, in a thick, dark skull</b>.
            </Section>
            <br />
            <br />
            <br />
            <Section>
              To survive, we <b>absolutely need to know</b> what is happening
              outside, and which of that is <b>relevant to our survival</b>.
            </Section>
            <br />
            <br />
            <br />
            <Section>
              Hunter-gatherers who contemplated the beauty of rustling grass at
              dusk - <b>and not what caused it</b> - were less likely to pass on
              their genes, after all.
            </Section>
            <br />
            <br />
            <br />
            <br />
            <Section>
              <Cavemen />
            </Section>
            <br />
            <br />
            <br />
            <br />
            As a result, our brain became very good at recognizing patterns.
            It's filtering as "noise" most sensory input which experience has
            proven not to be relevant for us and our goals. This filtering
            happens <b>unconsciously</b>, and helps to create a consistent - and
            survivable - world for us.
            <br />
            <br />
            <br />
            From the moment a photon his our eye to a full image created in our
            mind, over 30 steps have to be taken. Plenty of opportunity for our
            brain to filter and adjust so the final image is just "right".
            <br />
            <br />
            <br />
            This means, at any given time, we are{' '}
            <b>only perceiving a tiny sliver</b> of what could be called
            "reality."
            <br />
            <br />
            <br />
            <h1 className={styles.h1}>Strawberries must. be. red.</h1>
            <br />
            <br />
            <br />
            The picture above beautifully demonstrates this filtering effect.
            <br />
            <br />
            <br />
            <br />
            What we perceive as "reality" is more of an active hallucination by
            the brain, trying to filter out what is relevant for us, and what
            isn't.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className={styles.h1}>Reality is not the same for everyone</h1>
            <br />
            <br />
            <br />
            <br />
            In 2015,
            <br />
            <br />
            Of course, there is such a thing as reality
          </div>
        </div>
      </div>
    </main>
  );
}
