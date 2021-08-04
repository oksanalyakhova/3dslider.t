import styled from 'styled-components'

export const InputGroupStyled = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  ${props =>
    props.buttonInsideForm
      ? `
    .MuiOutlinedInput-notchedOutline {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `
      : ''}

  button {
    margin-left: ${props => (props.buttonInsideForm ? '-10px' : '10px')};
    max-height: 48px;
  }

  > div:first-of-type {
    width: ${props => `calc(100% - ${props.buttonWidth}px`});
  }
`
