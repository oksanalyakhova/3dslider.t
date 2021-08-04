import React from 'react';
import PropTypes from 'prop-types';
import PageTransition from 'gatsby-plugin-page-transitions';

const Transition = ({ children }) => {
  return (
    <PageTransition
      defaultStyle={{
        transition: '500ms',
        transitionProperty: 'opacity, transform',
        opacity: '0',
        transform: 'translateY(15px)',
        width: '100%',
      }}
      transitionStyles={{
        entering: {
          transform: 'translateY(0px)',
          opacity: 1,
        },
        entered: {
          transform: 'translateY(0px)',
          opacity: '1',
        },
        exiting: {
          transform: 'translateY(15px)',
          opacity: '0',
        },
      }}
      transitionTime={500}
    >
      {children}
    </PageTransition>
  );
};

Transition.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Transition;
