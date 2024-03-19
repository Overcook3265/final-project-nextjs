'use client';

import { Parallax } from 'react-scroll-parallax';
import styles from './page.module.scss';

export default function Test() {
  return (
    <Parallax
      scale={[1, 0]}
      opacity={[1, 0]}
      speed={0}
      endScroll={100}
      easing="easeInOutQuad"
    >
      <div className={styles.box} />
    </Parallax>
  );
}
