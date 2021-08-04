import styled, { css } from 'styled-components';

export const fontWeight = css`
  &.bold {
    font-weight: 700;
  }

  &.semi-bold {
    font-weight: 600;
  }
`;

export const highlightedText = css`
  u {
    display: inline-block;
    text-decoration: none;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 55%,
      rgba(${(props) => props.theme.colors.purple_light_1_rgb}, 0.15) 55% 85%,
      rgba(0, 0, 0, 0) 85%
    );
  }
`;

export const p = css`
  font-size: ${(props) => props.theme.fonts.body};
  letter-spacing: ${(props) => props.theme.letterSpacing.body};
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.body_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.body_md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.body_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.body_l};
  }
`;

export const small = css`
  font-size: ${(props) => props.theme.fonts.body_small};
  letter-spacing: ${(props) => props.theme.letterSpacing.body_small};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.body_small_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.body_small_md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.body_small_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.body_small_l};
  }
`;

export const blockquote = css`
  font-size: ${(props) => props.theme.fonts.blockquote};
  letter-spacing: ${(props) => props.theme.letterSpacing.blockquote};
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-weight: 700;

  * {
    font-weight: 700 !important;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.blockquote_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.blockquote_md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.blockquote_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.blockquote_l};
  }
`;

export const h1 = css`
  font-size: ${(props) => props.theme.fonts.h1};
  letter-spacing: ${(props) => props.theme.letterSpacing.h1};
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-weight: 600;
  line-height: 1;

  * {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.h1_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.h1_md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.h1_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.h1_l};
  }

  ${fontWeight};
`;
export const h2 = css`
  font-size: ${(props) => props.theme.fonts.h2};
  letter-spacing: ${(props) => props.theme.letterSpacing.h2};
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-weight: 600;
  line-height: 1.3;

  * {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.h2_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.h2_md};
    line-height: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.h2_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.h2_l};
  }

  ${fontWeight};
`;
export const h3 = css`
  font-size: ${(props) => props.theme.fonts.h3};
  letter-spacing: ${(props) => props.theme.letterSpacing.h3};
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-weight: 500;
  line-height: 1;

  * {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.h3_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.h3_md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.h3_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.h3_l};
  }

  ${fontWeight};
`;
export const h4 = css`
  font-size: ${(props) => props.theme.fonts.h4};
  letter-spacing: ${(props) => props.theme.letterSpacing.h4};
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-weight: 500;
  line-height: 1;

  * {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.h4_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.h4_md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.h4_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.h4_l};
  }

  ${fontWeight};
`;
export const h5 = css`
  font-size: ${(props) => props.theme.fonts.h5};
  letter-spacing: ${(props) => props.theme.letterSpacing.h5};
  font-family: ${(props) => props.theme.fontFamily.recursive};
  font-weight: 500;
  line-height: 1;

  * {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.h5_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.h5_md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.h5_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.h5_l};
  }

  ${fontWeight};
`;

export const TypographyStyled = styled.p`
  ${p};
  ${fontWeight};

  &.small {
    ${small};
  }

  &.caption {
    font-size: ${(props) => props.theme.fonts.caption};
    letter-spacing: ${(props) => props.theme.letterSpacing.caption};

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.caption_md};
      letter-spacing: ${(props) => props.theme.letterSpacing.caption_md};
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: ${(props) => props.theme.fonts.caption_l};
      letter-spacing: ${(props) => props.theme.letterSpacing.caption_l};
    }
  }

  &.overline {
    font-size: ${(props) => props.theme.fonts.overline};
    letter-spacing: ${(props) => props.theme.letterSpacing.overline};
    font-family: ${(props) => props.theme.fontFamily.secondary};
    text-transform: uppercase;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: ${(props) => props.theme.fonts.overline_md};
      letter-spacing: ${(props) => props.theme.letterSpacing.overline_md};
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: ${(props) => props.theme.fonts.overline_l};
      letter-spacing: ${(props) => props.theme.letterSpacing.overline_l};
    }

    &.small {
      font-size: ${(props) => props.theme.fonts.overline_small};
      letter-spacing: ${(props) => props.theme.letterSpacing.overline_small};

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: ${(props) => props.theme.fonts.overline_small_md};
        letter-spacing: ${(props) =>
          props.theme.letterSpacing.overline_small_md};
      }

      @media (min-width: ${(props) => props.theme.breakpoints.l}) {
        font-size: ${(props) => props.theme.fonts.overline_small_l};
        letter-spacing: ${(props) =>
          props.theme.letterSpacing.overline_small_l};
      }
    }

    &.big {
      font-size: ${(props) => props.theme.fonts.overline_big};
      letter-spacing: ${(props) => props.theme.letterSpacing.overline_big};

      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: ${(props) => props.theme.fonts.overline_big_md};
        letter-spacing: ${(props) => props.theme.letterSpacing.overline_big_md};
      }

      @media (min-width: ${(props) => props.theme.breakpoints.l}) {
        font-size: ${(props) => props.theme.fonts.overline_big_l};
        letter-spacing: ${(props) => props.theme.letterSpacing.overline_big_l};
      }
    }
  }

  &.blockquote {
    ${blockquote};
  }

  &.h1 {
    ${h1};
    ${highlightedText};
  }

  &.h2 {
    ${h2};
    ${highlightedText};
  }

  &.h3 {
    ${h3};
    ${highlightedText};
  }

  &.h4 {
    ${h4};
    ${highlightedText};
  }

  &.h5 {
    ${h5};
    ${highlightedText};
  }
`;
