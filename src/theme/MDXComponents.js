import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import DifficultyIndicator from '@site/src/components/DifficultyIndicator';
import LabExercise from '@site/src/components/LabExercise';
import PersonalizationPanel from '@site/src/components/PersonalizationPanel';
import DifficultyFilter from '@site/src/components/DifficultyFilter';
import LearningPathSelector from '@site/src/components/LearningPathSelector';
import ProgressTracker from '@site/src/components/ProgressTracker';

const customComponents = {
  DifficultyIndicator,
  LabExercise,
  PersonalizationPanel,
  DifficultyFilter,
  LearningPathSelector,
  ProgressTracker,
};

export default {
  ...MDXComponents,
  ...customComponents,
};