import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
  display: inline-flex;
  padding: 11px 16px;
  width: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: initial;
  font-size: 14px;
  line-height: 18.2px;
  border-radius: 0;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: 300ms ease;
  will-change: background-color;
  transition-property: background-color;

  :focus {
    outline: none;
  }

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      #ffd600;
  }

  &.secondary {
    padding: 5px 20px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.recursive};
    color: ${(props) => props.theme.colors.quaternary};

    :hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};

      path {
        fill: ${(props) => props.theme.colors.primary};
      }

      .DotLoader {
        div > div:first-of-type {
          background-color: ${(props) => props.theme.colors.primary};
        }

        div > div:last-of-type {
          border-color: ${(props) => props.theme.colors.primary};
        }
      }
    }

    .DotLoader {
      div > div:first-of-type {
        background-color: ${(props) => props.theme.colors.quaternary};
      }

      div > div:last-of-type {
        border-color: ${(props) => props.theme.colors.quaternary};
      }
    }

    path {
      fill: ${(props) => props.theme.colors.quaternary};
    }

    &.only-icon {
      height: 35px;
      width: 35px;
      padding: 0 !important;
    }
  }

  &.recursive {
    padding: 8px 25px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 27px;
    background-color: ${(props) => props.theme.colors.quaternary};
    color: ${(props) => props.theme.colors.primary};

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      padding: 7px 25px;
      font-size: 19px;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.quaternary};

      path {
        fill: ${(props) => props.theme.colors.quaternary};
      }

      .DotLoader {
        div > div:first-of-type {
          background-color: ${(props) => props.theme.colors.quaternary};
        }
        div > div:last-of-type {
          border-color: ${(props) => props.theme.colors.quaternary};
          opacity: 0.35;
        }
      }
    }

    .DotLoader {
      div > div:first-of-type {
        background-color: ${(props) => props.theme.colors.primary};
      }

      div > div:last-of-type {
        border-color: ${(props) => props.theme.colors.primary};
      }
    }

    path {
      fill: ${(props) => props.theme.colors.primary};
    }

    &.only-icon {
      height: 48px;
      width: 48px;
      padding: 0 !important;
    }
  }
`;
