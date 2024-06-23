import React from 'react';

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} width="128" height="128"  />;
};

export default Icon;

