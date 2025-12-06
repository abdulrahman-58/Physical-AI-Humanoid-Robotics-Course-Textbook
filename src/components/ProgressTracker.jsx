import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './ProgressTracker.module.css';

const ProgressTracker = ({
  initialProgress = {},
  onProgressUpdate,
  chapters = [],
  studentProfile = {}
}) => {
  const [progress, setProgress] = useState(initialProgress);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calculateOverallProgress = () => {
    if (!chapters || chapters.length === 0) return 0;

    const completedChapters = Object.values(progress).filter(status => status === 'completed').length;
    return Math.round((completedChapters / chapters.length) * 100);
  };

  const overallProgress = calculateOverallProgress();

  const handleChapterProgress = (chapterId, status) => {
    const newProgress = {
      ...progress,
      [chapterId]: status
    };
    setProgress(newProgress);

    if (onProgressUpdate) {
      onProgressUpdate(newProgress);
    }
  };

  const getChapterStatus = (chapterId) => {
    return progress[chapterId] || 'not-started';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#28a745'; // Green
      case 'in-progress':
        return '#ffc107'; // Yellow
      case 'not-started':
        return '#6c757d'; // Gray
      default:
        return '#6c757d';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
      default:
        return 'Unknown';
    }
  };

  // Only render on client to avoid SSR issues
  if (!isClient) {
    return <div className={styles.skeleton}>Loading progress tracker...</div>;
  }

  return (
    <div className={styles.progressTrackerContainer}>
      <div className={styles.trackerHeader}>
        <h3 className={styles.trackerTitle}>
          <span className={styles.icon}>📊</span>
          Your Learning Progress
        </h3>
        <div className={styles.overallProgress}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${overallProgress}%`,
                backgroundColor: overallProgress >= 80 ? '#28a745' :
                               overallProgress >= 50 ? '#ffc107' :
                               overallProgress >= 20 ? '#17a2b8' : '#6c757d'
              }}
            ></div>
          </div>
          <div className={styles.progressText}>
            <span className={styles.progressPercentage}>{overallProgress}%</span>
            <span className={styles.progressLabel}>Complete</span>
          </div>
        </div>
      </div>

      <div className={styles.progressDetails}>
        <div className={styles.studentInfo}>
          <p className={styles.infoText}>
            <strong>Skill Level:</strong> {studentProfile.skillLevel || 'Not specified'}
          </p>
          <p className={styles.infoText}>
            <strong>Learning Path:</strong> {studentProfile.preferredLearningPath || 'Mixed'}
          </p>
          <p className={styles.infoText}>
            <strong>Chapters Completed:</strong> {Object.values(progress).filter(status => status === 'completed').length} / {chapters.length}
          </p>
        </div>

        <div className={styles.chapterProgress}>
          <h4 className={styles.chapterProgressTitle}>Chapter Progress</h4>

          {chapters.length > 0 ? (
            <div className={styles.chaptersList}>
              {chapters.map((chapter, index) => {
                const status = getChapterStatus(chapter.id);
                const statusColor = getStatusColor(status);

                return (
                  <div key={chapter.id} className={styles.chapterItem}>
                    <div className={styles.chapterInfo}>
                      <div className={styles.chapterIndex}>Ch {index + 1}</div>
                      <div className={styles.chapterDetails}>
                        <h5 className={styles.chapterTitle}>{chapter.title}</h5>
                        <p className={styles.chapterDescription}>{chapter.description}</p>
                      </div>
                    </div>

                    <div className={styles.chapterStatus}>
                      <span
                        className={styles.statusIndicator}
                        style={{ backgroundColor: statusColor }}
                        title={getStatusText(status)}
                      >
                        {status === 'completed' ? '✓' :
                         status === 'in-progress' ? '→' : '○'}
                      </span>

                      <select
                        value={status}
                        onChange={(e) => handleChapterProgress(chapter.id, e.target.value)}
                        className={styles.statusSelect}
                      >
                        <option value="not-started">Not Started</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.noChapters}>
              <p>No chapters available for progress tracking.</p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.recommendations}>
        <h4 className={styles.recommendationsTitle}>Recommended Next Steps</h4>
        <ul className={styles.recommendationsList}>
          {overallProgress < 20 && (
            <li className={styles.recommendationItem}>
              <span className={styles.recommendationIcon}>📖</span>
              Start with Chapter 1 to build foundational knowledge
            </li>
          )}
          {overallProgress >= 20 && overallProgress < 60 && (
            <li className={styles.recommendationItem}>
              <span className={styles.recommendationIcon}>🔧</span>
              Focus on hands-on lab exercises to reinforce concepts
            </li>
          )}
          {overallProgress >= 60 && overallProgress < 90 && (
            <li className={styles.recommendationItem}>
              <span className={styles.recommendationIcon}>🚀</span>
              Begin working on the capstone project components
            </li>
          )}
          {overallProgress >= 90 && (
            <li className={styles.recommendationItem}>
              <span className={styles.recommendationIcon}>🎓</span>
              Congratulations! Consider advanced robotics research projects
            </li>
          )}
          <li className={styles.recommendationItem}>
            <span className={styles.recommendationIcon}>💡</span>
            Review content with personalized settings based on your learning preferences
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;