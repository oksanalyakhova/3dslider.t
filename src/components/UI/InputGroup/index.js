import React, { useEffect, useRef, useState } from 'react'
import { InputGroupStyled } from './styles'

const InputGroup = props => {
  const { children } = props
  const inputGroupRef = useRef(null)
  const [buttonWidth, setButtonWidth] = useState(0)

  useEffect(() => {
    if (inputGroupRef?.current) {
      setButtonWidth(
        inputGroupRef?.current?.querySelector('button')?.clientWidth
      )
    }
  }, [inputGroupRef])

  return (
    <InputGroupStyled buttonWidth={buttonWidth} ref={inputGroupRef} {...props}>
      {children}
    </InputGroupStyled>
  )
}

export default InputGroup
