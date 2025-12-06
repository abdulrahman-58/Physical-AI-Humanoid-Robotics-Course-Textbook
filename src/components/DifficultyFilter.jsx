import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './DifficultyFilter.module.css';

const DifficultyFilter = ({ initialDifficulty, onDifficultyChange }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialDifficulty || 'all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const difficulties = [
    { value: 'all', label: 'All Levels', icon: '🌐' },
    { value: 'beginner', label: 'Beginner', icon: '🟢' },
    { value: 'intermediate', label: 'Intermediate', icon: '🟡' },
    { value: 'advanced', label: 'Advanced', icon: '🔴' }
  ];

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    if (onDifficultyChange) {
      onDifficultyChange(difficulty);
    }
  };

  // Only render on client to avoid SSR issues
  if (!isClient) {
    return <div className={styles.skeleton}>Loading difficulty filter...</div>;
  }

  return (
    <div className={styles.difficultyFilterContainer}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>Content Difficulty</h3>
        <p className={styles.filterDescription}>
          Filter content by your skill level to match your learning pace
        </p>
      </div>

      <div className={styles.difficultyButtons}>
        {difficulties.map((difficulty) => (
          <button
            key={difficulty.value}
            className={clsx(
              styles.difficultyButton,
              styles[`difficulty-${difficulty.value}`],
              selectedDifficulty === difficulty.value && styles.active
            )}
            onClick={() => handleDifficultyChange(difficulty.value)}
            aria-pressed={selectedDifficulty === difficulty.value}
            title={`Show ${difficulty.label} level content`}
          >
            <span className={styles.difficultyIcon}>{difficulty.icon}</span>
            <span className={styles.difficultyLabel}>{difficulty.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.selectedIndicator}>
        <span className={styles.indicatorLabel}>Currently showing:</span>
        <span
          className={clsx(
            styles.currentDifficulty,
            styles[`current-${selectedDifficulty}`]
          )}
        >
          {difficulties.find(d => d.value === selectedDifficulty)?.label || 'All Levels'}
        </span>
      </div>
    </div>
  );
};

export default DifficultyFilter;