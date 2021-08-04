import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const linkStyle = css`
  font-size: ${(props) => props.theme.fonts.link};
  letter-spacing: ${(props) => props.theme.letterSpacing.link};
  font-weight: 600;
  font-style: normal;
  color: ${(props) => props.theme.colors.primary};
  line-height: 1.4;
  display: inline-block;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: 300ms linear;
  transition-property: color;
  will-change: color;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fonts.link_md};
    letter-spacing: ${(props) => props.theme.letterSpacing.link_md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fonts.link_l};
    letter-spacing: ${(props) => props.theme.letterSpacing.link_l};
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  &.secondary {
    color: ${(props) => props.theme.colors.quaternary};

    &::before,
    &::after {
      background: ${(props) => props.theme.colors.quaternary};
    }

    &:hover {
      &::before,
      &::after {
        background: ${(props) => props.theme.colors.quaternary};
      }
    }
  }

  &.recursive {
    color: ${(props) => props.theme.colors.recursive};

    &::before,
    &::after {
      background: ${(props) => props.theme.colors.recursive};
    }

    &:hover {
      &::before,
      &::after {
        background: ${(props) => props.theme.colors.recursive};
      }
    }
  }
`;

export const ExternalLink = styled.a`
  ${linkStyle};
`;

export const InternalLink = styled(Link)`
  ${linkStyle};
`;
