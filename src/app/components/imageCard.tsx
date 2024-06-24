import React from 'react';

interface ImageCardProps {
    id?: string; 
  imgSrc: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, imgSrc }) => {
  return (
    <div id={id} className="row justify-content-center mt-5 mb-5">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
        <div className="around p-4 d-block shadow text-decoration-none">
          <div className="info">
            <img src={imgSrc} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

