import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import loadable from '@loadable/component';
import { convertRgb } from '@react-vertex/color-hooks';
import hexToRgba from 'hex-to-rgba';
import gsap from 'gsap';
import ThreeDTooltip from './ThreeDTooltip';
import ThreeDSlide from './ThreeDSlide';
import GlobalIcons from 'components/GlobalIcons/GlobalIcons';

import {
  SliderHeader,
  SliderHeaderTypography,
  SliderBody,
  SampleArrow,
  SampleDots,
  SampleDot,
  SampleDotIcon,
  SampleDotLoading,
  SampleDotTitle,
  ThreeDModelWrapper,
} from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ModelViewer = loadable.lib(() =>
  import('@google/model-viewer/dist/model-viewer')
);

const ThreeDSlider = ({ title, cta, popup, steps, show }) => {
  const [active, setActive] = useState();
  const [activeColor, setActiveColor] = useState(0);
  const [translate, setTranslate] = useState(0);
  const speed = 5000;

  useEffect(() => {
    if (show) {
      setActive(0);
    }
  }, [show]);

  const slideChanges = (active) => {
    if (active < steps.length - 1) setTranslate(-235 * active);
    if (active === steps.length - 1)
      setTimeout(() => setTranslate(0), speed + 100);

    setActive(active);
    setActiveColor(active);
  };

  useEffect(() => {
    const modelViewerColor = document.querySelector('model-viewer#model');
    const material = modelViewerColor?.model?.materials[0];

    let colors = { color: `${hexToRgba(steps[activeColor].hexColor)}` };

    gsap.to(colors, {
      duration: (speed + 100) / 1000,
      currentColor: `${hexToRgba(steps[activeColor].hexColor)}`,
      onUpdate: () => {
        material?.pbrMetallicRoughness?.setBaseColorFactor(
          convertRgb(colors.currentColor)
        );
      },
    });
  }, [activeColor, steps]);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <SampleArrow
      {...props}
      className="prev-slick-arrow"
      aria-hidden="true"
      aria-disabled={currentSlide === 0}
      type="button"
    >
      <GlobalIcons className="next-slick-arrow__icon" type="prevArrow" />
    </SampleArrow>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <SampleArrow
      {...props}
      className="next-slick-arrow"
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1}
      type="button"
    >
      <GlobalIcons className="next-slick-arrow__icon" type="nextArrow" />
    </SampleArrow>
  );

  const pagination = [];

  if (Array.isArray(steps)) steps.map((step) => pagination.push(step?.title));

  const modelStyles = {
    width: '100%',
    height: '100%',
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: speed,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
        },
      },
    ],
    afterChange: (current) => {
      slideChanges(current);
    },
    appendDots: (dots) => (
      <SampleDots className="slick-dots" translate={translate}>
        {dots}
      </SampleDots>
    ),
    customPaging: (i) => (
      <SampleDot className="slick-dot">
        <SampleDotIcon className="slick-dot__custom" />
        {i < steps.length - 1 && (
          <SampleDotLoading
            isActive={active === i}
            className={`slick-dot__loading ${active === i ? 'is-active' : ''}`}
          />
        )}
        <SampleDotTitle className="slick-dot__title" elementTheme="bold">
          {pagination[i]}
        </SampleDotTitle>
      </SampleDot>
    ),
  };

  return (
    <>
      <SliderHeader>
        <SliderHeaderTypography elementTheme="h3 semi-bold">
          {title}
        </SliderHeaderTypography>
        <ThreeDTooltip ctaText={cta} popupBody={popup} />
      </SliderHeader>
      <SliderBody>
        {steps && (
          <Slider {...sliderSettings}>
            {steps.map((step) => (
              <ThreeDSlide key={step?.contentful_id} slide={step} />
            ))}
          </Slider>
        )}

        <ThreeDModelWrapper>
          <ModelViewer>
            {({ default: viewer }) => (
              <model-viewer
                id="model"
                src="bowtie-10k.glb"
                ios-src="bowtie-10k.usdz"
                alt="A 3D model"
                shadow-intensity="0"
                camera-controls
                disable-zoom
                interaction-prompt="none"
                camera-orbit="35deg 55deg"
                ar-modes="webxr scene-viewer quick-look"
                style={modelStyles}
              />
            )}
          </ModelViewer>
        </ThreeDModelWrapper>
      </SliderBody>
    </>
  );
};

ThreeDSlider.prototype = {
  title: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  popup: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired,
  autoplay: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
};

ThreeDSlider.defaultProps = {
  title: '',
  cta: '',
  popup: {},
  steps: [],
  autoplay: false,
  show: false,
};

export default ThreeDSlider;
