import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn Physical AI',
    Svg: require('../../static/img/robot-arm.svg').default,
    description: (
      <>
        Master the cutting-edge field of Physical AI, where robots learn to interact
        with the physical world using advanced machine learning techniques.
      </>
    ),
  },
  {
    title: 'Simulate Humanoid Robots',
    Svg: require('../../static/img/humanoid-robot.svg').default,
    description: (
      <>
        Use NVIDIA Isaac Sim to develop and test humanoid robots in realistic
        simulation environments before deploying to real hardware.
      </>
    ),
  },
  {
    title: 'Integrate Vision-Language-Action',
    Svg: require('../../static/img/vla-model.svg').default,
    description: (
      <>
        Connect perception, reasoning, and action using state-of-the-art
        Vision-Language-Action models for intelligent robot behavior.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}