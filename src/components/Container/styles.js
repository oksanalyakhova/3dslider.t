import styled from 'styled-components';

export const ContainerStyled = styled.section`
  width: calc(100% - 40px);
  margin: 0 auto;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${(props) =>
    props.topSpacingMobile || props.topSpacingMobile === 0
      ? `${props.topSpacingMobile}px`
      : '45px'};
  padding-bottom: ${(props) =>
    props.bottomSpacingMobile || props.bottomSpacingMobile === 0
      ? `${props.bottomSpacingMobile}px`
      : '45px'};
  background-color: ${(props) => props.backgroundColor};

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 600px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-left: 0;
    padding-right: 0;
    padding-top: ${(props) =>
      props.topSpacingDesktop || props.topSpacingDesktop === 0
        ? `${props.topSpacingDesktop}px`
        : '90px'};
    padding-bottom: ${(props) =>
      props.bottomSpacingDesktop || props.bottomSpacingDesktop === 0
        ? `${props.bottomSpacingDesktop}px`
        : '90px'};
    width: calc(100% - 200px);
    max-width: ${(props) => `calc(${props.cap}px - 300px)`};
  }

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: 100%;
    max-width: ${props => `${props.cap}px`};
  }
`;
