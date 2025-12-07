// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  textbook: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro/index',
        'intro/hardware-setup'
        // 'intro/getting-started' // This file doesn't exist
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Chapter 1: ROS 2 Basics',
      items: [
        'chapter-1/index',
        'chapter-1/learning-objectives', // Added the actual file that exists
        'chapter-1/ros2-basics',
        'chapter-1/nodes-topics-services',
        'chapter-1/lab-1'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Chapter 2: Isaac Sim Setup',
      items: [
        'chapter-2/index',
        'chapter-2/isaac-sim-setup',
        'chapter-2/simulation-concepts',
        'chapter-2/lab-2'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Instructor Guide',
      items: [
        'instructor-guide/chapter2-teaching-guide'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Validation',
      items: [
        'validation/chapter2-validation',
        'validation/hardware-validation'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'testing/week1-validation',
        'testing/personalization-testing'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Personalization',
      items: [
        'personalization/api-spec'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Research',
      items: [
        'research/unitree-g1-2025',
        'research/realsense-d435i-2025',
        'research/jetson-orin-nano-super-2025'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Budget Options',
      items: [
        'budget-options/budget-hardware-guide'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Curriculum',
      items: [
        'curriculum-mapping',
        'content-guidelines'
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'appendix/troubleshooting',
        'appendix/alternative-hardware', // Changed from 'reference' to the actual existing file
        'appendix/hardware-specs'
      ],
      collapsed: true
    }
  ]
};

module.exports = sidebars;