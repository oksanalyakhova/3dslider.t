import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../components/Pages';
import { graphql } from 'gatsby';
import LocaleContext from 'context/LocaleProvider';

const Index = (props) => {
  const { selectedLocale } = useContext(LocaleContext);

  const edges = props?.data?.allContentfulPage?.edges?.filter(
    (edge) => edge?.node?.node_locale === selectedLocale
  );

  const data = {
    data: {
      allContentfulPage: {
        edges,
      },
    },
  };

  return (
    <PageLayout
      {...data}
      matchingPages={props?.data?.allContentfulPage.edges}
      location={props.location}
    />
  );
};

export default Index;

Index.propTypes = {
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    allContentfulPage(
      filter: { handle: { regex: "/(?<name>^fr(?![/|a-z])|/(?![a-z]))/" } }
    ) {
      edges {
        node {
          contentful_id
          node_locale
          handle
          parentPage {
            handle
          }
          enableDarkHeader
          modules {
            __typename
            ... on Contentful3DSliderModule {
              id
              contentful_id
              ThreeDSliderBody: body
              cta
              node_locale
              title
              secondaryTitle
              popupBody {
                raw
              }
              steps {
                body {
                  raw
                }
                hexColor
                contentful_id
                minutes
                minutesCaption
                title
              }
            }
          }
        }
      }
    }
  }
`;
