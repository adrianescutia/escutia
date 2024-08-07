import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Hubspot account id - @todo - Replace with your own
const hubspot = {
  accountId: '21339207',
};

const config: Config = {
  title: 'Escutia',
  tagline: 'Escutias are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://escutia.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'adrianescutia', // Usually your GitHub org/user name.
  projectName: 'escutia', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/adrianescutia/escutia/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-08BP6YKEP3',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      // https://docusaurus.io/docs/blog#multiple-blogs
      '@docusaurus/plugin-content-blog',
      {
        id: 'adrian',
        routeBasePath: 'adrian',
        path: './adrian',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      { name: 'keywords', content: 'Escutia, Adrian Escutia, La Rebelion, Joel Escutia, Donaldo Escutia, Escutias' },
      // {name: 'twitter:card', content: 'summary_large_image'},
    ],
    navbar: {
      title: 'Escutia',
      logo: {
        alt: 'Escutia Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: '/adrian', label: 'Adrian', position: 'left' },
        { to: '/joel', label: 'Joel', position: 'left', content: 'Joel Escutia' },
        { to: '/donaldo', label: 'Aldo', position: 'left', content: 'Aldo Escutia' },
        {
          href: 'https://github.com/adrianescutia',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Escutia',
          items: [
            {
              label: 'Adrian Escutia',
              to: '/adrian/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCclw2hNbGj-vVanDwFh42CQ/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Simplifiying Cloud Tech',
              href: 'https://rebelion.la',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/la-rebelion',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Escutia by <a href=https://rebelion.la>La Rebelion</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'script',
      attributes: {
        async: "true",
        defer: "true",
        type: 'text/javascript',
        id: 'hs-script-loader',
        src: `//js.hs-scripts.com/${hubspot.accountId}.js`,
      },
    },
  ],
};

export default config;