import React from 'react';
import clsx from 'clsx';
import styles from './DifficultyIndicator.module.css';

const DifficultyIcon = ({ level }) => {
  switch(level) {
    case 'beginner':
      return '🟢';
    case 'intermediate':
      return '🟡';
    case 'advanced':
      return '🔴';
    default:
      return '⚪';
  }
};

const DifficultyIndicator = ({ level, label }) => {
  const getClassName = (level) => {
    switch(level) {
      case 'beginner':
        return 'difficulty-beginner';
      case 'intermediate':
        return 'difficulty-intermediate';
      case 'advanced':
        return 'difficulty-advanced';
      default:
        return '';
    }
  };

  const getLabel = (level) => {
    if (label) return label;
    switch(level) {
      case 'beginner':
        return 'Beginner';
      case 'intermediate':
        return 'Intermediate';
      case 'advanced':
        return 'Advanced';
      default:
        return level;
    }
  };

  return (
    <span className={clsx(styles.difficultyIndicator, getClassName(level))}>
      <span className={styles.icon}>
        <DifficultyIcon level={level} />
      </span>
      <span className={styles.label}>{getLabel(level)}</span>
    </span>
  );
};

export default DifficultyIndicator;