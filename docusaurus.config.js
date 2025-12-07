// @ts-check
// `@type` JSDoc annotations allow IDEs and type checkers to type-check this file
// even if it's using CommonJS.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'From zero to fully autonomous simulated humanoid robot using ROS 2 + Isaac Sim + Vision-Language-Action models',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://physical-ai-humanoid-textbook.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Vercel deployment, use '/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // Removed Urdu due to page not found issues
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/abdulrahman-58/Physical-AI-Humanoid-Robotics-Course-Textbook/edit/main/',
          // Exclude template files from documentation build
          exclude: ['templates/**'],
        },
        blog: false, // Disable blog for textbook
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI Textbook',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'textbook',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/abdulrahman-58/Physical-AI-Humanoid-Robotics-Course-Textbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Textbook',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/abdul-rahman-azam-09155328b/',
              },
              {
                label: 'Twitter (X)',
                href: 'https://x.com/AbdulRahman_Az5/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/users/abdulrahmanazam.58',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/abdulrahman-58/Physical-AI-Humanoid-Robotics-Course-Textbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abdul Rahman Azam ♥. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['python', 'bash', 'json', 'yaml'],
      },
    }),
};

module.exports = config;