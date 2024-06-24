import React from 'react';

interface SectionProps {
  title: string;
  content: Array<{
    subheading?: string;
    paragraphs: string[];
  }>;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <section className="container text-center py-5">
      <h2 className="mb-5 mt-5">{title}</h2>
      {content.map((block, index) => (
        <div className="row justify-content-center mt-3" key={index}>
          <div className="col-12 col-md-8 d-flex justify-content-center">
            <div className="p-4 d-block text-decoration-none">
              <div className="content">
                {block.subheading && <h5 className="mb-4">{block.subheading}</h5>}
                {block.paragraphs.map((paragraph, i) => (
                  <p className="lead-responsive" key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section;
