import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { StandardImage } from './styles';

const MediaAsset = (props) => {
  const { image } = props;

  if (image?.file?.url) {
    return <StandardImage src={image.file.url} alt={image?.title} />;
  }

  const img = image?.gatsbyImageData
    ? getImage(image?.gatsbyImageData)
    : image?.file?.url;
  const alt = image?.title;

  return typeof img !== 'object' &&
    (img?.includes('.svg') || img?.includes('.gif')) ? (
    <StandardImage src={img} alt={alt} />
  ) : img ? (
    <GatsbyImage alt={alt} image={img} />
  ) : (
    <></>
  );
};

export default MediaAsset;
