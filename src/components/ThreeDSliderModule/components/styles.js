import styled from 'styled-components';
import Typography from 'components/UI/Typography';

export const SliderHeader = styled.div`
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 38px;
    flex-direction: row;
    align-items: center;
  }
`;

export const SliderHeaderTypography = styled(Typography)`
  margin-top: 31px;
  display: flex;
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-size: 22px;
  line-height: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 0;
    margin-right: 51px;
    font-size: ${(props) => props.theme.fonts.overline_big_l};
  }
`;

export const SliderBody = styled.div`
  padding-bottom: 100px;
  position: relative;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-bottom: 127px;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 372px;
  }
`;

export const TooltipButton = styled.button`
  position: relative;
  width: 100%;
  text-align: left;
  color: inherit;
  background-color: transparent;
  opacity: 0.8;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 6px;
    width: fit-content;

    &::before {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      width: 100%;
      height: 4px;
      display: block;
      content: '';
      background-color: ${(props) => props.theme.colors.secondary};
      transform: ${(props) => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
      transform-origin: 0 0;
      transition: transform 400ms ease;
      will-change: transform;
    }
  }
`;

export const TooltipButtonTypography = styled(Typography)`
  font-size: ${(props) => props.theme.fonts.body_small};
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    color: ${(props) =>
      props.isActive ? props.theme.colors.secondary : props.theme.colors.white};
  }
`;

export const IconCross = styled.div`
  position: absolute;
  top: -1px;
  right: 0;
`;

export const TooltipBody = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  top: -21px;
  left: -20px;
  z-index: -1;
  padding: 56px 26px 26px 20px;
  width: calc(100% + 40px);
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fonts.body};
  line-height: 1.4;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    top: calc(100% + 21px);
    left: 0;
    padding: 24px 25px 24px 24px;
    width: 100%;
    font-size: ${(props) => props.theme.fonts.body_md};
  }
`;

export const Slide = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20px auto 1fr;
  grid-column-gap: 14px;
  grid-row-gap: 19px;
  align-items: center;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: relative;
    width: fit-content;
    grid-template-columns: 20px auto auto 1fr;
    grid-column-gap: 11px;
    grid-row-gap: 24px;
    align-items: baseline;
  }
`;

export const SlideColor = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    top: 2px;
  }
`;

export const SlideTitle = styled(Typography)`
  grid-column: 2/4;
  grid-row: 1/2;
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-size: ${(props) => props.theme.fonts.h5};
  line-height: 1.6;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 51px 0 3px;
    grid-column: 2/3;
  }
`;

export const SlideBody = styled.div`
  margin-bottom: 18px;
  max-width: 150px;
  grid-column: 1/4;
  grid-row: 2/3;
  font-size: ${(props) => props.theme.fonts.body_extrasmall};
  line-height: 1.4;
  opacity: 0.8;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0;
    max-width: 318px;
    grid-column: 1/5;
    font-size: ${(props) => props.theme.fonts.body_md};
  }
`;

export const SlideMinutesCaption = styled(Typography)`
  margin-right: 2px;
  grid-column: 1/3;
  grid-row: 3/4;
  font-family: ${(props) => props.theme.fontFamily.roboto_mono};
  font-size: ${(props) => props.theme.fonts.body_extrasmall};
  line-height: 1.4;
  text-transform: uppercase;
  opacity: 0.8;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0;
    grid-column: 3/4;
    grid-row: 1/2;
    font-size: ${(props) => props.theme.fonts.body_extrasmall_md};
  }
`;

export const SlideMinutes = styled(Typography)`
  grid-column: 3/4;
  grid-row: 3/4;
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-size: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.secondary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-column: 4/5;
    grid-row: 1/2;
  }
`;

export const SampleArrow = styled.div`
  position: absolute;
  bottom: -88px;
  z-index: 2;
  width: 50px;
  height: 50px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: 0.35s ease;

  &.slick-disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.prev-slick-arrow {
    right: 13px;
  }

  &.next-slick-arrow {
    right: -54px;
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.white};

    svg {
      path {
        fill: ${(props) => props.theme.colors.primary};
      }
    }
  }

  svg {
    path {
      fill: ${(props) => props.theme.colors.white};
      transition: 0.35s ease;
    }
  }
`;

export const SampleDots = styled.ul`
  bottom: -100px;
  display: flex;
  flex-wrap: nowrap;
  transform: translateX(${(props) => props.translate}px);
  transition: transform 400ms ease;
  will-change: transform;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    bottom: -114px;
    transform: none;
  }

  li {
    position: relative;
    z-index: 1;
    margin: 0;
    flex: none;
    width: 235px;
    height: auto;
    cursor: default;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: calc(100% / 5);
    }

    &:not(:last-child)::before {
      position: absolute;
      left: 20px;
      top: 4px;
      z-index: -1;
      width: 100%;
      height: 1px;
      display: block;
      content: '';
      background-color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const SampleDot = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const SampleDotIcon = styled.div`
  position: relative;
  margin-bottom: 25px;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;

  .slick-active & {
    &::before {
      transform: scale(1);
    }
  }

  &::before {
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: 1;
    width: 30px;
    height: 30px;
    display: block;
    content: '';
    border: 1px solid ${(props) => props.theme.colors.white};
    border-radius: 50%;
    transform: scale(0);
    transform-origin: center center;
    transition: transform 400ms ease;
    will-change: transform;
  }
`;

export const SampleDotLoading = styled.div`
  transform: scaleX(0);
  position: absolute;
  left: 16px;
  top: 2.5px;
  z-index: -1;
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.colors.secondary};

  &.is-active {
    transform: scaleX(1);
    transform-origin: 0 0;
    transition: transform 5000ms ease;
    will-change: transform;
  }
`;

export const SampleDotTitle = styled(Typography)`
  position: relative;
  font-family: ${(props) => props.theme.fontFamily.roboto_mono};
  font-size: ${(props) => props.theme.fonts.body_extrasmall};
  line-height: 1.4;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.6;
  transition: 0.35s ease;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.body_extrasmall_md};
  }

  .slick-active & {
    opacity: 1;

    &::before {
      transform: scaleX(1);
    }
  }

  &::before {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    height: 4px;
    display: block;
    content: '';
    background-color: ${(props) => props.theme.colors.secondary};
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: transform 400ms ease;
    will-change: transform;
  }
`;

export const ThreeDModelWrapper = styled.div`
  position: absolute;
  top: -190px;
  right: 0;
  width: 345px;
  height: 345px;
  transform: translateX(50%);

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    transform: translateX(0);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    top: auto;
    bottom: 120px;
    width: 591px;
    height: 591px;
    transform: translateX(10%);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    transform: translateX(84px);
  }
`;
