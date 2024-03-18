'use client';

import { Parallax } from 'react-scroll-parallax';
import styles from './page.module.scss';

export default function Test() {
  return (
    <Parallax scale={[1, 0]}>
      <div className={styles.box} />
    </Parallax>
  );
}
