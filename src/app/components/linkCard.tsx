import React from 'react';
import Link from 'next/link';

interface LinkCardProps {
  href: string;
  imgSrc: string;
  text: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, imgSrc, text }) => {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex pt-3 mainHeader justify-content-center">
      <Link href={href} className="btn btn-light d-block shadow pt-3 link-card">
          <img src={imgSrc} alt="Image" />
          <p className='pt-2'>{text}</p>
      </Link>
    </div>
  );
};

export default LinkCard;
