import styled from 'styled-components'

export const Content = styled.div`
  max-width: ${props => `${props.cap}px`};
  width: 100%;
  text-align: center;
  margin: 0 auto;

  .Typography {
    margin-bottom: 20px;
    color: ${props => (props.color ? props.color : props.theme.colors.primary)};
  }

  a,
  button {
    margin-top: 10px;
  }

  a {
    color: ${props => (props.color ? props.color : props.theme.colors.primary)};

    &::before,
    &::after {
      background: ${props =>
        props.color ? props.color : props.theme.colors.primary};
    }
  }
`
