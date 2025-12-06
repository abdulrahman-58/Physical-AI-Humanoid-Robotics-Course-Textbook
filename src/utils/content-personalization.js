/**
 * Content Personalization Logic for Physical AI & Humanoid Robotics Textbook
 *
 * This utility provides functions for adapting content based on student profiles,
 * skill levels, and learning preferences.
 */

/**
 * Personalization settings interface
 * @typedef {Object} PersonalizationSettings
 * @property {string} difficultyFilter - 'all', 'beginner', 'intermediate', 'advanced'
 * @property {string} learningPath - 'theoretical', 'practical', 'mixed'
 * @property {boolean} showAdvancedContent - Whether to show advanced content sections
 * @property {boolean} showSimplifiedExplanations - Whether to show simplified explanations
 * @property {boolean} includeAdditionalExamples - Whether to include additional examples
 * @property {boolean} highlightKeyConcepts - Whether to highlight key concepts
 */

/**
 * Student profile interface
 * @typedef {Object} StudentProfile
 * @property {string} skillLevel - 'beginner', 'intermediate', 'advanced'
 * @property {string} preferredLearningPath - 'theoretical', 'practical', 'mixed'
 * @property {Array<string>} completedChapters - Array of completed chapter IDs
 * @property {Array<string>} completedLabs - Array of completed lab IDs
 * @property {number} progressPercentage - Overall progress percentage
 * @property {PersonalizationSettings} personalizationSettings - Personalization preferences
 */

/**
 * Filters content based on difficulty level
 * @param {string} content - Original content to filter
 * @param {string} difficultyFilter - Target difficulty level ('all', 'beginner', 'intermediate', 'advanced')
 * @returns {string} Filtered content
 */
export function filterContentByDifficulty(content, difficultyFilter) {
  if (!content || difficultyFilter === 'all') {
    return content;
  }

  // Remove advanced sections if not requested
  if (difficultyFilter === 'beginner') {
    // Remove advanced-only sections
    content = content.replace(/<!-- ADVANCED_ONLY_START -->[\s\S]*?<!-- ADVANCED_ONLY_END -->/g, '');
    // Simplify complex explanations
    content = content.replace(/<!-- COMPLEX_EXPLANATION -->[\s\S]*?<!-- EXPLANATION_END -->/g,
      (match) => simplifyExplanation(match));
  } else if (difficultyFilter === 'intermediate') {
    // Remove advanced sections beyond intermediate level
    content = content.replace(/<!-- ADVANCED_ONLY_START -->[\s\S]*?<!-- ADVANCED_ONLY_END -->/g, '');
  }
  // For 'advanced', keep all content

  return content;
}

/**
 * Adapts content based on learning path preference
 * @param {string} content - Original content to adapt
 * @param {string} learningPath - Preferred learning path ('theoretical', 'practical', 'mixed')
 * @returns {string} Adapted content
 */
export function adaptContentByLearningPath(content, learningPath) {
  if (!content || learningPath === 'mixed') {
    return content;
  }

  if (learningPath === 'theoretical') {
    // Emphasize theory and background
    content = content.replace(/## Practical Implementation/g, '## Theoretical Foundation');
    content = content.replace(/## Hands-on Exercise/g, '## Conceptual Analysis');
  } else if (learningPath === 'practical') {
    // Emphasize practical applications
    content = content.replace(/## Theoretical Background/g, '## Practical Application');
    content = content.replace(/## Mathematical Derivation/g, '## Implementation Insight');
  }

  return content;
}

/**
 * Adds personalized elements to content based on settings
 * @param {string} content - Original content
 * @param {PersonalizationSettings} settings - Personalization settings
 * @returns {string} Enhanced content with personalized elements
 */
export function addPersonalizedElements(content, settings) {
  if (!content) {
    return content;
  }

  // Add simplified explanations if requested
  if (settings.showSimplifiedExplanations) {
    content = addSimplifiedExplanations(content);
  }

  // Add additional examples if requested
  if (settings.includeAdditionalExamples) {
    content = addAdditionalExamples(content);
  }

  // Highlight key concepts if requested
  if (settings.highlightKeyConcepts) {
    content = highlightKeyConcepts(content);
  }

  // Add advanced content if requested
  if (settings.showAdvancedContent) {
    content = addAdvancedContent(content);
  }

  return content;
}

/**
 * Simplifies complex explanations in content
 * @param {string} content - Content to simplify
 * @returns {string} Simplified content
 */
function simplifyExplanation(content) {
  // Replace complex technical jargon with simpler terms
  return content
    .replace(/\butilize\b/gi, 'use')
    .replace(/\bimplement\b/gi, 'apply')
    .replace(/\bconsequently\b/gi, 'so')
    .replace(/\btherefore\b/gi, 'so')
    .replace(/\bthus\b/gi, 'so')
    .replace(/\bhowever\b/gi, 'but')
    .replace(/\bnevertheless\b/gi, 'but')
    .replace(/\bin order to\b/gi, 'to')
    .replace(/\bwith regard to\b/gi, 'about')
    .replace(/\bwith respect to\b/gi, 'about')
    .replace(/\bas a result of\b/gi, 'because of');
}

/**
 * Adds simplified explanations to content
 * @param {string} content - Original content
 * @returns {string} Content with simplified explanations
 */
function addSimplifiedExplanations(content) {
  // Add simplified explanations for complex concepts
  return content
    .replace(/(algorithm|method|approach)/gi, (match) => {
      if (Math.random() > 0.5) { // Randomly add simplifications to avoid overdoing it
        return `${match} (way of doing something)`;
      }
      return match;
    })
    .replace(/(optimization)/gi, (match) => {
      if (Math.random() > 0.5) {
        return `${match} (making something work better)`;
      }
      return match;
    })
    .replace(/(integration)/gi, (match) => {
      if (Math.random() > 0.5) {
        return `${match} (connecting parts together)`;
      }
      return match;
    });
}

/**
 * Adds additional examples to content
 * @param {string} content - Original content
 * @returns {string} Content with additional examples
 */
function addAdditionalExamples(content) {
  // Add additional examples after key concepts
  return content
    .replace(/(ROS 2)/gi, (match) => {
      if (Math.random() > 0.7) { // Add examples occasionally
        return `${match}\n\n**Example**: Think of ROS 2 like a messaging system that allows different parts of a robot to talk to each other.`;
      }
      return match;
    })
    .replace(/(simulation)/gi, (match) => {
      if (Math.random() > 0.7) {
        return `${match}\n\n**Example**: Like practicing driving in a video game before driving a real car.`;
      }
      return match;
    })
    .replace(/(control)/gi, (match) => {
      if (Math.random() > 0.7) {
        return `${match}\n\n**Example**: Like steering a car - you decide where to go and make it happen.`;
      }
      return match;
    });
}

/**
 * Highlights key concepts in content
 * @param {string} content - Original content
 * @returns {string} Content with highlighted concepts
 */
function highlightKeyConcepts(content) {
  // Add highlighting for key concepts
  return content
    .replace(/\b(ROS 2|Isaac Sim|simulation|control|perception|navigation|locomotion|humanoid)\b/gi,
      '**$&**')
    .replace(/\b(robot|node|topic|service|action|message|publisher|subscriber)\b/gi,
      '*$&*');
}

/**
 * Adds advanced content to content
 * @param {string} content - Original content
 * @returns {string} Content with advanced content added
 */
function addAdvancedContent(content) {
  // Add advanced content sections
  return content
    .replace(/(For more advanced users)/gi,
      '<details>\n<summary>Advanced Topic: $&</summary>\n\nThis section covers more complex aspects...\n\n</details>')
    .replace(/(Advanced configuration)/gi,
      '<details>\n<summary>Advanced: $&</summary>\n\nFor experienced users only...\n\n</details>');
}

/**
 * Determines if content should be shown based on student profile
 * @param {string} content - Content to evaluate
 * @param {StudentProfile} studentProfile - Student profile
 * @returns {boolean} Whether content should be shown
 */
export function shouldShowContent(content, studentProfile) {
  if (!studentProfile || !studentProfile.personalizationSettings) {
    return true; // Show all content if no profile
  }

  const settings = studentProfile.personalizationSettings;
  const skillLevel = studentProfile.skillLevel || 'beginner';

  // Determine if content difficulty matches student level
  const contentDifficulty = extractContentDifficulty(content);

  if (settings.difficultyFilter !== 'all') {
    if (settings.difficultyFilter === 'beginner' && contentDifficulty === 'advanced') {
      return false;
    }
    if (settings.difficultyFilter === 'intermediate' && contentDifficulty === 'advanced') {
      return false;
    }
    if (settings.difficultyFilter === 'advanced' && contentDifficulty === 'beginner' && skillLevel !== 'advanced') {
      return false;
    }
  }

  return true;
}

/**
 * Extracts difficulty level from content
 * @param {string} content - Content to analyze
 * @returns {string} Difficulty level ('beginner', 'intermediate', 'advanced', 'mixed')
 */
function extractContentDifficulty(content) {
  if (!content) return 'mixed';

  const lowerContent = content.toLowerCase();

  // Check for advanced indicators
  if (lowerContent.includes('advanced') ||
      lowerContent.includes('expert') ||
      lowerContent.includes('complex') ||
      lowerContent.includes('mathematical derivation')) {
    return 'advanced';
  }

  // Check for beginner indicators
  if (lowerContent.includes('introduction') ||
      lowerContent.includes('basic') ||
      lowerContent.includes('fundamental') ||
      lowerContent.includes('getting started')) {
    return 'beginner';
  }

  // Default to intermediate if no clear indicator
  return 'intermediate';
}

/**
 * Gets personalized content based on student profile
 * @param {string} content - Original content
 * @param {StudentProfile} studentProfile - Student profile
 * @returns {string} Personalized content
 */
export function getPersonalizedContent(content, studentProfile) {
  if (!content) {
    return content;
  }

  // If no personalization settings, return original content
  if (!studentProfile || !studentProfile.personalizationSettings) {
    return content;
  }

  let personalizedContent = content;

  // Apply personalization transformations
  personalizedContent = filterContentByDifficulty(
    personalizedContent,
    studentProfile.personalizationSettings.difficultyFilter
  );

  personalizedContent = adaptContentByLearningPath(
    personalizedContent,
    studentProfile.personalizationSettings.learningPath
  );

  personalizedContent = addPersonalizedElements(
    personalizedContent,
    studentProfile.personalizationSettings
  );

  return personalizedContent;
}

/**
 * Gets recommended next content based on student progress
 * @param {Array<Object>} availableContent - Available content items
 * @param {StudentProfile} studentProfile - Student profile
 * @returns {Array<Object>} Recommended content items
 */
export function getRecommendedContent(availableContent, studentProfile) {
  if (!availableContent || !studentProfile) {
    return availableContent || [];
  }

  const completedChapters = studentProfile.completedChapters || [];
  const skillLevel = studentProfile.skillLevel || 'beginner';

  // Sort content based on relevance to student's progress and skill level
  return availableContent
    .filter(item => !completedChapters.includes(item.id))
    .sort((a, b) => {
      // Prioritize content that matches skill level
      const aMatchesSkill = a.difficulty === skillLevel;
      const bMatchesSkill = b.difficulty === skillLevel;

      if (aMatchesSkill && !bMatchesSkill) return -1;
      if (!aMatchesSkill && bMatchesSkill) return 1;

      // Prioritize content that builds on recently completed chapters
      const aPrereqsMet = completedChapters.some(chapter =>
        a.prerequisites?.includes(chapter));
      const bPrereqsMet = completedChapters.some(chapter =>
        b.prerequisites?.includes(chapter));

      if (aPrereqsMet && !bPrereqsMet) return -1;
      if (!aPrereqsMet && bPrereqsMet) return 1;

      // Default: sort by content ID
      return a.id.localeCompare(b.id);
    });
}

// Export as default for easy import
export default {
  filterContentByDifficulty,
  adaptContentByLearningPath,
  addPersonalizedElements,
  getPersonalizedContent,
  getRecommendedContent,
  shouldShowContent
};