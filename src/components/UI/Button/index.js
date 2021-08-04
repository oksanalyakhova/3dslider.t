import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { ButtonStyled } from './styles'
import { useMediaQuery } from '@material-ui/core'
import { useTheme, StylesProvider } from '@material-ui/core/styles'

const Button = ({
  children,
  theme = 'primary',
  isLoading = false,
  hasCompleted = false,
  withIcon = '',
  className,
  to,
  style,
  type,
  disabled,
  isShrinked,
  isExternal,
  onClick = () => {},
}) => {
  const materialTheme = useTheme()
  const isDesktop = useMediaQuery(materialTheme.breakpoints.up('960'))
  const buttonRef = useRef(null)

  const buttonProps = {
    children,
    type: type === 'submit' ? 'submit' : 'button',
    style: style ? style : null,
    className: `Button ${theme} ${className ? className : ''} ${
      isDesktop ? 'is-desktop' : ''
    } ${withIcon ? 'has-icon' : ''} ${!children ? 'only-icon' : ''} ${
      isShrinked ? 'is-shrinked' : ''
    }`,
  }

  return (
    <StylesProvider injectFirst>
      <ButtonStyled
        disabled={disabled}
        role="button"
        {...buttonProps}
        ref={buttonRef}
        onClick={() => {
          if (to && !isExternal) {
            navigate(to)
          } else if (isExternal && to) {
            window.open(to, '_blank')
          } else {
            onClick()
          }
        }}
      >
        <span>{children}</span>

      </ButtonStyled>
    </StylesProvider>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.oneOf(['primary', 'secondary', 'recursive', 'quaternary']),
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isShrinked: PropTypes.bool,
}

export default Button
