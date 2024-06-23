import React from 'react';
import Link from 'next/link';

interface LinkCardProps {
  href: string;
  imgSrc: string;
  text: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, imgSrc, text }) => {
  return (
    <div className="col-md-2 d-flex justify-content-center">
      <Link href={href} className="btn btn-light p-4 d-block shadow text-decoration-none pt-5">
        {/* <div className="img-fluid"> */}
          <img src={imgSrc} alt="Image" />
          <p className='pt-2'>{text}</p>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default LinkCard;
