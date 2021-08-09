require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    banner: website.logo,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-image',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-lodash',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          'CONTENTFUL_SPACE_ID',
          'CONTENTFUL_ACCESS_TOKEN',
          'CONTENTFUL_CONTENT_CONTEXT_URL',
          'GATSBY_CONTENTFUL_SPACE_ID',
          'GATSBY_CONTENTFUL_ACCESS_TOKEN',
          'GATSBY_CONTENTFUL_CONTENT_CONTEXT_URL',
          'GATSBY_GOOGLE_API_KEY',
          'GOOGLE_API_KEY',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `Roboto Mono`,
          `Recursive`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `#`,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-resolve-src',
    `gatsby-transformer-inline-svg`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        static: path.join(__dirname, 'static'),
        functions: path.join(__dirname, 'src/utils/functions'),
        styles: path.join(__dirname, 'src/utils/styles'),
        hooks: path.join(__dirname, 'src/utils/hooks'),
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        context: path.join(__dirname, 'src/context'),
        config: path.join(__dirname, 'config'),
      },
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-styled-components',
    // Must be placed at the end
    // 'gatsby-plugin-offline',
    'gatsby-plugin-meta-redirect',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};
