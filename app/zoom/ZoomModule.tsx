'use client';
import 'zoomist/css';
import { useEffect } from 'react';
// import Image from 'next/image';
import Zoomist from 'zoomist';
import { ZoomistOptions } from 'zoomist/types';
import styles from './page.module.scss';

// type Props = { returnTo?: string | string[] };

export default function ZoomModule() {
  useEffect(() => {
    const options = {
      maxScale: 50,
      initScale: 50,
      minScale: 0.2,
      bounds: false,
      slider: true,
      zoomer: true,
    };
    new Zoomist('.zoomist-container', options);
  }, []);

  return (
    <div className="zoomist-container">
      <div className="zoomist-wrapper">
        <div className="zoomist-image">
          <img
            // className={styles.image}
            src={`/images/Strawberries.png`}
            alt="Demonstration of visual filtering"
            // width={0}
            // height={0}
            // sizes="100vw"
            // style={{ width: '100%', height: 'auto' }} // optional
          />
          {/* <button className={styles.button}>Explore</button> */}
        </div>
      </div>
    </div>
  );
}
