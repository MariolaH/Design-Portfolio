import React from 'react';
import Link from 'next/link';

interface ImageAndTextCardProps {
  href: string;
  imgSrc: string;
  text: string;
}

const ImageAndTextCard: React.FC<ImageAndTextCardProps> = ({ href, imgSrc, text }) => {
  return (
    <div className="col-md-2 d-flex justify-content-center">
      <Link href={href} className="btn btn-light p-4 d-block shadow text-decoration-none">
        <img src={imgSrc} alt="Image" />
        <p className="fontSize mt-4">
          <b>{text.split(':')[0]}:</b> {text.split(':')[1]}
        </p>
      </Link>
    </div>
  );
};

export default ImageAndTextCard;


