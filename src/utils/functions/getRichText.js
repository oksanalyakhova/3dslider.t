import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import MediaAsset from 'components/UI/MediaAsset';

import Typography from 'components/UI/Typography';

const getRichText = (content) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        const childs = children?.map((child) => {
          return (
            <Typography elementTheme="h1 bold" key={JSON.stringify(child)}>
              {child}
            </Typography>
          );
        });
        return childs;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        const childs = children?.map((child) => {
          return (
            <Typography elementTheme="h2 semi-bold" key={JSON.stringify(child)}>
              {child}
            </Typography>
          );
        });
        return childs;
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        const childs = children?.map((child) => {
          return (
            <Typography elementTheme="h3 semi-bold" key={JSON.stringify(child)}>
              {child}
            </Typography>
          );
        });
        return childs;
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        const childs = children?.map((child) => {
          return (
            <Typography elementTheme="h4" key={JSON.stringify(child)}>
              {child}
            </Typography>
          );
        });
        return childs;
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        const childs = children?.map((child) => {
          return (
            <Typography elementTheme="h5" key={JSON.stringify(child)}>
              {child}
            </Typography>
          );
        });
        return childs;
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        const childs = children?.map((child) => {
          return (
            <Typography elementTheme="h6" key={JSON.stringify(child)}>
              {child}
            </Typography>
          );
        });
        return childs;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <Typography
            as="p"
            elementTheme="small"
            key={Math.random().toString(36).substr(2, 9)}
          >
            {children}
          </Typography>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const component = content?.references.find(
          (r) => r.contentful_id === node?.data?.target.sys.id
        );

        switch (component.__typename) {
          case 'ContentfulAsset':
            return <MediaAsset image={component} />;
          default:
            return '';
        }
      },
    },
  };

  const body = content?.raw
    ? documentToReactComponents(JSON.parse(content?.raw), options)
    : '';

  return body;
};

export default getRichText;
