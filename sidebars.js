// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  textbook: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro/index',
        'intro/hardware-setup',
        'intro/getting-started'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Chapter 1: ROS 2 Basics',
      items: [
        'chapter-1/index',
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
      label: 'Chapter 3: Robot Control Theory',
      items: [
        'chapter-3/index',
        'chapter-3/robot-control-theory',
        'chapter-3/basic-movements',
        'chapter-3/lab-3'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Chapter 4: Perception Systems',
      items: [
        'chapter-4/index',
        'chapter-4/perception-systems',
        'chapter-4/sensor-integration',
        'chapter-4/lab-4'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Chapter 5: Vision-Language-Action',
      items: [
        'chapter-5/index',
        'chapter-5/vision-language-action',
        'chapter-5/llm-integration',
        'chapter-5/lab-5'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Chapter 6: Humanoid Locomotion',
      items: [
        'chapter-6/index',
        'chapter-6/humanoid-locomotion',
        'chapter-6/walking-algorithms',
        'chapter-6/lab-6'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Chapter 7: Capstone Project',
      items: [
        'chapter-7/index',
        'chapter-7/capstone-project',
        'chapter-7/autonomous-behaviors',
        'chapter-7/final-demo'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'appendix/troubleshooting',
        'appendix/reference',
        'appendix/hardware-specs'
      ],
      collapsed: true
    }
  ]
};

module.exports = sidebars;