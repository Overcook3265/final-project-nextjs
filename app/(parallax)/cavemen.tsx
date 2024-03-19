'use client';
import { ParallaxBanner } from 'react-scroll-parallax';
import styles from './page.module.scss';

export default function Cavemen() {
  return (
    <ParallaxBanner
      layers={[{ image: '../images/lion_grass_3.jpg', speed: +30 }]}
      className={styles.caveman}
    />
  );
}
