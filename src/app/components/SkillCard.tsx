import React from 'react';

interface SkillCardProps {
  imgSrc: string;
  altText: string;
  tooltipText: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imgSrc, altText, tooltipText }) => {
  return (
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <img src={imgSrc} alt={altText} className="img-fluid" />
          <div className="tooltip">{tooltipText}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

