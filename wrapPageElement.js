/* eslint react/prop-types: 0, react/display-name: 0 */
import React from 'react';
import GlobalStyle from './src/utils/styles/global';
import theme from './src/utils/styles/theme';
import { ThemeProvider } from 'styled-components';

const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{element}</main>
    </ThemeProvider>
  );
};

export default wrapPageElement;
