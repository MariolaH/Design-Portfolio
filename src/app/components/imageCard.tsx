import React from 'react';

interface ImageCardProps {
    id?: string; 
  imgSrc: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, imgSrc }) => {
  return (
    <div id={id} className="row justify-content-center mt-5 mb-5">
      <div className="col-md-2 d-flex justify-content-center">
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

