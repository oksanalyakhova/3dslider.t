import React from 'react';
import ThreeDSliderModule from 'components/ThreeDSliderModule';

const PageLayout = (props) => {
  const component = props?.allFile?.edges[0]?.node?.childDataJson;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <ThreeDSliderModule component={component} />
    </div>
  );
};

export default PageLayout;
