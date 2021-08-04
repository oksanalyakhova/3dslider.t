import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'react-use';
import { useDeviceDetect } from '../../../hooks/useDeviceDetect';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import getRichText from '../../../utils/functions/getRichText';
import PlusMinus from 'components/UI/PlusMinus';
import AluproteckIcons from 'components/AluproteckIcons/AluproteckIcons';
import {
  TooltipWrapper,
  TooltipButton,
  TooltipButtonTypography,
  IconCross,
  TooltipBody,
} from './styles';

const ThreeDTooltip = ({ ctaText, popupBody }) => {
  const { isMobile } = useDeviceDetect();
  const { width } = useWindowSize();

  const tooltipRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const body = getRichText(popupBody);

  const ToggleTooltip = () => {
    setIsActive(!isActive);
  };

  const mouseEnter = () => {
    setIsActive(true);
  };

  const mouseLeave = () => {
    setIsActive(false);
  };

  useOutsideClick(tooltipRef, () => {
    if (isActive) setIsActive(false);
  });

  return (
    <TooltipWrapper className={isActive && 'has-active'} ref={tooltipRef}>
      <TooltipButton
        onClick={() => isMobile && ToggleTooltip()}
        onMouseEnter={() => !isMobile && mouseEnter()}
        onMouseLeave={() => !isMobile && mouseLeave()}
        className={isActive && 'is-active'}
        isActive={isActive}
        width={width}
      >
        <TooltipButtonTypography className="bold" isActive={isActive}>
          <PlusMinus
            isActive={isActive}
            isActiveColor={width < 960 ? '#212121' : '#FFD600'}
          />
          {ctaText && ctaText}
          {isActive && width < 960 && (
            <IconCross>
              <AluproteckIcons type="cross" />
            </IconCross>
          )}
        </TooltipButtonTypography>
      </TooltipButton>
      {isActive && (
        <TooltipBody className={isActive && 'is-visible'} isVisible={isActive}>
          {body}
        </TooltipBody>
      )}
    </TooltipWrapper>
  );
};

ThreeDTooltip.propTypes = {
  ctaText: PropTypes.string.isRequired,
  popupBody: PropTypes.object.isRequired,
};

ThreeDTooltip.defaultProps = {
  ctaText: '',
  popupBody: {},
};

export default ThreeDTooltip;
