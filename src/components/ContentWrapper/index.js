import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const ContentWrapper = ({ 
  children, 
  alignContent, 
  bgColor, 
  topSpacing,
  bottomSpacing
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
  )
}
export default ContentWrapper

ContentWrapper.propTypes = {
  alignContent: PropTypes.string, // 'left', 'center', 'right', 'justify'
}

ContentWrapper.defaultProps = {
  alignContent: "center",
}

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1256px;
  margin: 0px auto;
  position: relative;
  padding: 0;
`

const Layout = styled.div`
  background-color: ${props => props.bgColor};
  padding-top: ${props => props.topSpacing};
  padding-bottom: ${props => props.bottomSpacing};
  text-align: ${props => props.alignContent};
`