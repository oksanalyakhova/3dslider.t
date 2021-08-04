import React, { useEffect, useContext } from 'react';
import LocaleContext from 'context/LocaleProvider';
import ThreeDSliderModule from 'components/ThreeDSliderModule';
import HeaderContext from 'context/HeaderProvider';

const PageLayout = (props) => {
  const {
    setLocalePageContext,
    setSelectedLocale,
    selectedLocale,
  } = useContext(LocaleContext);
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
    <div style={{ minHeight: '700px' }}>
      {node?.modules?.map((component) => {
        switch (component.__typename) {
          case 'Contentful3DSliderModule':
            return (
              component && (
                <ThreeDSliderModule key={component.id} component={component} />
              )
            );
          default:
            return <></>;
        }
      })}
    </div>
  );
};

export default PageLayout;
