import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export const LargeDesktop = ({ children, direction = 'down' }) => {
  const theme = useTheme();
  const breakpoint =
    direction === 'down'
      ? theme.breakpoints.down('1200')
      : theme.breakpoints.up('1200');

  const isLargeDesktop = useMediaQuery(breakpoint);
  return isLargeDesktop ? children : null;
};

export const Desktop = ({ children, direction = 'up' }) => {
  const theme = useTheme();
  const breakpoint =
    direction === 'down'
      ? theme.breakpoints.down('960')
      : theme.breakpoints.up('960');

  const isDesktop = useMediaQuery(breakpoint);
  return isDesktop ? children : null;
};

export const Tablet = ({ children, direction = 'up' }) => {
  const theme = useTheme();
  const breakpoint =
    direction === 'down'
      ? theme.breakpoints.down('600')
      : theme.breakpoints.up('600');

  const isTablet = useMediaQuery(breakpoint);
  return isTablet ? children : null;
};

export const Mobile = ({ children, direction = 'up' }) => {
  const theme = useTheme();
  const breakpoint =
    direction === 'down'
      ? theme.breakpoints.down('600')
      : theme.breakpoints.up('600');

  const isMobile = useMediaQuery(breakpoint);
  return isMobile ? children : null;
};
