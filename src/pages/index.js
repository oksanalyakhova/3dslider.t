import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../components/Pages';
import { useStaticQuery, graphql } from 'gatsby';

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
  return <PageLayout {...data} />;
};

export default Index;

Index.propTypes = {
  location: PropTypes.object.isRequired,
};
