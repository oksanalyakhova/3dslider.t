import React from 'react';
import PropTypes from 'prop-types';
import { TextIcon } from './styles';

const PlusMinus = ({ isActive, isActiveColor, defaultColor }) => {
  return (
    <TextIcon
      isActive={isActive}
      isActiveColor={isActiveColor}
      defaultColor={defaultColor}
    >
      {isActive ? '-' : '+'}
    </TextIcon>
  );
};

PlusMinus.propTypes = {
  isActive: PropTypes.bool,
  isActiveColor: PropTypes.string,
  defaultColor: PropTypes.string,
};

PlusMinus.defaultProps = {
  isActive: false,
  isActiveColor: '#FFD600',
  defaultColor: '#FFD600',
};

export default PlusMinus;
