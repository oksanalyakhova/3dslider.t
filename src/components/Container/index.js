import React from 'react'
import PropTypes from 'prop-types'
import { ContainerStyled } from './styles'

const Container = ({
  style,
  overflowHidden,
  children,
  backgroundColor,
  containerBackgroundColor,
  cap = '1100',
  topSpacingMobile,
  bottomSpacingMobile,
  topSpacingDesktop,
  bottomSpacingDesktop,
}) => {
  const containerStyledProps = {
    style,
    cap,
    backgroundColor,
    topSpacingMobile,
    bottomSpacingMobile,
    topSpacingDesktop,
    bottomSpacingDesktop,
  }

  return (
    <div
      style={{
        width: '100%',
        background: containerBackgroundColor,
        overflow: overflowHidden ? 'hidden' : 'initial',
      }}
    >
      <ContainerStyled {...containerStyledProps} className="Container">
        {children}
      </ContainerStyled>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  cap: PropTypes.oneOf(['1256', '1100']),
}

export default Container
