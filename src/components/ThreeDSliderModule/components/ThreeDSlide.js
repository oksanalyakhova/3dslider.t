import React from 'react';
import PropTypes from 'prop-types';
import getRichText from '../../../utils/functions/getRichText';
import {
  Slide,
  SlideColor,
  SlideTitle,
  SlideBody,
  SlideMinutesCaption,
  SlideMinutes,
} from './styles';

const ThreeDSlide = ({ slide }) => {
  return (
    <Slide className="slide">
      {slide?.hexColor && (
        <SlideColor className="slide__color" color={slide?.hexColor} />
      )}
      {slide?.title && (
        <SlideTitle className="slide__title" elementTheme="h4 bold">
          {slide?.title}
        </SlideTitle>
      )}
      {slide?.body && (
        <SlideBody className="slide__body">{slide?.body}</SlideBody>
      )}
      {slide?.minutesCaption && (
        <SlideMinutesCaption
          className="slide__minutes-caption"
          elementTheme="bold"
        >
          {slide?.minutesCaption}
        </SlideMinutesCaption>
      )}
      {slide?.minutes && (
        <SlideMinutes className="slide__minutes" elementTheme="h4 bold">
          {slide?.minutes}
        </SlideMinutes>
      )}
    </Slide>
  );
};

ThreeDSlide.propTypes = {
  slide: PropTypes.object.isRequired,
};

ThreeDSlide.defaultProps = {
  slide: {},
};

export default ThreeDSlide;
