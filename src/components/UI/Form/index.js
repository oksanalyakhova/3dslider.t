import React, { createContext } from 'react'
import { FormStyled } from './styles'

export const FormContext = createContext()

const Form = ({
  className,
  onSubmit,
  state,
  setState,
  children,
  throttle,
  ...rest
}) => {
  const valueProps = {
    state,
    setState,
    throttle: throttle ? throttle : 0,
  }

  return (
    <FormContext.Provider value={{ ...valueProps }}>
      <FormStyled
        noValidate
        className={className ? className : ''}
        onSubmit={onSubmit}
        {...rest}
      >
        {children}
      </FormStyled>
    </FormContext.Provider>
  )
}

Form.propTypes = {}

export default Form
