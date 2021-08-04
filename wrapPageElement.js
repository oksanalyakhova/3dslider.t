/* eslint react/prop-types: 0, react/display-name: 0 */
import React from 'react';
import { LocaleProvider } from 'context/LocaleProvider';
import { HeaderProvider } from 'context/HeaderProvider';
import GlobalStyle from './src/utils/styles/global';
import theme from './src/utils/styles/theme';
import { ThemeProvider } from 'styled-components';

const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <LocaleProvider locale={props.pageContext.locale}>
        <HeaderProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <main>{element}</main>
          </ThemeProvider>
        </HeaderProvider>
      </LocaleProvider>
    </>
  );
};

export default wrapPageElement;
