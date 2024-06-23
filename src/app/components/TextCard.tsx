import React from 'react';

interface TextCardProps {
  title: string;
  content: string;
}

const TextCard: React.FC<TextCardProps> = ({ title, content }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-2 d-flex justify-content-center">
        <div className="p-4 d-block text-decoration-none">
          <div className="size2">
            <p>
              <b>{title}</b> {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
