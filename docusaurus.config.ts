import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wandered2LA',
  tagline: 'Study log Archive',
  titleDelimiter: '•',
  favicon: 'img/favicon.ico',

  url: 'https://wandered2la.com',
  baseUrl: '/',
  organizationName: 'WanderedToLa',
  projectName: 'logs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/WanderedToLa/logs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/WanderedToLa/logs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Wandered2LA',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'WikiSidebar',
          position: 'left',
          label: 'WIKI',
        },
        { to: '/blog', label: 'Archive', position: 'left' },
        {
          href: 'https://github.com/WanderedToLa',
          position: 'right',
          className: 'navbar-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} WanderedToLa All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
