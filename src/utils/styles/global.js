import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from './reset';
import { defaultTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    vertical-align: baseline;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: none;
    padding: 0;
    margin: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* scroll-behavior: smooth; */
  }
  body {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.light};
    /* scroll-behavior: smooth; */
    /* overflow: hidden; */
    font-family: ${theme.fontFamily.primary};
    width: 100%;
    --poster-color: transparent !important;
  }

  main {
    > div {
       @media (max-width: ${theme.breakpoints.md}) {
        overflow: hidden;
      }
    }
  }

  ::selection {
    color: white;
    background-color: ${theme.colors.secondary};
  }

   /* width */
   ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.primary};
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    transition: background 400ms ease;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary};
  }

  .button-animate-enter{
    opacity: 0;
    transform: scale(0.7);
  }
  .button-animate-exit{
    opacity: 1;
    transform: scale(1);
  }
  .button-animate-enter-active{
    opacity: 1;
    transform: scale(1);
  }
  .button-animate-exit-active{
    opacity: 0;
    transform: scale(0.7);
  }
  .button-animate-enter-active,
  .button-animate-exit-active {
    transition: 500ms;
    transition-property: opacity, transform;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  ${defaultTheme};
`;

export default GlobalStyle;
