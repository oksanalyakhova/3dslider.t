import React from 'react';
import PropTypes from 'prop-types';
import { TypographyStyled } from './styles';

const Typography = ({
  children,
  className,
  style,
  elementTheme,
  as,
  dangerouslySetInnerHTML,
  onClick,
}) => {
  if (!as) {
    if (elementTheme === 'caption' || elementTheme === 'overline') {
      as = 'p';
    } else if (elementTheme === 'small') {
      as = 'small';
    } else if (elementTheme === 'blockquote') {
      as = 'blockquote';
    } else if (elementTheme?.includes('h1')) {
      as = 'h1';
    } else if (elementTheme?.includes('h2')) {
      as = 'h2';
    } else if (elementTheme?.includes('h3')) {
      as = 'h3';
    } else if (elementTheme?.includes('h4')) {
      as = 'h4';
    } else if (elementTheme?.includes('h5')) {
      as = 'h5';
    }
  }

  const typographyProps = {
    as,
    style: style ? style : null,
    className: `${className ? className : ''} Typography ${
      elementTheme ? elementTheme : ''
    }`,
    elementTheme,
    onClick: onClick ? onClick : null,
  };

  return dangerouslySetInnerHTML ? (
    <TypographyStyled
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...typographyProps}
    />
  ) : (
    <TypographyStyled {...typographyProps}>{children}</TypographyStyled>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  elementTheme: PropTypes.oneOf([
    'small',
    'bold',
    'semi-bold',
    'caption',
    'caption small',
    'overline',
    'overline small',
    'overline big',
    'blockquote',
    'h1',
    'h1 semi-bold',
    'h1 bold',
    'h2',
    'h2 semi-bold',
    'h2 bold',
    'h3',
    'h3 semi-bold',
    'h3 bold',
    'h4',
    'h4 semi-bold',
    'h4 bold',
    'h5',
    'h5 semi-bold',
    'h5 bold',
    'body',
  ]),
  as: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Typography;
