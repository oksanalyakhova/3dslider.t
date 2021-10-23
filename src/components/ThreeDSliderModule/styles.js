import styled from 'styled-components';
import Typography from 'components/UI/Typography';

export const ThreeDWrapper = styled.section`
  position: relative;
  z-index: 1;
  margin: 30px auto;
  width: 100%;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 130px auto;
    padding: 0 100px;
    max-width: ${(props) => `${props.cap}px`};
  }
`;

export const SectionBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const InformationContainer = styled.div`
  margin-bottom: 21px;
  margin-right: auto;
  max-width: 408px;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 42px;
  }

  h2 {
    margin-bottom: 21px;
  }
`;

export const BodyTypography = styled(Typography)`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fonts.body};
  line-height: 1.4;
  opacity: 0.8;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.body_md};
  }
`;
