import styled from 'styled-components';

export const TextIcon = styled.span`
  display: inline-block;
  width: 0.6em;
  margin-right: 0.45em;
  color: ${(props) =>
    props.isActive ? props.isActiveColor : props.defaultColor};
`;
