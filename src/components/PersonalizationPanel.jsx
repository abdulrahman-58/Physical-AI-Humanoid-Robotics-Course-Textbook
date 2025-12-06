import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './PersonalizationPanel.module.css';

const PersonalizationPanel = ({
  initialSettings = {},
  onSettingsChange,
  studentProfile = {}
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState({
    difficultyFilter: initialSettings.difficultyFilter || 'all',
    learningPath: initialSettings.learningPath || 'mixed',
    showAdvancedContent: initialSettings.showAdvancedContent !== undefined ? initialSettings.showAdvancedContent : false,
    showSimplifiedExplanations: initialSettings.showSimplifiedExplanations !== undefined ? initialSettings.showSimplifiedExplanations : true,
    includeAdditionalExamples: initialSettings.includeAdditionalExamples !== undefined ? initialSettings.includeAdditionalExamples : true,
    highlightKeyConcepts: initialSettings.highlightKeyConcepts !== undefined ? initialSettings.highlightKeyConcepts : true,
    ...initialSettings
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const difficultyOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner Only' },
    { value: 'intermediate', label: 'Intermediate Only' },
    { value: 'advanced', label: 'Advanced Only' }
  ];

  const learningPathOptions = [
    { value: 'theoretical', label: 'Theoretical Focus' },
    { value: 'practical', label: 'Practical Focus' },
    { value: 'mixed', label: 'Mixed Approach' }
  ];

  const handleSettingChange = (settingName, value) => {
    const newSettings = {
      ...settings,
      [settingName]: value
    };
    setSettings(newSettings);

    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
  };

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  // Only render on client to avoid SSR issues
  if (!isClient) {
    return <div className={styles.skeleton}>Loading personalization panel...</div>;
  }

  return (
    <div className={clsx(styles.personalizationPanel, isExpanded && styles.expanded)}>
      <div className={styles.panelHeader} onClick={togglePanel}>
        <div className={styles.headerContent}>
          <h3 className={styles.panelTitle}>
            <span className={styles.icon}>🎯</span>
            Personalize Your Learning
          </h3>
          <p className={styles.panelSubtitle}>
            {studentProfile.skillLevel ? `Current level: ${studentProfile.skillLevel}` : 'Adjust content to your needs'}
          </p>
        </div>
        <div className={styles.expandIcon}>
          {isExpanded ? '▲' : '▼'}
        </div>
      </div>

      {isExpanded && (
        <div className={styles.panelContent}>
          <div className={styles.settingsSection}>
            <h4 className={styles.sectionTitle}>Content Difficulty</h4>
            <div className={styles.optionGroup}>
              {difficultyOptions.map((option) => (
                <label key={option.value} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name="difficultyFilter"
                    value={option.value}
                    checked={settings.difficultyFilter === option.value}
                    onChange={(e) => handleSettingChange('difficultyFilter', e.target.value)}
                    className={styles.optionInput}
                  />
                  <span className={clsx(
                    styles.optionButton,
                    settings.difficultyFilter === option.value && styles.optionSelected
                  )}>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.settingsSection}>
            <h4 className={styles.sectionTitle}>Learning Path</h4>
            <div className={styles.optionGroup}>
              {learningPathOptions.map((option) => (
                <label key={option.value} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name="learningPath"
                    value={option.value}
                    checked={settings.learningPath === option.value}
                    onChange={(e) => handleSettingChange('learningPath', e.target.value)}
                    className={styles.optionInput}
                  />
                  <span className={clsx(
                    styles.optionButton,
                    settings.learningPath === option.value && styles.optionSelected
                  )}>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.settingsSection}>
            <h4 className={styles.sectionTitle}>Content Preferences</h4>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={settings.showAdvancedContent}
                  onChange={(e) => handleSettingChange('showAdvancedContent', e.target.checked)}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxText}>Show advanced content when available</span>
              </label>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={settings.showSimplifiedExplanations}
                  onChange={(e) => handleSettingChange('showSimplifiedExplanations', e.target.checked)}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxText}>Show simplified explanations</span>
              </label>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={settings.includeAdditionalExamples}
                  onChange={(e) => handleSettingChange('includeAdditionalExamples', e.target.checked)}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxText}>Include additional examples</span>
              </label>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={settings.highlightKeyConcepts}
                  onChange={(e) => handleSettingChange('highlightKeyConcepts', e.target.checked)}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxText}>Highlight key concepts</span>
              </label>
            </div>
          </div>

          <div className={styles.saveSection}>
            <p className={styles.saveDescription}>
              Your preferences will be saved and applied to all content across the textbook.
            </p>
          </div>
        </div>
      )}

      {!isExpanded && (
        <div className={styles.quickSummary}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Difficulty:</span>
            <span className={styles.summaryValue}>
              {difficultyOptions.find(opt => opt.value === settings.difficultyFilter)?.label || 'All Levels'}
            </span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Path:</span>
            <span className={styles.summaryValue}>
              {learningPathOptions.find(opt => opt.value === settings.learningPath)?.label || 'Mixed'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizationPanel;