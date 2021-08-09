import React, { useEffect, useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import LocaleContext from 'context/LocaleProvider';
import ThreeDSliderModule from 'components/ThreeDSliderModule';
import HeaderContext from 'context/HeaderProvider';

const PageLayout = (props) => {
  const { setLocalePageContext, setSelectedLocale, selectedLocale } =
    useContext(LocaleContext);
  const { setDarkHeader } = useContext(HeaderContext);

  const {
    data: {
      allContentfulPage: {
        edges: [{ node }],
      },
    },
    location,
  } = props;

  useEffect(() => {
    const matchingPages =
      props?.matchingPages || props?.pageContext?.matchingPages;
    const nodeLocale =
      props?.data?.allContentfulPage?.edges[0]?.node?.node_locale;

    if (matchingPages) {
      setLocalePageContext(matchingPages);
    } else {
      setLocalePageContext(null);
    }

    if (nodeLocale !== selectedLocale) {
      setSelectedLocale(nodeLocale);
    }

    setDarkHeader(node.enableDarkHeader);
  }, [
    location?.pathname,
    node.enableDarkHeader,
    props?.data?.allContentfulPage?.edges,
    props?.matchingPages,
    props?.pageContext?.matchingPages,
    selectedLocale,
    setDarkHeader,
    setLocalePageContext,
    setSelectedLocale,
  ]);

  return (
    <StaticQuery
      query={graphql`
        query SliderQuery {
          allSliderJson {
            edges {
              node {
              id
              ThreeDSliderBody: body
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
      `}
      render={(data) => <ThreeDSliderModule key={data.id} component={data} />}
    />
    // <div style={{ minHeight: '700px', margin: 'auto 0' }}>
    //   {node?.modules?.map((component) => {
    //     switch (component.__typename) {
    //       case 'Contentful3DSliderModule':
    //         console.log(component);
    //         return (
    //           component && (
    //             <ThreeDSliderModule key={component.id} component={component} />
    //           )
    //         );
    //       default:
    //         return null;
    //     }
    //   })}
    // </div>
  );
};

export default PageLayout;
