import React from 'react';
import Link from 'next/link';

interface ImageAndTextCardProps {
  href: string;
  imgSrc: string;
  text: string;
}

const ImageAndTextCard: React.FC<ImageAndTextCardProps> = ({ href, imgSrc, text }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-2 d-flex pt-3 justify-content-center">
      <Link href={href} className="btn btn-light p-4 d-block shadow text-decoration-none link-card">
        <img src={imgSrc} alt="Image" />
        <p className="fontSize mt-4">
          <b className='mainHeader'>{text.split(':')[0]}:</b> {text.split(':')[1]}
        </p>
      </Link>
    </div>
  );
};

export default ImageAndTextCard;


