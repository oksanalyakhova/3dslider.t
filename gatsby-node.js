const path = require(`path`);
const locales = require('./config/i18n');
const {
  replaceTrailing,
  replaceBoth,
} = require('./src/utils/gatsby-node-helpers');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  Object.keys(locales).map((lang) => {
    page.path = replaceTrailing(page.path);
    const name = replaceBoth(page.path);

    return createPage({
      ...page,
      path: page.path,
      context: {
        locale: lang,
        name,
      },
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            handle
            parentPage {
              handle
            }
            node_locale
            contentful_id
          }
        }
      }
    }
  `).then((result) => {
    result &&
      result.data &&
      result.data.allContentfulPage.edges &&
      result.data.allContentfulPage.edges.forEach(({ node }) => {
        if (node.handle !== '/' && node.handle !== '404') {
          const matchingPages = result.data.allContentfulPage.edges.filter(
            ({ node: n }) => n.contentful_id === node.contentful_id
          );
          const route =
            node.parentPage && node.parentPage.handle
              ? `/${node.parentPage.handle}/${node.handle}`
              : `/${node.handle}`;

          createPage({
            path: route,
            component: path.resolve(`./src/templates/pageBuilder.js`),
            context: {
              locale: node.node_locale,
              handle: node.handle,
              matchingPages,
            },
          });
        }
      });
  });
};
