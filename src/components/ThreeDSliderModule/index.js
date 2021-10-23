import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import Container from 'components/Container';
import SectionTitle from 'components/UI/SectionTitle';
import ThreeDSlider from './components/ThreeDSlider';
import {
  ThreeDWrapper,
  SectionBg,
  InformationContainer,
  BodyTypography,
} from './styles';

const ThreeDSliderModule = ({ component }) => {
  const { title, secondaryTitle, ThreeDSliderBody, cta, popupBody, steps } =
    component;

  const [show, setShow] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <ThreeDWrapper cap="1256">
      <SectionBg />
      <Container
        inView={inView}
        style={{ position: 'initial' }}
        containerBackgroundColor="transparent"
        topSpacingMobile="40"
        bottomSpacingMobile="38"
        topSpacingDesktop="78"
        bottomSpacingDesktop="83"
        cap="1256"
      >
        <InformationContainer ref={ref}>
          {title && (
            <SectionTitle lightdarkMode={true} text={title} line={false} />
          )}
          {ThreeDSliderBody && (
            <BodyTypography>{ThreeDSliderBody}</BodyTypography>
          )}
        </InformationContainer>
        {show && (
          <ThreeDSlider
            title={secondaryTitle}
            cta={cta}
            popup={popupBody}
            steps={steps}
            show={show}
          />
        )}
      </Container>
    </ThreeDWrapper>
  );
};

ThreeDSliderModule.propTypes = {
  component: PropTypes.object.isRequired,
};

ThreeDSliderModule.defaultProps = {
  component: {},
};

export default ThreeDSliderModule;
