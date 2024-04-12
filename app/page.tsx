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
          transform: isInView ? 'none' : 'translateY(50px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
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
            This image has NO red pixels
            <div className={styles.subzoomer}>
              Zoom in to check for yourself
            </div>
          </h1>
          <ZoomModule />

          {/* <div
            className={`${styles.textcenter} animate__animated animate__fadeInUp`}
          > */}
          <div className={styles.findout}>
            Find out below what's going on here.
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
          <hr />
          <br />
          <br />
          <br />
          <br />
          {/* One thing seems for sure: <br />
        The world that surrounds us is not what it seems. */}
        </div>
        <div>
          <Section>
            <img
              className={styles.imageright}
              src={`/images/brain_lineart_white.png`}
              alt="Line-art of human brain"
              width={0}
              height={0}
              // sizes="(max-width: 480px) 10vw, 33vw"
              style={{ width: '30vw', height: 'auto' }} // optional
            />
          </Section>
          <Section>
            <h1 className={styles.h1}>What the brain does to the world</h1>
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
            <Cavemen />
            <br />
            <br />
            <Section>
              As a result, our brain became very good at recognizing patterns.
              It's filtering as "noise" most sensory input which experience has
              proven not to be relevant for us and our goals. This filtering
              happens <b>unconsciously</b>, and helps to create a consistent -
              and survivable - world for us.
            </Section>
            <br />
            <br />
            <br />
            <Section>
              From the moment a photon his our eye to a full image created in
              our mind, over 30 steps have to be taken. Plenty of opportunity
              for our brain to filter and adjust so the final image is just
              "right".
            </Section>
            <br />
            <br />
            <br />
            <Section>
              This means, at any given time, we are{' '}
              <b>only perceiving a tiny sliver</b> of what could be called
              "reality."
            </Section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <br />
            <Section>
              <img
                className={styles.imageright}
                src={`/images/strawberry_white.png`}
                alt="Line-art of human brain"
                width={0}
                height={0}
                // sizes="(max-width: 480px) 10vw, 33vw"
                style={{ width: '15vw', height: 'auto' }} // optional
              />
              <h1 className={styles.h1}>Strawberries must. be. red.</h1>
            </Section>
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
