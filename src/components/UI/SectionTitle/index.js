import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './styles';

const SectionTitle = ({
  lightdarkMode,
  text,
  displaced,
  small,
  maxWidth,
  line = true,
}) => {
  return (
    <>
      {text && (
        <Title
          elementTheme={small ? 'h4' : 'h2'}
          lightdarkMode={lightdarkMode}
          displaced={displaced}
          maxWidth={maxWidth}
          line={line}
          className="bold"
        >
          {text}
        </Title>
      )}
    </>
  );
};

SectionTitle.propTypes = {
  lightdarkMode: PropTypes.bool,
  text: PropTypes.string,
  displaced: PropTypes.bool,
  small: PropTypes.bool,
  maxWidth: PropTypes.number,
  line: PropTypes.bool,
};

export default SectionTitle;
