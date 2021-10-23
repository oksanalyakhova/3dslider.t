import React from 'react';
import PropTypes from 'prop-types';

/* Elements Decoration Icons */
const GlobalIcons = ({ type }) => {
  return type === 'cross' ? (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4515 0.132631L0.458388 13.1257C0.385468 13.1986 0.385468 13.318 0.458388 13.3909L1.51905 14.4515C1.59197 14.5245 1.71129 14.5245 1.78421 14.4515L14.7773 1.45846C14.8502 1.38554 14.8502 1.26621 14.7773 1.19329L13.7166 0.132631C13.6437 0.059711 13.5244 0.0597113 13.4515 0.132631Z"
        fill="#232222"
      />
      <path
        d="M14.4515 13.384L1.45839 0.390883C1.38547 0.317963 1.26614 0.317963 1.19322 0.390883L0.132563 1.45154C0.0596426 1.52446 0.0596426 1.64379 0.132563 1.71671L13.1256 14.7098C13.1986 14.7827 13.3179 14.7827 13.3908 14.7098L14.4515 13.6491C14.5244 13.5762 14.5244 13.4569 14.4515 13.384Z"
        fill="#232222"
      />
    </svg>
  ) : type === 'prevArrow' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
        fill="white"
      />
    </svg>
  ) : type === 'nextArrow' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z"
        fill="white"
      />
    </svg>
  ) : (
    <></>
  );
};

GlobalIcons.propTypes = {
  type: PropTypes.string,
};

GlobalIcons.defaultProps = {
  type: '',
};

export default GlobalIcons;
