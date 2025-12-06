import React from 'react';
import clsx from 'clsx';
import styles from './LabExercise.module.css';

const LabExercise = ({ title, objectives, prerequisites, steps, expectedOutcome, troubleshootingTips }) => {
  return (
    <div className={clsx('lab-exercise', styles.labExercise)}>
      <div className={clsx('lab-title', styles.labTitle)}>
        <h3>{title}</h3>
      </div>

      {objectives && objectives.length > 0 && (
        <div className={styles.section}>
          <h4>Objectives</h4>
          <ul>
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      )}

      {prerequisites && prerequisites.length > 0 && (
        <div className={styles.section}>
          <h4>Prerequisites</h4>
          <ul>
            {prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>
      )}

      {steps && steps.length > 0 && (
        <div className={styles.section}>
          <h4>Steps</h4>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>
                {typeof step === 'string' ? step : step.description}
                {step.code && (
                  <pre className={styles.codeBlock}>
                    <code>{step.code}</code>
                  </pre>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}

      {expectedOutcome && (
        <div className={styles.section}>
          <h4>Expected Outcome</h4>
          <p>{expectedOutcome}</p>
        </div>
      )}

      {troubleshootingTips && troubleshootingTips.length > 0 && (
        <div className={clsx(styles.section, styles.troubleshooting)}>
          <h4>Troubleshooting Tips</h4>
          <ul>
            {troubleshootingTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LabExercise;