import React from "react";
import Icon from "../icons";

interface Skill {
  src: string;
  alt: string;
  tooltip: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="text-center py-5">
      <h2 className="headerFont mainHeader mb-4 section-heading p-4 text-uppercase">
        Skills
      </h2>
      <div className="row p-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="col-4 col-sm-6 col-md-2 mb-4 skill-container"
          >
            <div className="skill-icon p-2 d-block shadow text-decoration-none">
              <div className="mb-3">
                <Icon src={skill.src} alt={skill.alt} />
                <div className="tooltip">{skill.tooltip}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
