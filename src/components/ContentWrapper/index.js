import React from 'react';
import PropTypes from 'prop-types';
import { Layout, InnerContainer } from './styles';

export const ContentWrapper = ({
  children,
  alignContent,
  bgColor,
  topSpacing,
  bottomSpacing,
}) => {
  return (
    <Layout
      alignContent={alignContent}
      bgColor={bgColor}
      topSpacing={topSpacing}
      bottomSpacing={bottomSpacing}
    >
      <InnerContainer>{children}</InnerContainer>
    </Layout>
  );
};
export default ContentWrapper;

ContentWrapper.propTypes = {
  alignContent: PropTypes.string,
};

ContentWrapper.defaultProps = {
  alignContent: 'center',
};
