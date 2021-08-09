import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import ThreeDSliderModule from 'components/ThreeDSliderModule';

const Index = () => {
  const data = useStaticQuery(graphql`
    query SliderQuery {
      allFile {
        edges {
          node {
            childDataJson {
              id
              ThreeDSliderBody
              cta
              title
              secondaryTitle
              popupBody
              steps {
                body
                hexColor
                minutes
                minutesCaption
                title
              }
            }
          }
        }
      }
    }
  `);

  const component = data?.allFile?.edges[0]?.node?.childDataJson;
  return <ThreeDSliderModule component={component} />;
};

export default Index;

Index.propTypes = {
  location: PropTypes.object.isRequired,
};
