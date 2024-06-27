import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "/src/app/styles/global.css";
import Icon from "./icons";
import styles from './HomePage.module.css';

export default function Home() {
  return (
    <div>
      {/* <div>
        <header
          className="text-center text-light py-5 homepageHeader"
          style={{
            backgroundImage: 'url("/crystal-7428278_1280.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
        >
          <h1 className="display-4">Hi, I&apos;m Mariola</h1>
          <p className="lead">A UX/UI Designer and Software Developer</p>
          <div className="mt-4">
            <Link href="/bio" className="btn btn-purple btn-equal mx-2">
              More About Me
            </Link>
            <Link
              href="https://mariola-portfolio.vercel.app/"
              target="_blank"
              className="btn btn-equal btn-outline-light btn-white mx-2"
            >
              Developer Portfolio
            </Link>
          </div>
        </header>
      </div> */}

      <div>
      <header className="text-center text-light py-5 homepageHeader">
        <h1 className="display-4">Hi, I&apos;m Mariola</h1>
        <p className="lead">A UX / UI Designer and Software Developer</p>
        <div className="mt-4">
        <Link href="/bio" className="btn btn-purple btn-equal mx-2">
              More About Me
            </Link>
          
            <Link
              href="https://mariola-portfolio.vercel.app/"
              target="_blank"
              className="btn btn-equal btn-outline-light btn-white mx-2"
            >
              Developer Portfolio
            </Link>
        </div>
      </header>
    </div>

      <section className="container text-center py-5">
  <h2 className="mb-4 section-heading p-4">UX / UI DESIGN</h2>
  <div className="row p-4">
    <div className="col-md-4 mb-4">
      <Link href="/caseStudyOne" className="btn btn-light p-4 d-block shadow text-decoration-none equal-size">
        <div className="mb-3">
          <img src="/CaseStudy1.png" className="img-fluid"/>
        </div>
        <p className="text-muted">Flower Catalogue Website</p>
        <p className="text-muted">COMING SOON...</p>
      </Link>
    </div>
    <div className="col-md-4 mb-4">
      <Link href="/caseStudyTwo" className="btn btn-light p-4 d-block shadow text-decoration-none custom-hover equal-size">
        <div className="mb-3">
        <img src="/app.png" className="img-fluid small-img"/>
        </div>
        <p className="text-muted">Flower Catalogue App</p>
        <p className="text-muted">COMING SOON...</p>
      </Link>
    </div>
    <div className="col-md-4 mb-4">
      <Link href="/caseStudyThree" className="btn btn-light p-4 d-block shadow text-decoration-none equal-size image-hover-container">
        <div className="mb-3 image-container">
        <img src="/MusuemMockup.png" className="img-fluid default-image hover-image"/>
          <img src="/Musuem.png" className="img-fluid"/>
        </div>
        <p className="text-muted">Museum Website</p>
      </Link>
    </div>
  </div>
</section>

<div className="container text-center py-5">
  <h2 className="mb-4 section-heading p-4">SKILLS</h2>
  <div className="row p-4">

  <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Design.svg" alt="Bootstrap" />
          <div className="tooltip">UX / UI Design</div>
        </div>
      </div>
    </div>

  <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Audit.svg" alt="Bootstrap" />
          <div className="tooltip">Competitive Audits</div>
        </div>
      </div>
    </div>

  <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/paperwireframe.svg" alt="Bootstrap" />
          <div className="tooltip">Paper Wireframing</div>
        </div>
      </div>
    </div>

  <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/DigitalWireframes.svg" alt="Bootstrap" />
          <div className="tooltip">Digital Wireframing</div>
        </div>
      </div>
    </div>


    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Apple.svg" alt="Apple" />
          <div className="tooltip">Apple</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Bootstrap.svg" alt="Bootstrap" />
          <div className="tooltip">Bootstrap</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/CSS3.svg" alt="CSS3" />
          <div className="tooltip">CSS3</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Figma.svg" alt="Figma" />
          <div className="tooltip">Figma</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/HTML5.svg" alt="HTML5" />
          <div className="tooltip">HTML5</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/JavaScript.svg" alt="JavaScript" />
          <div className="tooltip">JavaScript</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/JSON.svg" alt="JSON" />
          <div className="tooltip">JSON</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/MongoDB.svg" alt="MongoDB" />
          <div className="tooltip">MongoDB</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/next.svg" alt="Next.js" />
          <div className="tooltip">NEXT.js</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Python.svg" alt="Python" />
          <div className="tooltip">Python</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/React.svg" alt="React" />
          <div className="tooltip">React</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Realm.svg" alt="Realm" />
          <div className="tooltip">Realm</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/SQLite.svg" alt="SQLite" />
          <div className="tooltip">SQLite</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/vercel.svg" alt="Vercel" />
          <div className="tooltip">Vercel</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/VisualStudioCode.svg" alt="Visual Studio Code" />
          <div className="tooltip">Visual Studio Code</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Xcode.svg" alt="Xcode" />
          <div className="tooltip">Xcode</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Firebase.svg" alt="Firebase" />
          <div className="tooltip">Firebase</div>
        </div>
      </div>
    </div>
    <div className="col-6 col-sm-6 col-md-2 mb-4">
      <div className="skill-icon p-4 d-block shadow text-decoration-none">
        <div className="mb-3">
          <Icon src="/skills/Git.svg" alt="Git" />
          <div className="tooltip">Git</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
