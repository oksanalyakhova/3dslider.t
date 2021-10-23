import styled from 'styled-components';

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1256px;
  margin: 0px auto;
  position: relative;
  padding: 0;
`;

export const Layout = styled.div`
  background-color: ${(props) => props.bgColor};
  padding-top: ${(props) => props.topSpacing};
  padding-bottom: ${(props) => props.bottomSpacing};
  text-align: ${(props) => props.alignContent};
`;
