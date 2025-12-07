import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const HumanoidRobotSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{maxWidth: '100%', maxHeight: '300px'}}>
    <circle cx="50" cy="30" r="15" fill="#3498db" />
    <rect x="40" y="45" width="20" height="30" fill="#2ecc71" />
    <rect x="30" y="75" width="10" height="20" fill="#e74c3c" />
    <rect x="60" y="75" width="10" height="20" fill="#e74c3c" />
  </svg>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Physical AI & Humanoid Robotics Textbook`}
      description="From zero to fully autonomous simulated humanoid robot using ROS 2 + Isaac Sim + Vision-Language-Action models">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={clsx('hero__title', styles.mainTitle)}>
              {siteConfig.title}
            </h1>
            <p className={clsx('hero__subtitle', styles.mainSubtitle)}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.getStartedButton)}
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className={clsx('button button--primary button--lg', styles.exploreButton)}
                to="/docs/chapter-1">
                Explore Content
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <HumanoidRobotSVG />
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4', styles.featureCard)}>
                <h3 className={styles.featureTitle}>Complete Curriculum</h3>
                <p>13-week comprehensive course covering ROS 2, Isaac Sim, and Vision-Language-Action models.</p>
              </div>
              <div className={clsx('col col--4', styles.featureCard)}>
                <h3 className={styles.featureTitle}>Hands-On Labs</h3>
                <p>Practical exercises with real code examples and simulation environments.</p>
              </div>
              <div className={clsx('col col--4', styles.featureCard)}>
                <h3 className={styles.featureTitle}>Modern Tech Stack</h3>
                <p>Learn with the latest tools: ROS 2 Kilted Kaiju, Isaac Sim 2025, and VLA models.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}