import React from 'react';
import ThreeDSliderModule from 'components/ThreeDSliderModule';

const PageLayout = (props) => {
  const component = props?.allFile?.edges[0]?.node?.childDataJson;
  return (
    <div style={{ minHeight: '700px', margin: 'auto 0' }}>
      <ThreeDSliderModule component={component} />
    </div>
  );
};

export default PageLayout;
