import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './LearningPathSelector.module.css';

const LearningPathSelector = ({
  initialPath = 'mixed',
  onPathChange,
  studentProfile = {},
  showPreview = true
}) => {
  const [selectedPath, setSelectedPath] = useState(initialPath);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const learningPaths = [
    {
      value: 'theoretical',
      label: 'Theoretical Focus',
      icon: '📚',
      description: 'Emphasis on mathematical foundations, theory, and concepts',
      color: '#007bff',
      highlights: ['Mathematical derivations', 'Algorithm analysis', 'Conceptual understanding']
    },
    {
      value: 'practical',
      label: 'Practical Focus',
      icon: '🔧',
      description: 'Hands-on implementation, lab exercises, and real-world applications',
      color: '#28a745',
      highlights: ['Lab exercises', 'Implementation examples', 'Practical applications']
    },
    {
      value: 'mixed',
      label: 'Balanced Approach',
      icon: '⚖️',
      description: 'Equal emphasis on theory and practical implementation',
      color: '#ffc107',
      highlights: ['Theory and practice', 'Conceptual and hands-on', 'Balanced learning']
    }
  ];

  const handlePathChange = (pathValue) => {
    setSelectedPath(pathValue);
    if (onPathChange) {
      onPathChange(pathValue);
    }
  };

  const getSelectedPathData = () => {
    return learningPaths.find(path => path.value === selectedPath) || learningPaths[2];
  };

  // Only render on client to avoid SSR issues
  if (!isClient) {
    return <div className={styles.skeleton}>Loading learning path selector...</div>;
  }

  const selectedPathData = getSelectedPathData();

  return (
    <div className={styles.learningPathSelectorContainer}>
      <div className={styles.selectorHeader}>
        <h3 className={styles.selectorTitle}>
          <span className={styles.icon}>🎯</span>
          Choose Your Learning Path
        </h3>
        <p className={styles.selectorDescription}>
          Select the approach that best matches your learning style and goals
        </p>
      </div>

      <div className={styles.pathOptions}>
        {learningPaths.map((path) => (
          <div
            key={path.value}
            className={clsx(
              styles.pathOption,
              selectedPath === path.value && styles.selected,
              styles[`path-${path.value}`]
            )}
            onClick={() => handlePathChange(path.value)}
            style={{
              borderColor: selectedPath === path.value ? path.color : '#dee2e6',
              boxShadow: selectedPath === path.value ? `0 0 0 2px ${path.color}40` : 'none'
            }}
          >
            <div className={styles.optionHeader}>
              <span className={styles.optionIcon}>{path.icon}</span>
              <h4 className={styles.optionTitle}>{path.label}</h4>
            </div>

            <p className={styles.optionDescription}>{path.description}</p>

            <div className={styles.optionHighlights}>
              {path.highlights.map((highlight, index) => (
                <span key={index} className={styles.highlightTag}>
                  {highlight}
                </span>
              ))}
            </div>

            <div className={styles.optionCheckmark}>
              {selectedPath === path.value && (
                <span className={styles.checkmark}>✓</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {showPreview && (
        <div className={styles.previewSection}>
          <h4 className={styles.previewTitle}>How Your Content Will Change</h4>

          <div className={styles.previewContent}>
            <div className={styles.previewItem}>
              <div className={styles.previewLabel}>Content Emphasis:</div>
              <div className={styles.previewValue} style={{ color: selectedPathData.color }}>
                {selectedPathData.label}
              </div>
            </div>

            <div className={styles.previewItem}>
              <div className={styles.previewLabel}>Examples:</div>
              <div className={styles.previewValue}>
                {selectedPathData.highlights.join(', ')}
              </div>
            </div>

            <div className={styles.previewItem}>
              <div className={styles.previewLabel}>Best For:</div>
              <div className={styles.previewValue}>
                {selectedPath === 'theoretical' && 'Students who prefer understanding the underlying concepts and mathematics'}
                {selectedPath === 'practical' && 'Students who learn best through hands-on implementation and experimentation'}
                {selectedPath === 'mixed' && 'Students who want a balanced approach combining theory and practice'}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.currentSelection}>
        <div className={styles.selectionLabel}>Current Selection:</div>
        <div
          className={styles.selectedPathDisplay}
          style={{ color: selectedPathData.color }}
        >
          <span className={styles.selectedIcon}>{selectedPathData.icon}</span>
          <span className={styles.selectedText}>{selectedPathData.label}</span>
        </div>

        <button
          className={styles.applyButton}
          style={{ backgroundColor: selectedPathData.color }}
          onClick={() => {
            // Apply the current selection (this would trigger content refresh in a real app)
            if (window && typeof window !== 'undefined') {
              // In a real app, this might trigger a page reload or content update
              console.log('Applying learning path:', selectedPath);
            }
          }}
        >
          Apply Learning Path
        </button>
      </div>

      {studentProfile.skillLevel && (
        <div className={styles.skillLevelNotice}>
          <p className={styles.noticeText}>
            <strong>Based on your skill level ({studentProfile.skillLevel}):</strong> The system will further adapt content to match your experience level.
          </p>
        </div>
      )}
    </div>
  );
};

export default LearningPathSelector;