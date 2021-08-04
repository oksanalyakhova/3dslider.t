import styled from 'styled-components';
import Typography from 'components/UI/Typography';

export const Title = styled(Typography)`
  font-family: ${(props) => props.theme.fontFamily.recursive};
  padding-left: ${(props) => props.line && '12px'};
  position: relative;
  line-height: 1.2;
  color: ${(props) =>
    props.lightdarkMode
      ? props.theme.colors.white
      : props.theme.colors.primary};
  margin-left: ${(props) => (props.displaced ? '10px' : '0')};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : '408px')};

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-left: 0;
    margin-left: ${(props) => (props.displaced ? '106px' : '0')};
  }

  &::before {
    position: absolute;
    left: -32px;
    top: 0.5em;
    z-index: 1;
    display: ${(props) => props.displaced && 'block'};
    content: '';
    width: 20px;
    height: 4px;
    background-color: ${(props) => props.line && props.theme.colors.secondary};

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      left: -106px;
      width: 74px;
    }
  }
`;
