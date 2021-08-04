import { css } from 'styled-components';
import {
  p,
  small,
  blockquote,
  h1,
  h2,
  h3,
  h4,
  h5,
} from 'components/UI/Typography/styles';
import { linkStyle } from 'components/UI/Link/styles';

const theme = {
  colors: {
    primary: '#222121',
    secondary: '#FFD600',
    tertiary: '#341060',
    light: '#F0F0F0',
    quaternary: '#ffffff',
    success: '#6CAE75',
    error: '#FF0000',
    black: '#000000',
    grey_1: '#868686',
    grey_2: '#F0F0F1',
    grey_3: '#222222',
    grey_4: '#666666',
    grey_5: '#221E1D',
    grey_6: '#CCCCCC',
    white: '#ffffff',
    darkgrey: '#030302',
    // green: '#23D6A8',
    green: '#28E8A9',
    secondarygreen: 'rgba(107, 224, 171, 0.6)',
    lightgreen: '#DFFCF2',
    purple: '#341060',
    purple_light_1: '#E4D7F5',
    purple_light_1_rgb: '228, 215, 245',
    purple_light_1_rgba: '228, 215, 245, 0.6',
    purple_light_2: '#F7F1FF',
    purple_light_2_rgb: '247, 241, 255',
    purple_light_3_rgba: '74, 30, 113, 0.05',
  },
  breakpoints: {
    xxs: '375px',
    xs: '425px',
    s: '600px',
    md: '960px',
    l: '1200px',
    xl: '1400px',
    xxl: '1920px',
  },
  fontFamily: {
    primary: 'Roboto, Helvetica, Arial, sans-serif',
    secondary: 'Jura, sans-serif',
    recursive: 'Recursive, sans-serif',
    roboto: 'Roboto, sans-serif',
    roboto_mono: 'Roboto Mono, sans-serif',
  },

  // "_l", "_md" refers to the breakpoint
  // E.G: "heading_l" font will apply on screen larger then 1200px

  // Naming should match html naming as much as possible

  fonts: {
    h1_l: '96px', // min 1200px
    h1_md: '64px', // min 960px
    h1: '36px', // min 0

    h2_l: '48px', // min 1200px
    h2_md: '36px', // min 960px
    h2: '26px', // min 0

    h3_l: '36px', // min 1200px
    h3_md: '28px', // min 960px
    h3: '22px', // min 0

    h4_l: '24px', // min 1200px
    h4_md: '22px', // min 960px
    h4: '18px', // min 0

    h5_l: '20px', // min 1200px
    h5_md: '20px', // min 960px
    h5: '18px', // min 0

    body_l: '24px', // min 1200px
    body_md: '18px', // min 960px
    body: '16px', // min 0

    body_small_l: '18px', // min 1200px
    body_small_md: '16px', // min 960px
    body_small: '14px', // min 0

    body_extrasmall_l: '14px', // min 1200px
    body_extrasmall_md: '14px', // min 960px
    body_extrasmall: '12px', // min 0

    caption_l: '14px', // min 1200px
    caption_md: '14px', // min 960px
    caption: '12px', // min 0

    overline_big_l: '36px', // min 1200px
    overline_big_md: '36px', // min 960px
    overline_big: '14px', // min 0

    overline_l: '20px', // min 1200px
    overline_md: '20px', // min 960px
    overline: '14px', // min 0

    overline_small_l: '16px', // min 1200px
    overline_small_md: '16px', // min 960px
    overline_small: '14px', // min 0

    blockquote_l: '24px', // min 1200px
    blockquote_md: '24px', // min 960px
    blockquote: '18px', // min 0

    list_l: '0', // min 1200px
    list_md: '0', // min 960px
    list: '0', // min 0

    link_l: '20px', // min 1200px
    link_md: '20px', // min 960px
    link: '18px', // min 0

    extraLarge_md: '150px', // min 960px
    extraLarge: '80px', // min 0
  },
  letterSpacing: {
    h1_l: '-1px', // min 1200px
    h1_md: '-1px', // min 960px
    h1: '-1px', // min 0

    h2_l: '-0.5px', // min 1200px
    h2_md: '-0.5px', // min 960px
    h2: '-0.5px', // min 0

    h3_l: '0', // min 1200px
    h3_md: '0', // min 960px
    h3: '0', // min 0

    h4_l: '0', // min 1200px
    h4_md: '0', // min 960px
    h4: '0.07px', // min 0

    h5_l: '0', // min 1200px
    h5_md: '0', // min 960px
    h5: '0', // min 0

    body_l: '0', // min 1200px
    body_md: '0', // min 960px
    body: '0', // min 0

    small_body_l: '0', // min 1200px
    small_body_md: '0', // min 960px
    small_body: '0', // min 0

    caption_l: '0.1px', // min 1200px
    caption_md: '0.1px', // min 960px
    caption: '0.1px', // min 0

    overline_l: '1px', // min 1200px
    overline_md: '1px', // min 960px
    overline: '1px', // min 0

    overline_big_l: '1px', // min 1200px
    overline_big_md: '1px', // min 960px
    overline_big: '1px', // min 0

    overline_small_l: '1px', // min 1200px
    overline_small_md: '1px', // min 960px
    overline_small: '1px', // min 0

    blockquote_l: '0', // min 1200px
    blockquote_md: '0', // min 960px
    blockquote: '0', // min 0

    list_l: '0', // min 1200px
    list_md: '0', // min 960px
    list: '0', // min 0

    link_l: '0', // min 1200px
    link_md: '0', // min 960px
    link: '0', // min 0
  },
  scale: (value, by = 0.1) => {
    by = 1 - by;

    if (value.indexOf(' ') >= 0) {
      value = value.split(' ');
      value = value
        .map((v) => `${Math.floor(+v.split('px')[0] * by)}px`)
        .join(' ');
      return value;
    } else {
      value = value.split('px')[0];
      value = value * by;
      return `${Math.floor(value)}px`;
    }
  },
};

export default theme;

export const boxShadowTransition = css`
  box-shadow: 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035);
  transition: 400ms ease;
  transition-property: transform, box-shadow;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.13),
      0px 6.5703px 29.2013px rgba(0, 0, 0, 0.0896976),
      0px 3.18976px 14.1767px rgba(0, 0, 0, 0.0723178),
      0px 1.56368px 6.94968px rgba(0, 0, 0, 0.0576822),
      0px 0.618281px 2.74791px rgba(0, 0, 0, 0.0403024);
  }
`;

export const li = css`
  margin-bottom: 15px;

  :last-of-type {
    margin-bottom: 0;
  }

  ::marker {
    color: ${theme.colors.tertiary};
  }
`;

export const ol = css`
  list-style-position: inside;

  & > li,
  ol > li {
    counter-increment: item;

    ::marker {
      content: '';
    }

    :before {
      display: inline-block;
      width: 1em;
      padding-right: 1.5em;
      font-weight: bold;
      text-align: right;
      content: counter(item);
      color: ${theme.colors.tertiary};
    }
  }

  ul,
  ol {
    padding-top: 15px;
    padding-left: 20px;
  }
`;

export const ul = css`
  list-style-position: inside;

  ul,
  ol {
    padding-top: 15px;
    padding-left: 20px;
  }
`;

export const defaultTheme = css`
  h1 {
    ${h1};
  }

  h2 {
    ${h2};
  }

  h3 {
    ${h3};
  }

  h4 {
    ${h4}
  }

  h5 {
    ${h5};
  }

  a {
    ${linkStyle};
    font-size: ${theme.fonts.body};

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.body_md};
    }

    @media (min-width: ${theme.breakpoints.l}) {
      font-size: ${theme.fonts.body_l};
    }
  }

  p,
  input,
  li {
    ${p};
  }

  p {
    display: block;
  }

  small {
    ${small};
  }

  blockquote {
    ${blockquote};
  }

  ul {
    ${ul};
  }

  ol {
    ${ol};
  }

  li {
    ${li};
  }
`;
