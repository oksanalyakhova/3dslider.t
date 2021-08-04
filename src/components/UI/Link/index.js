import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink, InternalLink } from './styles';

const Link = ({ to = '/', target, children, onClick, theme, className }) => {
  return target === '_blank' ? (
    <ExternalLink
      href={to}
      target={target}
      className={`${theme ? theme : ''} ${className ? className : ''}`}
    >
      {children}
    </ExternalLink>
  ) : (
    <InternalLink
      to={to}
      onClick={onClick}
      className={`${theme ? theme : ''} ${className ? className : ''}`}
    >
      {children}
    </InternalLink>
  );
};

Link.propTypes = {
  target: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  theme: PropTypes.string,
};

export default Link;
