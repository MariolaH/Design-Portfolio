import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import Icon from "./icons";
import styles from "./HomePage.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <header className="text-center text-light py-5 homepageHeader">
          <h1 className="display-4">Hi, I&apos;m Mariola</h1>
          <p className="lead">A UX / UI Designer and Software Developer</p>
          <div className="mt-4">
            {/* <Link href="/bio" className="btn btn-purple btn-equal mx-2">
              More About Me
            </Link> */}

            <Link
              href="https://mariola-portfolio.vercel.app/"
              target="_blank"
              className="btn btn-equal btn-outline-light btn-white mx-2"
            >
              Developer Portfolio
            </Link>

            <div className="button-group">
              <Link
                href="https://www.linkedin.com/in/mariola-hullings/"
                target="_blank"
                className="btn btn-purple btn-icon mx-2"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="icon-svg" />
              </Link>
              <Link
                href="https://github.com/MariolaH"
                target="_blank"
                className="btn btn-purple btn-icon mx-2"
              >
                <img src="/github.svg" alt="GitHub" className="icon-svg" />
              </Link>
            </div>
          </div>
        </header>
      </div>

      <section className="container text-center py-5">
        <h2 className="mb-4 section-heading p-4">UX / UI DESIGN</h2>
        <div className="row p-4 justify-content-center">

          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link
              href="/caseStudyThree"
              className="btn btn-light p-4 d-block shadow text-decoration-none equal-size image-hover-container"
            >
              <div className="mb-3 image-container">
                <img
                  src="/Musuem.png"
                  className="img-fluid default-image hover-image"
                />
                <img src="/MusuemMockup.png" className="img-fluid" />
              </div>
              <p className="text-muted">Museum Website</p>
            </Link>
          </div>

          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link
              href="/caseStudyOne"
              className="btn btn-light p-4 d-block shadow text-decoration-none equal-size image-hover-container"
            >
              <div className="mb-3 image-container">
                <img
                  src="/Flowerwireframe.png"
                  className="img-fluid default-image hover-image"
                />
                <img src="/CaseStudy1.png" className="img-fluid" />
              </div>
              <p className="text-muted">Flower Catalogue Website</p>
            </Link>
          </div>

          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link
              href="/caseStudyTwo"
              className="btn btn-light p-4 d-block shadow text-decoration-none custom-hover equal-size"
            >
              <div className="mb-3">
                <img src="/app.png" className="img-fluid small-img" />
              </div>
              <p className="text-muted">Flower Catalogue App</p>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="container text-center py-5">
  <h2 className="mb-4 section-heading p-4 text-uppercase">UX Certificates</h2>
  <div className="row justify-content-center p-4">
    <div className="col-md-4 mb-4">
      <Link href="/caseStudyOne" className="btn btn-light p-4 d-block shadow text-decoration-none equal-size image-hover-container">
        <div className="mb-3 image-container">
          <img src="/Google.png" className="img-fluid"/>
        </div>
        <p className="text-muted">Google UX Design Professional Certificate</p>
      </Link>
    </div>
  </div>
</section> */}

      <div className="container text-center py-5">
        <h2 className="mb-4 section-heading p-4 text-uppercase">Skills</h2>
        <div className="row p-4">
        <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Audit.svg" alt="Bootstrap" />
          <div className="tooltip">Competitive Audits</div>
        </div>
      </div>
    </div>
  <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/paperwireframe.svg" alt="Bootstrap" />
          <div className="tooltip">Paper Wireframing</div>
        </div>
      </div>
    </div>
  <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/DigitalWireframes.svg" alt="Bootstrap" />
          <div className="tooltip">Digital Wireframing</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Apple.svg" alt="Apple" />
          <div className="tooltip">Apple</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Bootstrap.svg" alt="Bootstrap" />
          <div className="tooltip">Bootstrap</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/CSS3.svg" alt="CSS3" />
          <div className="tooltip">CSS3</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Figma.svg" alt="Figma" />
          <div className="tooltip">Figma</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/HTML5.svg" alt="HTML5" />
          <div className="tooltip">HTML5</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/JavaScript.svg" alt="JavaScript" />
          <div className="tooltip">JavaScript</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/JSON.svg" alt="JSON" />
          <div className="tooltip">JSON</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/MongoDB.svg" alt="MongoDB" />
          <div className="tooltip">MongoDB</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/next.svg" alt="Next.js" />
          <div className="tooltip">NEXT.js</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Python.svg" alt="Python" />
          <div className="tooltip">Python</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/React.svg" alt="React" />
          <div className="tooltip">React</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Realm.svg" alt="Realm" />
          <div className="tooltip">Realm</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/SQLite.svg" alt="SQLite" />
          <div className="tooltip">SQLite</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/vercel.svg" alt="Vercel" />
          <div className="tooltip">Vercel</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/VisualStudioCode.svg" alt="Visual Studio Code" />
          <div className="tooltip">Visual Studio Code</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Xcode.svg" alt="Xcode" />
          <div className="tooltip">Xcode</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Firebase.svg" alt="Firebase" />
          <div className="tooltip">Firebase</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4 skill-container">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Git.svg" alt="Git" />
          <div className="tooltip">Git</div>
        </div>
      </div>
      </div>

        {/* <SkillCard imgSrc="skills/Design.svg" altText="UX / UI Design" tooltipText="UX / UI Design" />
        <SkillCard imgSrc="skills/Audit.svg" altText="Competitive Audits" tooltipText="Competitive Audits" />
        <SkillCard imgSrc="skills/paperwireframe.svg" altText="Paper Wireframing" tooltipText="Paper Wireframing" />
        <SkillCard imgSrc="skills/DigitalWireframes.svg" altText="Digital Wireframing" tooltipText="Digital Wireframing" />
        <SkillCard imgSrc="skills/Apple.svg" altText="Apple" tooltipText="Apple" />
        <SkillCard imgSrc="skills/Bootstrap.svg" altText="Bootstrap" tooltipText="Bootstrap" />
        <SkillCard imgSrc="skills/CSS3.svg" altText="CSS3" tooltipText="CSS3" />
        <SkillCard imgSrc="skills/Figma.svg" altText="Figma" tooltipText="Figma" />
        <SkillCard imgSrc="skills/HTML5.svg" altText="HTML5" tooltipText="HTML5" />
        <SkillCard imgSrc="skills/JavaScript.svg" altText="JavaScript" tooltipText="JavaScript" />
        <SkillCard imgSrc="skills/JSON.svg" altText="JSON" tooltipText="JSON" />
        <SkillCard imgSrc="skills/MongoDB.svg" altText="MongoDB" tooltipText="MongoDB" />
        <SkillCard imgSrc="skills/next.svg" altText="NEXT.js" tooltipText="NEXT.js" />
        <SkillCard imgSrc="skills/Python.svg" altText="Python" tooltipText="Python" />
        <SkillCard imgSrc="skills/React.svg" altText="React" tooltipText="React" />
        <SkillCard imgSrc="skills/Realm.svg" altText="Realm" tooltipText="Realm" />
        <SkillCard imgSrc="skills/SQLite.svg" altText="SQLite" tooltipText="SQLite" />
        <SkillCard imgSrc="skills/vercel.svg" altText="Vercel" tooltipText="Vercel" />
        <SkillCard imgSrc="skills/VisualStudioCode.svg" altText="Visual Studio Code" tooltipText="Visual Studio Code" />
        <SkillCard imgSrc="skills/Xcode.svg" altText="Xcode" tooltipText="Xcode" /> 
        <SkillCard imgSrc="skills/Firebase.svg" altText="Firebase" tooltipText="Firebase" /> 
        <SkillCard imgSrc="skills/Git.svg" altText="Git" tooltipText="Git" />  */}
        </div>
      </div>
    </div>
  );
}
